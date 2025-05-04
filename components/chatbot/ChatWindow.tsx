"use client";
import React from "react";
import ChatMessage from "./ChatMessage";

interface ChatWindowProps {
  messages: { role: string; content: string }[];
}

export default function ChatWindow({ messages }: ChatWindowProps) {
  return (
    <div style={{ flex: 1, overflowY: 'auto', padding: 16 }}>
      {messages.map((message, idx) => (
        <ChatMessage key={idx} message={message} />
      ))}
    </div>
  );
}
