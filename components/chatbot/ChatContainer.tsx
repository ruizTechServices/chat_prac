"use client";
import { useState } from "react";
import ChatWindow from "./ChatWindow";
import ChatInput from "./ChatInput";
import ChatSidebar from "./ChatSidebar";

export default function ChatContainer() {
  const [messages, setMessages] = useState<{ role: string; content: string }[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;
    setMessages([...messages, { role: "user", content: inputValue }]);
    setInputValue("");
  };

  return (
    <div style={{ display: "flex", height: "100vh", width: "100vw" }}>
      {/* Sidebar */}
      <div style={{ width: 220, borderRight: '1px solid #ccc', background: '#fafafa' }}>
        <ChatSidebar />
      </div>
      {/* Main content */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <ChatWindow messages={messages} />
        <ChatInput inputValue={inputValue} setInputValue={setInputValue} handleSendMessage={handleSendMessage} />
      </div>
    </div>
  );
}
