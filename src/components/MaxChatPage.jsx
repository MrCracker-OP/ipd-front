import { Loader } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Leva } from "leva";
import { useRef, useState, useEffect } from "react";
import { Scenario } from "./Scenario";
import { useSpeech } from "../hooks/useSpeech";
import Navbar from "./Navbar";
import { Footer } from "./Footer";

const MaxChatPage = () => {
  const [messages, setMessages] = useState([]);
  const messageEndRef = useRef(null);
  const inputRef = useRef();
  const { tts, loading, message, startRecording, stopRecording, recording } = useSpeech();

  // Scroll to bottom of messages when new messages arrive
  useEffect(() => {
    messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Handle incoming AI responses
  useEffect(() => {
    if (message && message.text) {
      setMessages(prev => [...prev, { isUser: false, text: message.text }]);
    }
  }, [message]);

  const sendMessage = () => {
    const text = inputRef.current.value.trim();
    if (text && !loading) {
      // Add user message to chat
      setMessages(prev => [...prev, { isUser: true, text }]);
      
      // Send to TTS
      tts(text);
      
      // Clear input
      inputRef.current.value = "";
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };

  return (
    <div className="flex flex-col h-screen">
      <header>
        <Navbar />
      </header>
      
      <main className="flex-grow flex flex-col md:flex-row">
        {/* Avatar section - takes full height on mobile, left half on desktop */}
        <div className="h-1/2 md:h-full md:w-1/2 bg-gradient-to-br from-purple-100 to-indigo-50 relative">
          <Canvas shadows camera={{ position: [0, 0, 0], fov: 25 }}>
            <Scenario />
          </Canvas>
          <Loader />
        </div>
        
        {/* Chat section - takes full height on mobile, right half on desktop */}
        <div className="h-1/2 md:h-full md:w-1/2 flex flex-col bg-gray-50">
          <div className="bg-purple-600 text-white p-4">
            <h2 className="text-xl font-bold">Chat with Max</h2>
            <p className="text-sm">Science advisor with expertise in emerging technologies</p>
          </div>
          
          {/* Messages container with scrolling */}
          <div className="flex-grow overflow-y-auto p-4">
            <div className="space-y-4">
              {messages.length === 0 ? (
                <div className="text-center text-gray-500 py-8">
                  <p>Ask Max anything about science and technology!</p>
                </div>
              ) : (
                messages.map((msg, index) => (
                  <div 
                    key={index} 
                    className={`flex ${msg.isUser ? "justify-end" : "justify-start"}`}
                  >
                    <div 
                      className={`max-w-3/4 p-3 rounded-lg ${
                        msg.isUser 
                          ? "bg-purple-600 text-white rounded-br-none" 
                          : "bg-gray-200 text-gray-800 rounded-bl-none"
                      }`}
                    >
                      {msg.text}
                    </div>
                  </div>
                ))
              )}
              <div ref={messageEndRef} />
            </div>
          </div>
          
          {/* Input area */}
          <div className="border-t border-gray-200 p-4">
            <div className="flex items-center gap-2">
              <button
                onClick={recording ? stopRecording : startRecording}
                className={`${
                  recording 
                    ? "bg-red-500 hover:bg-red-600" 
                    : "bg-gray-200 hover:bg-gray-300"
                } text-gray-700 p-3 rounded-full transition duration-300 ${
                  loading ? "opacity-50 cursor-not-allowed" : ""
                }`}
                disabled={loading}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z"
                  />
                </svg>
              </button>

              <input
                ref={inputRef}
                className="flex-grow bg-white border border-gray-300 rounded-full py-2 px-4 focus:outline-none focus:ring-2 focus:ring-purple-600"
                placeholder="Type your message..."
                onKeyDown={handleKeyDown}
              />
              
              <button
                onClick={sendMessage}
                disabled={loading}
                className={`bg-purple-600 hover:bg-purple-700 text-white p-3 rounded-full transition duration-300 ${
                  loading ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
            
            {loading && (
              <div className="mt-2 text-center">
                <div className="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-700 rounded-full">
                  <div className="mr-2">
                    <div className="animate-pulse flex space-x-1">
                      <div className="h-2 w-2 bg-purple-700 rounded-full"></div>
                      <div className="h-2 w-2 bg-purple-700 rounded-full"></div>
                      <div className="h-2 w-2 bg-purple-700 rounded-full"></div>
                    </div>
                  </div>
                  <span>Max is thinking...</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
      
      <Footer />
      
      {/* Hide Leva controls in production */}
      <Leva collapsed hidden />
    </div>
  );
};

export default MaxChatPage;