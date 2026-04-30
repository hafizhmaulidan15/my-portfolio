import React, { useState, useEffect, useRef } from "react";
import { ChatCircleDots, X, PaperPlaneTilt, Robot, User, CircleNotch } from "@phosphor-icons/react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { motion, AnimatePresence } from "framer-motion";
import knowledgeBase from "../data/knowledge_base.json";
import { cn } from "../lib/utils";

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "bot",
      content: `Hello! I'm Hafizh's digital assistant. How can I help you today regarding his IoT, Data, or Web projects?`,
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY || "");
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput("");
    setMessages((prev) => [...prev, { role: "user", content: userMessage }]);
    setIsLoading(true);

    try {
      const systemPrompt = `
        You are an AI assistant for Muhammad Hafizh Maulidan's portfolio. 
        Knowledge Base: ${JSON.stringify(knowledgeBase, null, 2)}
        Guidelines: Professional, concise, Indonesian/English based on user. Focus on IoT/Hardware/Data.
      `;
      const prompt = `${systemPrompt}\n\nUser Question: ${userMessage}`;
      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = response.text();
      setMessages((prev) => [...prev, { role: "bot", content: text }]);
    } catch (error) {
      setMessages((prev) => [...prev, { role: "bot", content: "Sorry, I encountered a technical glitch. Please try again later!" }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-[2000]">
      {/* Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "w-16 h-16 rounded-2xl flex items-center justify-center shadow-2xl transition-all border",
          isOpen ? "bg-zinc-900 border-white/10 text-white" : "bg-accent border-accent/20 text-background"
        )}
      >
        {isOpen ? <X size={32} weight="bold" /> : <ChatCircleDots size={32} weight="duotone" />}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="absolute bottom-20 right-0 w-[380px] h-[550px] bg-zinc-950 border border-white/10 rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col backdrop-blur-2xl"
          >
            {/* Header */}
            <div className="p-6 border-b border-white/5 bg-white/[0.02] flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent">
                <Robot size={24} weight="duotone" />
              </div>
              <div>
                <h3 className="font-bold text-foreground text-sm tracking-tight">Digital Architect</h3>
                <div className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
                  <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">Active Core</span>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-grow overflow-y-auto p-6 space-y-6 no-scrollbar">
              {messages.map((msg, idx) => (
                <div key={idx} className={cn("flex gap-3", msg.role === 'user' ? "flex-row-reverse" : "flex-row")}>
                  <div className={cn(
                    "w-8 h-8 rounded-lg flex items-center justify-center shrink-0",
                    msg.role === 'user' ? "bg-white/5 text-zinc-400" : "bg-accent/10 text-accent"
                  )}>
                    {msg.role === 'user' ? <User size={16} weight="bold" /> : <Robot size={16} weight="bold" />}
                  </div>
                  <div className={cn(
                    "max-w-[80%] p-4 rounded-2xl text-sm leading-relaxed",
                    msg.role === 'user' ? "bg-white/5 text-zinc-300" : "bg-zinc-900 text-zinc-100 border border-white/5"
                  )}>
                    {msg.content}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-lg bg-accent/10 text-accent flex items-center justify-center">
                    <CircleNotch size={16} weight="bold" className="animate-spin" />
                  </div>
                  <div className="bg-zinc-900 border border-white/5 p-4 rounded-2xl">
                    <div className="flex gap-1">
                      <div className="w-1.5 h-1.5 rounded-full bg-zinc-600 animate-bounce"></div>
                      <div className="w-1.5 h-1.5 rounded-full bg-zinc-600 animate-bounce [animation-delay:0.2s]"></div>
                      <div className="w-1.5 h-1.5 rounded-full bg-zinc-600 animate-bounce [animation-delay:0.4s]"></div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-6 bg-white/[0.02] border-t border-white/5">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Ask about systems..."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSend()}
                  className="w-full bg-zinc-900 border border-white/10 rounded-2xl px-5 py-4 text-sm focus:outline-none focus:border-accent/50 transition-colors pr-12"
                />
                <button 
                  onClick={handleSend}
                  disabled={isLoading}
                  className="absolute right-2 top-2 w-10 h-10 rounded-xl bg-accent text-background flex items-center justify-center disabled:opacity-50"
                >
                  <PaperPlaneTilt size={20} weight="bold" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ChatBot;
