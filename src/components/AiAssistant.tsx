import React, { useState, useRef, useEffect } from 'react';
import { Sparkles, X, Send, Bot, User, Loader2 } from 'lucide-react';
import { ChatMessage, ViewState } from '../types';
import { useLanguage } from '../context/LanguageContext';

interface AiAssistantProps {
  currentView?: ViewState;
}

export const AiAssistant: React.FC<AiAssistantProps> = ({ currentView = 'home' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { lang, t } = useLanguage();

  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initialize welcome message based on language
    setMessages([
      {
        id: '1',
        role: 'assistant',
        content: t.ai.welcome,
        timestamp: new Date()
      }
    ]);
  }, [lang]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const quickQuestions = lang === 'FR' ? [
    'Qu’est-ce que TEKMEN Revolution ?',
    'Que fait TEKMEN Agency ?',
    'Comment rejoindre la communauté ?',
    'Qui fait partie de l’équipe TEKMEN ?',
    'Qui a fondé TEKMEN Revolution ?'
  ] : [
    'What is TEKMEN Revolution?',
    'What does TEKMEN Agency do?',
    'How can I join TEKMEN Community?',
    'Who is part of the TEKMEN Team?',
    'Who founded TEKMEN Revolution?'
  ];

  const handleSendMessage = async (textToSend?: string) => {
    const text = textToSend || inputValue;
    if (!text.trim() || isLoading) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      content: text,
      timestamp: new Date()
    };

    setMessages((prev) => [...prev, userMessage]);
    if (!textToSend) setInputValue('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: [...messages, userMessage].map(m => ({ role: m.role, content: m.content })),
          currentView,
          language: lang
        })
      });

      const data = await response.json();
      const replyContent = data.reply || (lang === 'FR' ? "Je suis là pour vous aider à naviguer dans l'écosystème TEKMEN Revolution." : "I am here to assist you with the TEKMEN Revolution ecosystem.");

      const assistantMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: replyContent,
        timestamp: new Date()
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      console.error("Chat error:", error);
      const errorMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: lang === 'FR' ? "Je rencontre actuellement un problème de connexion. Veuillez réessayer dans un instant." : "I'm having trouble connecting right now. Please try again in a moment.",
        timestamp: new Date()
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {!isOpen ? (
        <button
          onClick={() => setIsOpen(true)}
          className="group relative flex items-center gap-3 bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-700 text-white p-4 rounded-full shadow-2xl hover:shadow-blue-500/50 hover:scale-105 transition-all duration-300"
          aria-label="Open TEKMEN AI Assistant"
        >
          <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-blue-400 rounded-full border-2 border-white animate-pulse" />
          <Sparkles className="w-6 h-6 animate-pulse" />
          <span className="hidden sm:inline font-semibold text-sm pr-1">{t.ai.button}</span>
        </button>
      ) : (
        <div className="w-[90vw] sm:w-[400px] h-[550px] bg-white rounded-3xl shadow-2xl border border-slate-200 flex flex-col overflow-hidden transition-all duration-300 animate-in fade-in slide-in-from-bottom-5">
          
          {/* Header */}
          <div className="bg-gradient-to-r from-slate-950 via-indigo-950 to-blue-950 text-white px-5 py-4 flex items-center justify-between border-b border-blue-900/30">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center shadow-md">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-sm tracking-wide">{t.ai.button}</h3>
                <p className="text-[11px] text-blue-300">{t.ai.subtitle}</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 text-slate-400 hover:text-white rounded-xl hover:bg-white/10 transition-colors"
              aria-label="Close Assistant"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-slate-50/50">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-3 max-w-[85%] ${
                  msg.role === 'user' ? 'ml-auto flex-row-reverse' : 'mr-auto'
                }`}
              >
                <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-white shadow-xs ${
                  msg.role === 'user' ? 'bg-blue-600' : 'bg-gradient-to-br from-indigo-600 to-violet-700'
                }`}>
                  {msg.role === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                </div>
                <div className={`p-3.5 rounded-2xl text-xs sm:text-sm leading-relaxed shadow-xs ${
                  msg.role === 'user'
                    ? 'bg-blue-600 text-white rounded-tr-xs'
                    : 'bg-white text-slate-800 border border-slate-200/80 rounded-tl-xs'
                }`}>
                  {msg.content}
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="flex gap-3 mr-auto max-w-[85%]">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-600 to-violet-700 flex items-center justify-center text-white">
                  <Bot className="w-4 h-4" />
                </div>
                <div className="p-3.5 bg-white text-slate-500 border border-slate-200/80 rounded-2xl rounded-tl-xs flex items-center gap-2 text-xs">
                  <Loader2 className="w-4 h-4 animate-spin text-blue-600" />
                  <span>{t.ai.thinking}</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Suggested Questions */}
          {messages.length <= 2 && (
            <div className="p-3 bg-white border-t border-slate-100">
              <div className="text-[11px] font-semibold text-slate-500 mb-2 px-1">{t.ai.suggested}</div>
              <div className="flex flex-wrap gap-1.5 max-h-28 overflow-y-auto">
                {quickQuestions.map((q, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSendMessage(q)}
                    className="text-[11px] font-medium bg-blue-50 text-blue-700 hover:bg-blue-100 px-2.5 py-1.5 rounded-lg border border-blue-100 transition-colors text-left"
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input Footer */}
          <div className="p-3 bg-white border-t border-slate-200 flex items-center gap-2">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
              placeholder={t.ai.placeholder}
              className="flex-1 bg-slate-100 border border-slate-200 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-slate-800 focus:outline-none focus:border-blue-600 focus:bg-white transition-colors"
            />
            <button
              onClick={() => handleSendMessage()}
              disabled={!inputValue.trim() || isLoading}
              className="bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white p-2.5 rounded-xl transition-all shadow-md shadow-blue-600/20"
              aria-label="Send message"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>

        </div>
      )}
    </div>
  );
};
