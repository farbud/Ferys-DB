"use client";
import { useState, useRef, useEffect } from "react";
import { useRealtimeMessages } from "@/hooks/useRealtime";
import { createClient } from "@/lib/supabase/client";
import { Send } from "lucide-react";

export default function ChatPanel({ userId }: { userId: string }) {
  const messages = useRealtimeMessages();
  const [input, setInput] = useState("");
  const bottomRef = useRef<HTMLDivElement>(null);
  const supabase = createClient();

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  async function sendMessage() {
    if (!input.trim()) return;
    await supabase.from("messages").insert({
      content: input.trim(),
      sender_id: userId,
    });
    setInput("");
  }

  return (
    <div className="flex flex-col h-full">
      {/* پیام‌ها */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${msg.sender_id === userId ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[85%] px-3 py-2 rounded-xl text-xs leading-relaxed ${
                msg.sender_id === userId
                  ? "bg-[#0d2b22] text-(--accent-green) border border-[rgba(0,229,160,0.1)]"
                  : "bg-(--bg-tertiary) text-(--text-primary)"
              }`}
            >
              {msg.content}
            </div>
          </div>
        ))}
        <div ref={bottomRef} />
      </div>

      {/* input */}
      <div className="p-3 border-t border-(--border)">
        <div
          className="flex gap-2 items-center bg-(--bg-tertiary) 
                        border border-(--border) rounded-xl px-3 py-2"
        >
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            placeholder="پیام..."
            className="flex-1 bg-transparent outline-none text-xs text-(--text-primary)
                       placeholder:text-(--text-muted)"
          />
          <button
            onClick={sendMessage}
            className="w-7 h-7 rounded-lg bg-(--accent-green) flex items-center 
                       justify-center text-[#0a0c10] hover:opacity-80 transition-opacity"
          >
            <Send size={13} />
          </button>
        </div>
      </div>
    </div>
  );
}
