import { Link, useLocation } from 'react-router-dom';
import { Github, Mail, MessageSquare, Copy, Check } from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
  const location = useLocation();
  
  return (
    <nav className="fixed top-0 w-full z-50 bg-dark-bg/80 backdrop-blur-sm border-b border-white/5">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold tracking-tighter hover:text-neon-green transition-colors">
          ZS.
        </Link>
        
        <div className="flex gap-8">
          <Link 
            to="/" 
            className={`text-sm hover:text-neon-green transition-colors ${location.pathname === '/' ? 'text-neon-green' : 'text-gray-400'}`}
          >
            Home
          </Link>
          <Link 
            to="/about" 
            className={`text-sm hover:text-neon-green transition-colors ${location.pathname === '/about' ? 'text-neon-green' : 'text-gray-400'}`}
          >
            About
          </Link>
        </div>
      </div>
    </nav>
  );
};

const Footer = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedWeChat, setCopiedWeChat] = useState(false);

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else if (type === 'wechat') {
      setCopiedWeChat(true);
      setTimeout(() => setCopiedWeChat(false), 2000);
    }
  };

  return (
    <footer className="border-t border-white/5 py-12 mt-20">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-gray-500 text-sm">
          © 2026 詹尚枢. All rights reserved.
        </div>
        
        <div className="flex gap-6 items-center">
          {/* Email */}
          <button 
            onClick={() => copyToClipboard('shangshuzhan@gmail.com', 'email')}
            className="text-gray-400 hover:text-neon-green transition-colors relative group"
            title="Copy Email"
          >
            {copiedEmail ? <Check size={20} /> : <Mail size={20} />}
            <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              {copiedEmail ? 'Copied!' : 'shangshuzhan@gmail.com'}
            </span>
          </button>

          {/* GitHub */}
          <a href="https://github.com/MichaelZ-droid" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-neon-green transition-colors">
            <Github size={20} />
          </a>

          {/* WeChat */}
          <button 
            onClick={() => copyToClipboard('Arch-Templar', 'wechat')}
            className="text-gray-400 hover:text-neon-green transition-colors relative group"
            title="Copy WeChat ID"
          >
            {copiedWeChat ? <Check size={20} /> : <MessageSquare size={20} />}
             <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              {copiedWeChat ? 'Copied!' : 'WeChat: Arch-Templar'}
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
};

export { Navbar, Footer };
