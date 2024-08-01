import React, { useEffect, useState } from 'react';
import './Panel.css';

function Panel() {
  const [botInfo, setBotInfo] = useState({});

  useEffect(() => {
    fetch('/api/bot-info')
      .then(response => response.json())
      .then(data => setBotInfo(data))
      .catch(error => console.error('Error fetching bot info:', error));
  }, []);

  return (
    <div className="panel-container">
      <h1>Bot Panel</h1>
      {botInfo.avatar && <img src={botInfo.avatar} alt="Bot Avatar" className="bot-avatar" />}
      <h2>{botInfo.username}</h2>
    </div>
  );
}

export default Panel;
