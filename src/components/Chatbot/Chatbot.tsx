// FINAL VERSION with VOICE for: src/components/Chatbot/Chatbot.tsx

import React, { useState, useEffect, useRef } from 'react';
import { Mic, Send } from 'lucide-react'; // Using lucide-react icons
import { useConversation } from '@11labs/react';
import './Chatbot.css'; 

interface Message {
  type: 'sent' | 'received' | 'thinking';
  text: string;
}

const Chatbot: React.FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [messages, setMessages] = useState<Message[]>([
        { type: 'received', text: "Hi! How can I help you with our AI and website services today? You can type or use the microphone to speak." }
    ]);
    const [inputValue, setInputValue] = useState<string>('');
    
    const chatMessagesRef = useRef<HTMLDivElement>(null);
    const chatWindowRef = useRef<HTMLDivElement>(null);

    // --- 11Labs Voice Integration ---
    const {
        status,
        start,
        stop,
        transcript,
    } = useConversation({
        agentId: "agent_01jy9rbd3te3ssm7xhtjrann42", // Your Agent ID
        onMessage: (message) => {
            if (message.type === 'text' && message.text) {
                setMessages(prev => [...prev, { type: 'received', text: message.text }]);
            }
        },
        onError: (error) => {
            console.error("ElevenLabs Error:", error);
            setMessages(prev => [...prev, { type: 'received', text: 'Sorry, my voice service is having an issue right now.' }]);
        }
    });

    // This handles adding the user's final speech transcript to the chat log
    useEffect(() => {
        if (transcript?.text) {
             setMessages(prev => [...prev, { type: 'sent', text: transcript.text }]);
        }
    }, [transcript]);

    // --- Existing Logic, slightly modified ---
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (isOpen && chatWindowRef.current && !chatWindowRef.current.contains(event.target as Node)) {
                if (status === 'connected') stop(); // Stop voice session if clicking out
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [isOpen, status, stop]); 

    useEffect(() => {
        if (chatMessagesRef.current) {
            chatMessagesRef.current.scrollTop = chatMessagesRef.current.scrollHeight;
        }
    }, [messages]);

    const toggleChat = () => {
        setIsOpen(!isOpen);
        if (isOpen && status === 'connected') { // if closing window, stop voice session
            stop();
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
            const response = await fetch('/.netlify/functions/chatbot', {
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

    // This handles the VOICE button click
    const handleVoiceButtonClick = () => {
        if (status === 'connected') {
            stop();
        } else {
            start();
        }
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
                    <div className="scb-input-area">
                        {/* Microphone Button */}
                        <button onClick={handleVoiceButtonClick} className={`scb-voice-button ${status === 'connected' ? 'listening' : ''}`} aria-label="Toggle voice input">
                            <Mic size={20} />
                        </button>
                        {/* Text Input Form */}
                        <form id="scb-chat-form" className="scb-chat-form" onSubmit={handleFormSubmit}>
                            <input
                                type="text"
                                id="scb-chat-input"
                                className="scb-chat-input"
                                placeholder={status === 'connected' ? 'Listening...' : "Type or click mic..."}
                                autoComplete="off"
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                disabled={status === 'connected'}
                                required
                            />
                            <button type="submit" aria-label="Send message" disabled={status === 'connected'}>
                                <Send size={20} />
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
};

export default Chatbot;
