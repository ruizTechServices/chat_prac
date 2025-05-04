"use client";
import React, { useRef, useEffect } from "react";

interface ChatInputProps {
  inputValue: string;
  setInputValue: (val: string) => void;
  handleSendMessage: () => void;
}

export default function ChatInput({ inputValue, setInputValue, handleSendMessage }: ChatInputProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => { inputRef.current?.focus(); }, []);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSendMessage();
  };

  return (
    <form onSubmit={onSubmit} style={{ display: 'flex', borderTop: '1px solid #ccc', padding: 8 }}>
      <label htmlFor="chat-input" style={{ marginRight: 8, alignSelf: 'center' }}>Message:</label>
      <input
        id="chat-input"
        type="text"
        ref={inputRef}
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
        autoComplete="off"
        style={{ flex: 1, marginRight: 8 }}
      />
      <button type="submit">Send</button>
    </form>
  );
}
