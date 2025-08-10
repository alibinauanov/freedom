import React from 'react';
import Picture from './Picture';

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero__container">
        <div className="hero__content">
          <h1 className="hero__title">
            Платежный терминал в вашем смартфоне
          </h1>
          <p className="hero__description">
            Принимайте платежи по картам через приложение Freedom POS в вашем смартфоне
          </p>
        </div>
        
        <div className="hero__visual">
          <Picture
            src="/assets/pos_white.png" 
            alt="POS терминал в смартфоне - принимайте безналичные платежи"
            className="hero__image"
            loading="eager"
          />
        </div>
      </div>
      <div className="hero__info-box">
        <div className="hero__info-item">
          <span className="hero__info-label">Тип платежей</span>
          <span className="hero__info-value">Безналичные</span>
        </div>
        <div className="hero__info-item">
          <span className="hero__info-label">Комиссия</span>
          <span className="hero__info-value">1,2% по всем картам</span>
        </div>
        <button className="hero__info-button">Подать заявку</button>
      </div>
    </section>
  );
};

export default HeroSection;