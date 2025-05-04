import React, { useState, useRef, useEffect } from "react";

export default function TempChatInput({ onSend }: { onSend: (msg: string) => void }) {
  const [value, setValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => { inputRef.current?.focus(); }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!value.trim()) return;
    onSend(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', borderTop: '1px solid #ccc', padding: 8, marginTop: 8 }}>
      <label htmlFor="temp-chat-input" style={{ marginRight: 8, alignSelf: 'center' }}>Message:</label>
      <input
        id="temp-chat-input"
        ref={inputRef}
        type="text"
        value={value}
        onChange={e => setValue(e.target.value)}
        autoComplete="off"
        style={{ flex: 1, marginRight: 8 }}
      />
      <button type="submit">Send</button>
    </form>
  );
}
