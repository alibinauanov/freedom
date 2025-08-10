import React from 'react';

const PaymentInfoSection = () => {
  return (
    <section className="payment-info">
      <div className="payment-info__container">
        <div className="payment-info__item">
          <div className="payment-info__label">Тип платежей</div>
          <div className="payment-info__value">Безналичные</div>
        </div>
        <div className="payment-info__item">
          <div className="payment-info__label">Комиссия</div>
          <div className="payment-info__value">1,2% по всем картам</div>
        </div>
        <button className="payment-info__button">
          Подать заявку
        </button>
      </div>
    </section>
  );
};

export default PaymentInfoSection;