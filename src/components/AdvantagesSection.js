import React from 'react';
import AnimatedSection from './AnimatedSection';
import Picture from './Picture';

const AdvantagesSection = () => {
  const advantages = [
    {
      id: 'convenient',
      title: 'Удобно',
      description: 'Пользуйтесь только смартфоном с функцией NFC/Android и приложение Freedom POS',
      icon: '/assets/удобно 1.png'
    },
    {
      id: 'economical',
      title: 'Экономно',
      description: 'Не нужно покупать специальное оборудование, хранить его или платить сервисное обслуживание',
      icon: '/assets/экономно.png'
    },
    {
      id: 'secure',
      title: 'Безопасно',
      description: 'Все данные передаются в зашифрованном виде, информация хранится в смартфоне',
      icon: '/assets/Безопасно.png'
    },
    {
      id: 'online',
      title: 'Онлайн',
      description: 'Отправляйте чек в покупке не e-mail или представьте покупателю QR-код со ссылкой на электронный чек',
      icon: '/assets/онлайн.png'
    }
  ];

  return (
    <AnimatedSection className="advantages">
      <div className="advantages__container">
        <h2 className="advantages__title">Преимущества</h2>
        
        <div className="advantages__grid">
          {advantages.map((advantage, index) => (
            <AnimatedSection 
              key={advantage.id} 
              className="advantage-card"
              delay={index * 150}
            >
              <div className="advantage-card__visual">
                <Picture
                  src={advantage.icon} 
                  alt={`${advantage.title} - ${advantage.description}`}
                  className="advantage-card__icon"
                  width={80}
                  height={80}
                />
              </div>
              <div className="advantage-card__content">
                <h3 className="advantage-card__title">{advantage.title}</h3>
                <p className="advantage-card__description">{advantage.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default AdvantagesSection;