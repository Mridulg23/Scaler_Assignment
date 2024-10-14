import React from 'react';
import './ChatBar.css';

const ChatBar = () => {
  return (
    <div className="chat-bar">
      <input type="text" placeholder="Ask follow-up" />
      <button>Chat</button>
    </div>
  );
};

export default ChatBar;
