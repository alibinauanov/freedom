import React, { useState } from 'react';

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button 
        className="mobile-menu-toggle"
        onClick={toggleMenu}
        aria-label="Открыть меню"
        aria-expanded={isOpen}
      >
        <span className={`mobile-menu-toggle__line ${isOpen ? 'mobile-menu-toggle__line--active' : ''}`}></span>
        <span className={`mobile-menu-toggle__line ${isOpen ? 'mobile-menu-toggle__line--active' : ''}`}></span>
        <span className={`mobile-menu-toggle__line ${isOpen ? 'mobile-menu-toggle__line--active' : ''}`}></span>
      </button>
      
      <nav className={`mobile-menu ${isOpen ? 'mobile-menu--open' : ''}`}>
        <div className="mobile-menu__content">
          <button className="mobile-menu__item" onClick={() => {setIsOpen(false); console.log('Navigate to services');}}>
            Услуги
          </button>
          <button className="mobile-menu__item" onClick={() => {setIsOpen(false); console.log('Navigate to about');}}>
            О банке
          </button>
          <button className="mobile-menu__item" onClick={() => {setIsOpen(false); console.log('Navigate to contacts');}}>
            Контакты
          </button>
          <div className="mobile-menu__contact">
            <span className="mobile-menu__phone">+7 776 1596 595</span>
            <span className="mobile-menu__callback">595</span>
          </div>
        </div>
      </nav>
      
      {isOpen && <div className="mobile-menu__overlay" onClick={toggleMenu}></div>}
    </>
  );
};

export default MobileMenu;