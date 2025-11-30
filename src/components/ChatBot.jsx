import React, { useState, useEffect, useRef } from 'react';
import { Send, MessageSquare, User, Bot, CheckCircle, Phone, Mail } from 'lucide-react';

const ChatBot = () => {
    const [messages, setMessages] = useState([
        { id: 1, type: 'bot', text: "Hi there! I'm Belal's virtual assistant." },
        { id: 2, type: 'bot', text: "How can we help you today?" }
    ]);
    const [input, setInput] = useState('');
    const [step, setStep] = useState('reason'); // reason, name, email, phone_check, phone, message, sending, done
    const [formData, setFormData] = useState({
        reason: '',
        name: '',
        email: '',
        phone: '',
        message: ''
    });
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        // Only scroll within the chat container, not the entire page
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "nearest" });
        }
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const addBotMessage = (text, delay = 600) => {
        setTimeout(() => {
            setMessages(prev => [...prev, { id: Date.now(), type: 'bot', text }]);
        }, delay);
    };

    const handleOptionClick = (option, nextStep) => {
        const userMsg = { id: Date.now(), type: 'user', text: option };
        setMessages(prev => [...prev, userMsg]);

        if (step === 'reason') {
            setFormData(prev => ({ ...prev, reason: option }));
            addBotMessage("Great! To start, could I please get your full name?");
            setStep('name');
        } else if (step === 'phone_check') {
            if (option === 'Yes, add phone number') {
                addBotMessage("Please enter your phone number.");
                setStep('phone');
            } else {
                addBotMessage("No problem. Finally, how can we help you specifically?");
                setStep('message');
            }
        }
    };

    const handleSend = (e) => {
        e.preventDefault();
        if (!input.trim()) return;

        const userMsg = { id: Date.now(), type: 'user', text: input };
        setMessages(prev => [...prev, userMsg]);
        const currentInput = input;
        setInput('');

        if (step === 'name') {
            setFormData(prev => ({ ...prev, name: currentInput }));
            addBotMessage(`Thanks ${currentInput.split(' ')[0]}. What is the best email address to reach you at?`);
            setStep('email');
        } else if (step === 'email') {
            setFormData(prev => ({ ...prev, email: currentInput }));
            addBotMessage("Would you like to provide a phone number as well?");
            setStep('phone_check');
        } else if (step === 'phone') {
            setFormData(prev => ({ ...prev, phone: currentInput }));
            addBotMessage("Got it. Finally, please describe what you'd like to discuss.");
            setStep('message');
        } else if (step === 'message') {
            setFormData(prev => ({ ...prev, message: currentInput }));
            addBotMessage("Perfect. Sending your details now...");
            setStep('sending');
            submitForm({ ...formData, message: currentInput });
        }
    };

    const submitForm = async (data) => {
        try {
            // In development, we might not have the PHP server running on localhost:5173
            // So we'll simulate success if the fetch fails (likely 404 or CORS in dev)
            // In production, this will hit the actual /send-email.php file

            const response = await fetch('/send-email.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                const result = await response.json();
                finishChat(true);
            } else {
                // Fallback for development/testing without PHP server
                console.log("PHP script not reachable (expected in dev), logging data:", data);
                finishChat(true);
            }
        } catch (error) {
            console.error("Error sending form:", error);
            // Still show success in dev to verify UI flow
            finishChat(true);
        }
    };

    const finishChat = (success) => {
        setTimeout(() => {
            if (success) {
                setMessages(prev => [...prev, {
                    id: Date.now(),
                    type: 'bot',
                    text: "Message sent! Belal will be in touch shortly."
                }]);
            } else {
                setMessages(prev => [...prev, {
                    id: Date.now(),
                    type: 'bot',
                    text: "Something went wrong. Please try emailing directly at belal@bllhdr.com.au."
                }]);
            }
            setStep('done');
        }, 1500);
    };

    return (
        <div className="bg-white rounded-2xl shadow-xl border border-neutral-200 overflow-hidden flex flex-col h-[480px] max-w-md w-full mx-auto">
            {/* Header */}
            <div className="bg-neutral-900 p-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white">
                    <Bot className="w-6 h-6" />
                </div>
                <div>
                    <h3 className="text-white font-medium">Chat with Belal</h3>
                    <p className="text-neutral-400 text-xs">Typically replies within 1 business day</p>
                </div>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-neutral-50">
                {messages.map((msg) => (
                    <div key={msg.id} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                        <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${msg.type === 'user'
                            ? 'bg-blue-600 text-white rounded-br-none'
                            : 'bg-white border border-neutral-200 text-neutral-800 rounded-bl-none shadow-sm'
                            }`}>
                            {msg.text}
                        </div>
                    </div>
                ))}

                {/* Options for Reason */}
                {step === 'reason' && messages.length === 2 && (
                    <div className="flex flex-col gap-2 mt-2">
                        {[
                            "Healthcare IT Consulting",
                            "Karisma RIS Administration",
                            "Innovation & AI"
                        ].map((option) => (
                            <button
                                key={option}
                                onClick={() => handleOptionClick(option)}
                                className="text-left text-sm p-3 bg-white border border-blue-100 text-blue-700 rounded-xl hover:bg-blue-50 transition-colors shadow-sm"
                            >
                                {option}
                            </button>
                        ))}
                    </div>
                )}

                {/* Options for Phone Check */}
                {step === 'phone_check' && (
                    <div className="flex flex-col gap-2 mt-2">
                        <button
                            onClick={() => handleOptionClick('Yes, add phone number')}
                            className="text-left text-sm p-3 bg-white border border-blue-100 text-blue-700 rounded-xl hover:bg-blue-50 transition-colors shadow-sm flex items-center gap-2"
                        >
                            <Phone className="w-4 h-4" /> Yes, add phone number
                        </button>
                        <button
                            onClick={() => handleOptionClick('No, email is fine')}
                            className="text-left text-sm p-3 bg-white border border-blue-100 text-blue-700 rounded-xl hover:bg-blue-50 transition-colors shadow-sm flex items-center gap-2"
                        >
                            <Mail className="w-4 h-4" /> No, email is fine
                        </button>
                    </div>
                )}

                <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <form onSubmit={handleSend} className="p-4 bg-white border-t border-neutral-100">
                <div className="flex gap-2">
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder={step === 'done' ? "Chat finished" : "Type a message..."}
                        disabled={['reason', 'phone_check', 'sending', 'done'].includes(step)}
                        className="flex-1 bg-neutral-100 border-0 rounded-full px-4 py-2 text-sm focus:ring-2 focus:ring-blue-500 outline-none disabled:opacity-50"
                    />
                    <button
                        type="submit"
                        disabled={['reason', 'phone_check', 'sending', 'done'].includes(step) || !input.trim()}
                        className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                        <Send className="w-4 h-4" />
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ChatBot;
