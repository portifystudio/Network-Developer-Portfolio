import { useState } from 'react';
import { MessageSquare, X, Send } from 'lucide-react';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hello! I'm Sheshu's AI assistant. Ask me about his skills, projects, or contact info.", isBot: true }
  ]);
  const [input, setInput] = useState("");

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const newMessages = [...messages, { text: input, isBot: false }];
    setMessages(newMessages);
    setInput("");

    // Simple bot logic
    setTimeout(() => {
      const lowerInput = input.toLowerCase();
      let reply = "I'm not sure about that. Try asking about Sheshu's 'skills', 'projects', or 'experience'.";
      
      if (lowerInput.includes('skill')) {
        reply = "Sheshu specializes in Networking, IoT, Python, React, and Cybersecurity. Check out the Skills section!";
      } else if (lowerInput.includes('project')) {
        reply = "Sheshu has worked on Network Architecure, IoT Smart Homes, and Cybersecurity map projects. See the Projects section!";
      } else if (lowerInput.includes('contact') || lowerInput.includes('email')) {
        reply = "You can reach Sheshu via the contact form at the bottom, or connect on LinkedIn/GitHub.";
      }

      setMessages(prev => [...prev, { text: reply, isBot: true }]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen ? (
        <div className="glassmorphism w-80 h-96 rounded-2xl flex flex-col overflow-hidden animate-in slide-in-from-bottom-5">
          <div className="bg-primary/20 p-4 border-b border-white/10 flex justify-between items-center">
            <h3 className="font-semibold flex items-center gap-2">
              <MessageSquare size={18} className="text-primary" />
              AI Assistant
            </h3>
            <button onClick={() => setIsOpen(false)} className="hover:text-accent transition-colors">
              <X size={20} />
            </button>
          </div>
          
          <div className="flex-1 p-4 overflow-y-auto flex flex-col gap-3">
            {messages.map((msg, idx) => (
              <div key={idx} className={`max-w-[80%] rounded-xl p-3 text-sm ${msg.isBot ? 'bg-white/10 self-start rounded-tl-sm' : 'bg-primary/50 self-end rounded-tr-sm'}`}>
                {msg.text}
              </div>
            ))}
          </div>

          <form onSubmit={handleSend} className="p-3 border-t border-white/10 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask anything..."
              className="flex-1 bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-primary/50 text-white placeholder:text-gray-400"
            />
            <button type="submit" className="bg-primary hover:bg-primary/80 text-white p-2 rounded-lg transition-colors">
              <Send size={18} />
            </button>
          </form>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="w-14 h-14 bg-primary hover:bg-primary/80 text-white rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(59,130,246,0.5)] transition-transform hover:scale-110"
        >
          <MessageSquare size={24} />
        </button>
      )}
    </div>
  );
};

export default Chatbot;
