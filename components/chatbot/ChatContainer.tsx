"use client";
import { useState, useRef } from "react";
import ChatWindow from "./ChatWindow";
import ChatInput from "./ChatInput";
import ChatSidebar from "./ChatSidebar";
import ChatFileControls from "../chat_utils/ChatFileControls";

export default function ChatContainer() {
  const [messages, setMessages] = useState<{ role: string; content: string }[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [contextFiles, setContextFiles] = useState<File[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Handle sending a message
  const handleSendMessage = () => {
    if (!inputValue.trim()) return;
    setMessages([...messages, { role: "user", content: inputValue }]);
    setInputValue("");
  };


  // Handle downloading messages as JSONL
  const handleDownload = () => {
    const jsonl = messages.map(msg => JSON.stringify(msg)).join("\n");
    const blob = new Blob([jsonl], { type: "application/jsonl" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "chat_history.jsonl";
    a.click();
    URL.revokeObjectURL(url);
  };

  // Handle uploading a JSONL file (restore chat history)
  const handleUpload = (file: File) => {
    const reader = new FileReader();
    reader.onload = e => {
      const text = e.target?.result as string;
      const lines = text.split("\n").filter(Boolean);
      try {
        const loaded = lines.map(line => JSON.parse(line));
        setMessages(loaded);
      } catch {
        alert("Invalid JSONL file.");
      }
    };
    reader.readAsText(file);
  };

  // Handle uploading context files (PDF, TXT, etc.)
  const handleContextFiles = (files: FileList | null) => {
    if (!files) return;
    setContextFiles(Array.from(files));
    // TODO: Implement context file parsing/usage as needed
  };

  return (
    <div style={{ display: "flex", height: "100vh", width: "100vw" }}>
      {/* Sidebar */}
      <div style={{ width: 220, borderRight: '1px solid #ccc', background: '#fafafa' }}>
        <ChatSidebar />
      </div>
      {/* Main content */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <ChatFileControls
          onDownload={handleDownload}
          onUpload={handleUpload}
          fileInputRef={fileInputRef}
          onContextFiles={handleContextFiles}
          contextAccept={".pdf,.txt,.md"} // Accept PDF, TXT, Markdown for context
        />
        <ChatWindow messages={messages} />
        <ChatInput inputValue={inputValue} setInputValue={setInputValue} handleSendMessage={handleSendMessage} />
      </div>
    </div>
  );
}
