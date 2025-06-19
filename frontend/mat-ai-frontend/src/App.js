import React, { useState } from 'react';
import './App.css';
import io from 'socket.io-client';

const socket = io('http://localhost:5000'); // Pointing to Flask backend

function App() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSendMessage = () => {
    if (input.trim()) {
      const userMessage = { sender: 'User', message: input };
      setMessages([...messages, userMessage]);
      socket.emit('sendMessage', { message: input });
      setInput('');
    }
  };

  socket.on('receiveMessage', (data) => {
    const botMessage = { sender: 'Bot', message: data.message };
    setMessages((prevMessages) => [...prevMessages, botMessage]);
  });

  return (
    <div className="App">
      <div className="chat-container">
        <div className="messages">
          {messages.map((msg, index) => (
            <div key={index} className={msg.sender}>
              <strong>{msg.sender}: </strong>{msg.message}
            </div>
          ))}
        </div>
        <div className="input">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a message"
          />
          <button onClick={handleSendMessage}>Send</button>
        </div>
      </div>
    </div>
  );
}

export default App;
