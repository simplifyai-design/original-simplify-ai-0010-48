// File Location: src/components/Chatbot/Chatbot.tsx
// This version includes the "click outside to close" feature and connects to your Netlify function.

import React, { useState, useEffect, useRef } from 'react';
import './Chatbot.css'; 

interface Message {
  type: 'sent' | 'received' | 'thinking';
  text: string;
}

const Chatbot: React.FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [messages, setMessages] = useState<Message[]>([
        { type: 'received', text: "Hi! How can I help you with our AI and website services today?" }
    ]);
    const [inputValue, setInputValue] = useState<string>('');
    
    const chatMessagesRef = useRef<HTMLDivElement>(null);
    const chatWindowRef = useRef<HTMLDivElement>(null); // Ref for the entire chat window

    // Effect to handle clicking outside the chat window to close it
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            // Check if the chat is open and if the click was outside the chat window
            if (isOpen && chatWindowRef.current && !chatWindowdRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        // Add the event listener to the whole document
        document.addEventListener('mousedown', handleClickOutside);

        // Cleanup function to remove the listener when the component is no longer needed
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]); // This effect depends on the 'isOpen' state

    // Effect to scroll to the bottom when new messages are added
    useEffect(() => {
        if (chatMessagesRef.current) {
            chatMessagesRef.current.scrollTop = chatMessagesRef.current.scrollHeight;
        }
    }, [messages]);

    const toggleChat = () => {
        setIsOpen(!isOpen);
    };

    const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const userMessage = inputValue.trim();
        if (!userMessage) return;

        setMessages(prev => [...prev, { type: 'sent', text: userMessage }]);
        setInputValue('');
        
        // Show a "thinking" message immediately
        setMessages(prev => [...prev, { type: 'thinking', text: '...' }]);

        try {
            // This now points to your Netlify Function, using the name you chose
            const response = await fetch('/.netlify/functions/chatbot', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ message: userMessage }),
            });

            if (!response.ok) throw new Error('Network response was not ok.');
            
            const data = await response.json();

            // Replace the "thinking" message with the real reply
            setMessages(prev => {
                const newMessages = prev.filter(msg => msg.type !== 'thinking');
                return [...newMessages, { type: 'received', text: data.reply }];
            });

        } catch (error) {
            console.error('Chatbot Error:', error);
            // Replace the "thinking" message with an error message
            setMessages(prev => {
                const newMessages = prev.filter(msg => msg.type !== 'thinking');
                return [...newMessages, { type: 'received', text: 'Sorry, I\'m having trouble connecting. Please try again later.' }];
            });
        }
    };

    // The chat bubble that is always visible
    const chatBubble = (
        <div id="scb-chat-bubble" className="scb-chat-bubble" onClick={toggleChat}>
             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="30px" height="30px"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 9h12v2H6V9zm8 5H6v-2h8v2zm4-4H6V6h12v2z" /></svg>
        </div>
    );
    
    // The main chat window, conditionally rendered
    const chatWindow = (
        // Attach the ref to the main window div
        <div id="scb-chat-window" className={`scb-chat-window ${isOpen ? 'is-open' : ''}`} ref={chatWindowRef}>
            <div className="scb-chat-header">
                <h3>Simplify Bot</h3>
                <button id="scb-close-chat" className="scb-close-chat" onClick={toggleChat}>&times;</button>
            </div>
            <div id="scb-chat-messages" className="scb-chat-messages" ref={chatMessagesRef}>
                {messages.map((msg, index) => (
                    <div key={index} className={`scb-message ${msg.type}`}>
                        {msg.text}
                    </div>
                ))}
            </div>
            <form id="scb-chat-form" className="scb-chat-form" onSubmit={handleFormSubmit}>
                <input
                    type="text"
                    id="scb-chat-input"
                    className="scb-chat-input"
                    placeholder="Type your message..."
                    autoComplete="off"
                    value={inputValue}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value)}
                    required
                />
                <button type="submit" aria-label="Send message">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="24px" height="24px"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
                </button>
            </form>
        </div>
    );

    return (
        <>
            {chatBubble}
            {isOpen && chatWindow}
        </>
    );
};

export default Chatbot;
