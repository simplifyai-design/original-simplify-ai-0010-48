
// CORRECTED VERSION for: src/components/Chatbot/Chatbot.tsx

import React, { useState, useEffect, useRef } from 'react';
import { Mic, Send } from 'lucide-react';
import { useConversation } from '@11labs/react';
import './Chatbot.css'; 

interface Message {
  type: 'sent' | 'received' | 'thinking';
  text: string;
}

const Chatbot: React.FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [messages, setMessages] = useState<Message[]>([
        { type: 'received', text: "Hi! How can I help you? You can type a message or click the microphone to speak." }
    ]);
    const [inputValue, setInputValue] = useState<string>('');
    
    const chatMessagesRef = useRef<HTMLDivElement>(null);
    const chatWindowRef = useRef<HTMLDivElement>(null);

    // --- 11Labs Voice Integration ---
    const {
        status,
        startSession,
        endSession,
    } = useConversation({
        agentId: "agent_01jy9rbd3te3ssm7xhtjrann42", // Your Agent ID
        getWsToken: async () => {
            const response = await fetch('/.netlify/functions/get-elevenlabs-token');
            const data = await response.json();
            return data.token;
        },
        onMessage: (message) => {
            if (message.source === 'ai' && message.message) {
                setMessages(prev => [...prev, { type: 'received', text: message.message }]);
            } else if (message.source === 'user' && message.message) {
                setMessages(prev => [...prev, { type: 'sent', text: message.message }]);
            }
        },
        onError: (error) => {
            console.error("ElevenLabs Error:", error);
            setMessages(prev => [...prev, { type: 'received', text: 'Sorry, my voice service is having an issue.' }]);
        }
    });

    // Effect to handle clicking outside the chat window to close it
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (isOpen && chatWindowRef.current && !chatWindowRef.current.contains(event.target as Node)) {
                if (status === 'connected') endSession(); // Stop voice session if clicking out
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [isOpen, status, endSession]); 

    // Effect to scroll to the bottom when new messages are added
    useEffect(() => {
        if (chatMessagesRef.current) {
            chatMessagesRef.current.scrollTop = chatMessagesRef.current.scrollHeight;
        }
    }, [messages]);

    const toggleChat = () => {
        setIsOpen(!isOpen);
        if (isOpen && status === 'connected') { // if closing window, stop voice session
            endSession();
        }
    };

    // This handles TEXT submissions
    const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const userMessage = inputValue.trim();
        if (!userMessage) return;

        setMessages(prev => [...prev, { type: 'sent', text: userMessage }]);
        setInputValue('');
        setMessages(prev => [...prev, { type: 'thinking', text: '...' }]);

        try {
<<<<<<< Updated upstream
            const response = await fetch('/.netlify/functions/chatbot', {
=======
            // --- BACKEND COMMUNICATION ---
            // Replace with your actual deployed backend URLconst response = await fetch
            ('http://localhost:5000/ask', {
>>>>>>> Stashed changes
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ message: userMessage }),
            });
            if (!response.ok) throw new Error('Network response was not ok.');
            const data = await response.json();
            setMessages(prev => {
                const newMessages = prev.filter(msg => msg.type !== 'thinking');
                return [...newMessages, { type: 'received', text: data.reply }];
            });
        } catch (error) {
            console.error('Chatbot Error:', error);
            setMessages(prev => {
                const newMessages = prev.filter(msg => msg.type !== 'thinking');
                return [...newMessages, { type: 'received', text: 'Sorry, I\'m having trouble connecting. Please try again later.' }];
            });
        }
    };

    // This handles the smart action button click
    const handleActionButtonClick = () => {
        if (inputValue) {
            const form = document.getElementById('scb-chat-form') as HTMLFormElement;
            if(form) form.requestSubmit();
        } else {
            if (status === 'connected') {
                endSession();
            } else {
                startSession();
            }
        }
    };
    
    // This decides which icon to show on the smart action button
    const renderActionButton = () => {
        const isListening = status === 'connected';
        if (inputValue && !isListening) {
            return <Send size={20} />;
        }
        return <Mic size={20} />;
    };

    // Get placeholder text based on current state
    const getPlaceholderText = () => {
        if (status === 'connected') {
            return 'Listening...';
        }
        return 'Type or click mic to speak...';
    };

    return (
        <>
            <div id="scb-chat-bubble" className="scb-chat-bubble" onClick={toggleChat}>
                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="30px" height="30px"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 9h12v2H6V9zm8 5H6v-2h8v2zm4-4H6V6h12v2z" /></svg>
            </div>
            
            {isOpen && (
                <div id="scb-chat-window" className="scb-chat-window" ref={chatWindowRef}>
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
                         {status === 'connected' && <div className="scb-message thinking">Listening...</div>}
                    </div>
                    <form id="scb-chat-form" className="scb-chat-form" onSubmit={handleFormSubmit}>
                        <input
                            type="text"
                            id="scb-chat-input"
                            className="scb-chat-input"
                            placeholder={getPlaceholderText()}
                            autoComplete="off"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            disabled={status === 'connected'}
                        />
                        <button 
                            type="button" 
                            onClick={handleActionButtonClick}
                            className={`scb-action-button ${status === 'connected' ? 'listening' : ''}`} 
                            aria-label={inputValue ? 'Send message' : (status === 'connected' ? 'Stop listening' : 'Start voice input')}
                        >
                            {renderActionButton()}
                        </button>
                    </form>
                </div>
            )}
        </>
    );
};

export default Chatbot;
