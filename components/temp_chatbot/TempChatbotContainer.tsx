"use client";
import React, { useState, useRef } from "react";
import TempChatWindow from "./TempChatWindow";
import TempChatInput from "./TempChatInput";
import ChatFileControls from "../chat_utils/ChatFileControls";

interface Message {
  role: string;
  content: string;
}

export default function TempChatbotContainer() {
  const [messages, setMessages] = useState<Message[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [contextFiles, setContextFiles] = useState<File[]>([]);

  // Handle sending a message
  const handleSendMessage = (msg: string) => {
    if (!msg.trim()) return;
    setMessages(prev => [...prev, { role: "user", content: msg }]);
  };

  // Handle downloading messages as JSONL
  const handleDownload = () => {
    const jsonl = messages.map(m => JSON.stringify(m)).join("\n");
    const blob = new Blob([jsonl], { type: "application/jsonl" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `chat_${new Date().toISOString()}.jsonl`;
    a.click();
    URL.revokeObjectURL(url);
  };

  // Handle uploading JSONL for chat restore
  const handleUpload = (file: File) => {
    const reader = new FileReader();
    reader.onload = e => {
      const text = e.target?.result as string;
      const lines = text.split("\n").filter(Boolean);
      try {
        const restored = lines.map(line => JSON.parse(line));
        setMessages(restored);
      } catch {
        alert("Invalid JSONL file.");
      }
    };
    reader.readAsText(file);
  };

  // Handle context file uploads
  const handleContextFiles = (files: FileList | null) => {
    if (!files) return;
    setContextFiles(Array.from(files));
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "70vh", border: "1px solid #ccc", borderRadius: 8, padding: 16, marginTop: 24 }}>
      <ChatFileControls
        onDownload={handleDownload}
        onUpload={handleUpload}
        fileInputRef={fileInputRef}
        onContextFiles={handleContextFiles}
      />
      <div style={{ flex: 1, overflowY: "auto", margin: "16px 0" }}>
        <TempChatWindow messages={messages} />
      </div>
      <TempChatInput onSend={handleSendMessage} />
      {contextFiles.length > 0 && (
        <div style={{ marginTop: 8, fontSize: 12 }}>
          <strong>Uploaded context files:</strong> {contextFiles.map(f => f.name).join(", ")}
        </div>
      )}
    </div>
  );
}
