import React, { useState, useRef, useEffect } from 'react';
import { X, Send, Sparkles, Loader2 } from 'lucide-react';
import { ChatMessage } from '../types';
import { sendMessageToGemini } from '../services/geminiService';

export const AiConcierge: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'まいど！なにわちゃんやで！🐙\n大阪のグルメや観光、お仕事の相談まで何でも聞いてな〜！', timestamp: new Date() }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg: ChatMessage = { role: 'user', text: input, timestamp: new Date() };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    const replyText = await sendMessageToGemini(messages, input);
    
    const botMsg: ChatMessage = { role: 'model', text: replyText, timestamp: new Date() };
    setMessages(prev => [...prev, botMsg]);
    setIsLoading(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Trigger Button - Clean & Trendy */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-8 right-8 z-40 bg-osaka-black text-white w-14 h-14 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 flex items-center justify-center group ${isOpen ? 'hidden' : 'flex'}`}
      >
        <Sparkles size={24} className="group-hover:text-osaka-red transition-colors" />
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-8 right-8 z-50 w-[90vw] md:w-[380px] h-[500px] bg-white rounded-3xl shadow-2xl flex flex-col overflow-hidden border border-gray-100 animate-fade-in-up">
          
          {/* Header */}
          <div className="bg-white p-5 flex justify-between items-center border-b border-gray-100">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
              <div>
                <h3 className="font-bold text-sm text-osaka-black">AI Concierge</h3>
                <p className="text-[10px] text-gray-400 font-bold tracking-widest uppercase">Powered by Gemini</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-osaka-black transition-colors">
              <X size={20} />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-5 bg-osaka-light space-y-6">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                {msg.role === 'model' && (
                  <div className="w-6 h-6 rounded-full bg-osaka-black flex items-center justify-center text-white text-[10px] mr-2 flex-shrink-0 mt-1">
                    AI
                  </div>
                )}
                <div 
                  className={`max-w-[85%] p-4 text-sm leading-relaxed whitespace-pre-wrap font-jp ${
                    msg.role === 'user' 
                      ? 'bg-osaka-black text-white rounded-2xl rounded-tr-sm' 
                      : 'bg-white text-gray-700 rounded-2xl rounded-tl-sm shadow-sm'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                 <div className="w-6 h-6 rounded-full bg-osaka-black flex items-center justify-center text-white text-[10px] mr-2 flex-shrink-0 mt-1">
                    AI
                  </div>
                 <div className="bg-white p-3 rounded-2xl rounded-tl-sm shadow-sm flex items-center gap-2">
                    <Loader2 size={14} className="animate-spin text-gray-400" />
                 </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 bg-white border-t border-gray-100">
            <div className="flex gap-2 relative">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask me anything..."
                className="flex-1 bg-osaka-light border-none rounded-full px-5 py-3 text-sm focus:ring-1 focus:ring-osaka-black focus:outline-none transition-all placeholder:text-gray-400 font-jp"
              />
              <button 
                onClick={handleSend}
                disabled={isLoading}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-osaka-black text-white p-2 rounded-full hover:bg-osaka-red transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send size={14} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};