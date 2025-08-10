import React from 'react';

const Footer = () => {
  const footerSections = {
    services: {
      title: 'Частным клиентам',
      links: [
        'Цифровая платформа',
        'Цифровой менеджер',
        'Карты',
        'Получить кредит',
        'Депозиты',
        'Переводы',
        'Переводы западной валюте',
        'Цифровые документы',
        'Сейфы',
        'Интернет-банкинг'
      ]
    },
    business: {
      title: 'Для бизнеса',
      links: [
        'Документарные аккредитивы',
        'Открыть счет ТОО',
        'Торговое финансирование',
        'Freedom Box',
        'Депозиты',
        'E-Commerce',
        'Брокерская деятельность ТОО',
        'Валютное законодательство',
        'Системы безнал',
        'Интернет-банкинг'
      ]
    },
    about: {
      title: 'О банке',
      links: [
        'FAQ',
        'Контакты',
        'Вакансии',
        'О банке',
        'Курсы валют',
        'Документация',
        'Маркетплейс',
        'Реквизиты',
        'Новости',
        'Пресс-служба',
        'Privaty'
      ]
    }
  };

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__content">
          <div className="footer__sections">
            {Object.entries(footerSections).map(([key, section]) => (
              <div key={key} className="footer__section">
                <h3 className="footer__section-title">{section.title}</h3>
                <ul className="footer__links">
                  {section.links.map((link, index) => (
                    <li key={index} className="footer__link-item">
                      <button className="footer__link" onClick={() => console.log(`Navigate to ${link}`)}>{link}</button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="footer__app-info">
            <div className="footer__logo">
              <img src="/assets/logo_white.png" alt="Freedom Bank" className="footer__logo-img footer__logo-img--light" />
              <img src="/assets/logo_black.png" alt="Freedom Bank" className="footer__logo-img footer__logo-img--dark" />
            </div>
            
            <div className="footer__app-details">
              <h4 className="footer__app-title">Freedom SuperApp</h4>
              <p className="footer__app-description">
                В приложении доступны платежи и переводы, открытие депозитов, оплата услуг, управление сбережениями, финансовая аналитика
              </p>
              
              <div className="footer__app-stores">
                <button className="footer__store-link" onClick={() => console.log('Navigate to App Store')}>
                  <img src="/assets/app-store.svg" alt="App Store" />
                </button>
                <button className="footer__store-link" onClick={() => console.log('Navigate to Google Play')}>
                  <img src="/assets/google-play.svg" alt="Google Play" />
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="footer__bottom">
          <div className="footer__contacts">
            <span className="footer__phone">+7 776 1596 595</span>
            <span className="footer__callback">595</span>
            <span className="footer__callback-text">бесплатный звонок</span>
          </div>
          
          <div className="footer__social">
            <button className="footer__social-link" onClick={() => console.log('Navigate to Instagram')}>Instagram</button>
            <button className="footer__social-link" onClick={() => console.log('Navigate to Facebook')}>Facebook</button>
            <button className="footer__social-link" onClick={() => console.log('Navigate to TikTok')}>TikTok</button>
          </div>
        </div>
        
        <div className="footer__copyright">
          <p>© 2023 АО «Банк Freedom Finance Казахстан». Все права защищены. Лицензия банка № 4.5.15/77/44</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;