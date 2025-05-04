"use client";
import React from "react";
import TempChatMessage from "./TempChatMessage";

interface Message {
  role: string;
  content: string;
}

export default function TempChatWindow({ messages }: { messages: Message[] }) {
  return (
    <div>
      {messages.map((msg, idx) => (
        <TempChatMessage key={idx} message={msg} />
      ))}
    </div>
  );
}
