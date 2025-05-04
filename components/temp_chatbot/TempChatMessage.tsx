import React from "react";

interface Message {
  role: string;
  content: string;
}

export default function TempChatMessage({ message }: { message: Message }) {
  return (
    <div style={{ marginBottom: 8 }}>
      {message.content}
    </div>
  );
}
