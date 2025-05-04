"use client";
import React from "react";

interface ChatMessageProps {
  message: { role: string; content: string };
}

export default function ChatMessage({ message }: ChatMessageProps) {
  return (
    <div style={{ marginBottom: 8 }}>
      {message.content}
    </div>
  );
}
