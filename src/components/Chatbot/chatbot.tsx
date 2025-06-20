import React, { useState, useEffect, useRef } from 'react';
import './Chatbot.css'; // Import the stylesheet

// Define the structure of a message object for TypeScript
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

        // Add user message to chat and clear input
        setMessages(prev => [...prev, { type: 'sent', text: userMessage }]);
        setInputValue('');

        // Add a temporary "thinking" message for better UX
        setTimeout(() => {
            setMessages(prev => [...prev, { type: 'thinking', text: '...' }]);
        }, 300);

        try {
            // --- BACKEND COMMUNICATION ---
            // Replace with your actual deployed backend URL
            const response = await fetch('http://localhost:5000/ask', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ message: userMessage }),
            });

            if (!response.ok) throw new Error('Network response was not ok.');

            const data = await response.json();

            // Replace "thinking" message with the actual reply
            setMessages(prev => {
                const newMessages = prev.filter(msg => msg.type !== 'thinking');
                return [...newMessages, { type: 'received', text: data.reply }];
            });

        } catch (error) {
            console.error('Chatbot Error:', error);
             // Replace "thinking" message with an error message
             setMessages(prev => {
                const newMessages = prev.filter(msg => msg.type !== 'thinking');
                return [...newMessages, { type: 'received', text: 'Sorry, I\'m having trouble connecting. Please try again later.' }];
            });
        }
    };

    return (
        <>
            <div id="scb-chat-bubble" className="scb-chat-bubble" onClick={toggleChat}>
                {/* SVG Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="30px" height="30px"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 9h12v2H6V9zm8 5H6v-2h8v2zm4-4H6V6h12v2z" /></svg>
            </div>

            <div id="scb-chat-window" className={`scb-chat-window ${isOpen ? '' : 'closed'}`}>
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
                        {/* Send Icon SVG */}
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="24px" height="24px"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
                    </button>
                </form>
            </div>
        </>
    );
};

export default Chatbot;
