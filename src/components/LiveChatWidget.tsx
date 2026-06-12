"use client";

import React, { useState, useEffect } from "react";
import { MessageCircle, X, Send, Mail, Phone, ExternalLink } from "lucide-react";

const LiveChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  const quickActions = [
    {
      icon: Mail,
      label: "Email Us",
      action: () => {
        window.location.href = "mailto:2022auradigital@gmail.com";
        setIsOpen(false);
      },
    },
    {
      icon: Phone,
      label: "Call Us",
      action: () => {
        window.location.href = "tel:9148868413";
        setIsOpen(false);
      },
    },
    {
      icon: ExternalLink,
      label: "Book Consultation",
      action: () => {
        window.location.href = "/contact";
        setIsOpen(false);
      },
    },
  ];

  const handleSend = () => {
    if (message.trim()) {
      const whatsappUrl = `https://wa.me/919148868413?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, "_blank");
      setMessage("");
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-aura-500 to-indigo-500 text-white shadow-xl shadow-aura-500/30 hover:shadow-aura-500/40 hover:scale-105 transition-all duration-300 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"
        }`}
        aria-label="Open live chat"
      >
        {isOpen ? <X size={22} /> : <MessageCircle size={22} />}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-40 w-80 sm:w-96 animate-scale-in">
          <div className="rounded-2xl bg-white dark:bg-slate-900 shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-aura-500 to-indigo-500 p-4">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20">
                  <MessageCircle size={18} className="text-white" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">AuraDigital Services Support</p>
                  <div className="flex items-center gap-1.5">
                    <span className="flex h-2 w-2 rounded-full bg-emerald-300 animate-pulse" />
                    <span className="text-xs text-white/80">Online — Typically replies in 5min</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Body */}
            <div className="p-4 space-y-4">
              {/* Bot message */}
              <div className="flex gap-2.5">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-aura-500 to-indigo-500 text-xs font-bold text-white">
                  A
                </div>
                <div className="rounded-2xl rounded-tl-sm bg-slate-100 dark:bg-slate-800 px-4 py-3 max-w-[80%]">
                  <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                    👋 Hi there! Welcome to AuraDigital Services. How can we help grow your business today?
                  </p>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="space-y-2">
                <p className="text-xs font-medium text-slate-400 uppercase tracking-wider">
                  Quick Actions
                </p>
                <div className="grid grid-cols-1 gap-2">
                  {quickActions.map((action) => (
                    <button
                      key={action.label}
                      onClick={action.action}
                      className="flex items-center gap-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/50 px-4 py-2.5 text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 hover:border-aura-200 dark:hover:border-aura-700 transition-all"
                    >
                      <action.icon size={16} className="text-aura-500" />
                      {action.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Input */}
            <div className="border-t border-slate-200 dark:border-slate-800 p-4">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSend()}
                  placeholder="Type your message..."
                  className="flex-1 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 px-4 py-2.5 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-aura-500 focus:border-aura-500 transition-all"
                />
                <button
                  onClick={handleSend}
                  className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-r from-aura-500 to-indigo-500 text-white shadow-lg shadow-aura-500/20 hover:shadow-xl hover:shadow-aura-500/30 active:scale-95 transition-all"
                >
                  <Send size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default LiveChatWidget;
