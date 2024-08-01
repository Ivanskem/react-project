import React, { useEffect, useState } from 'react';
import { io } from 'socket.io-client';
import './Chat.css';

function Chat() {
  const [socket, setSocket] = useState(null);
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const newSocket = io('http://localhost:5000');
    setSocket(newSocket);

    newSocket.on('new_message', (data) => {
      console.log('Received message:', data);  // Добавлено для отладки
      setMessages((prevMessages) => [...prevMessages, data]);
    });

    return () => newSocket.close();
  }, []);

  const sendMessage = () => {
    if (socket) {
      socket.send(message);
      setMessage('');
    }
  };

  return (
    <div className="chat-container">
      <h1>Chat</h1>
      <div className="messages">
        {messages.map((msg, index) => (
          <div key={index} className="message">
            <img src={msg.avatar_url} alt="avatar" className="avatar" />
            <strong style={{ color: msg.color }}>{msg.username}:</strong>  {msg.content}
          </div>
        ))}
      </div>
      <input 
        type="text" 
        value={message} 
        onChange={(e) => setMessage(e.target.value)} 
        placeholder="Type a message..."
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
}

export default Chat;
