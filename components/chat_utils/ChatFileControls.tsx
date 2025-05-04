import React, { RefObject } from "react";

/**
 * General-purpose chat file controls for uploading and downloading chat history (JSONL) and context files (PDF, TXT, etc.).
 * Place this in /components/chat_utils for maximum reusability across chatbots.
 */
export interface ChatFileControlsProps {
  /** Triggered when the user clicks the download chat button. */
  onDownload: () => void;
  /** Triggered when a chat history (.jsonl) file is uploaded. */
  onUpload: (file: File) => void;
  /** Ref for the hidden chat upload input. */
  fileInputRef: RefObject<HTMLInputElement | null>;
  /** Triggered when context files are uploaded (PDF, TXT, etc.). */
  onContextFiles: (files: FileList | null) => void;
  /** Accept attribute for context files (e.g., ".pdf,.txt,.md"). Optional, defaults to any file. */
  contextAccept?: string;
}

export default function ChatFileControls({
  onDownload,
  onUpload,
  fileInputRef,
  onContextFiles,
  contextAccept,
}: ChatFileControlsProps) {
  return (
    <div style={{ display: 'flex', gap: 16, alignItems: 'center', marginBottom: 8 }}>
      <button type="button" onClick={onDownload}>Download Chat (JSONL)</button>
      {/* Hidden input for uploading chat history (.jsonl) */}
      <input
        type="file"
        accept=".jsonl"
        style={{ display: 'none' }}
        ref={fileInputRef}
        onChange={e => {
          const file = e.target.files?.[0];
          if (file) onUpload(file);
        }}
      />
      <button type="button" onClick={() => fileInputRef.current?.click()}>Upload Chat (JSONL)</button>
      {/* Hidden input for uploading context files (PDF, TXT, etc.) */}
      <input
        type="file"
        multiple
        style={{ display: 'none' }}
        id="context-file-input"
        accept={contextAccept}
        onChange={e => onContextFiles(e.target.files)}
      />
      <label htmlFor="context-file-input" style={{ cursor: 'pointer', color: '#0070f3' }}>Upload Context Files</label>
    </div>
  );
}
