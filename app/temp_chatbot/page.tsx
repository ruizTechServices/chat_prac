//This `temp_chatbot` is for a chatbot for the users who pay $1 for 24 Hours
//This chatbot does not save any chat history. Rather, it saves the chat in a
// downloadable JSONL file for later use.
//This chatbot also receives uploads. If the user wants to "pick up where they left off", 
// they can upload the JSONL file that they downloaded, load it into the chat 
// context window, and continue their conversation.

//The chatbot can also accept file uploads for chat context. 

import TempChatbotContainer from "../../components/temp_chatbot/TempChatbotContainer";

export default function TempChatbotPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">24-Hour AI Assistant</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Your temporary AI assistant with 24-hour access. Download your chat history 
          as a JSONL file to continue later, or upload context files for more relevant responses.
          No chat data is stored on our servers.
        </p>
      </div>
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="bg-blue-600 text-white py-3 px-4">
          <div className="flex items-center justify-between">
            <h2 className="font-medium">24-Hour Pass ($1)</h2>
            <span className="text-xs bg-blue-700 py-1 px-2 rounded-full">Active</span>
          </div>
        </div>
        <TempChatbotContainer />
      </div>
    </main>
  );
}
