import React from 'react';
import './MainPage.css';

const MainPage = () => {
  return (
    <div className="main-page">
      <header>
        <div className="nav">
          <span className="nav-item">Atlanta.lua</span>
          <span className="nav-item">Auth</span>
        </div>
      </header>
      <main>
        <div className="intro">
          <h1>Привет!</h1>
          <p>Это основная страница,<br />Пожалуйста авторизуйтесь для управления вашим discord ботом.</p>
        </div>
        <div className="design-info">
          <p>design by wallegendary</p>
          <h2>Стильно. быстро. бесплатно.</h2>
          <p>Наш бот работает на таком языке как Python, за счет данного языка бот очень быстрый.</p>
        </div>
      </main>
    </div>
  );
};

export default MainPage;
