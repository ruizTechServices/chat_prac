//This `chatbot` is for a chatbot for the users who pay $5 for a month
//This chatbot still does not save the chat history in a database for later use; 
//it only saves the chat history in a JSONL file for later use.
//This chatbot also receives uploads. If the user wants to "pick up where they left off", 
// they can upload the JSONL file that they downloaded, load it into the chat 
// context window, and continue their conversation.

//The chatbot can also accept file uploads for chat context. 

import ChatContainer from "../../components/chatbot/ChatContainer";

export default function Home() {
  return <ChatContainer />;
}
