import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    inn: '',
    branch: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Здесь будет логика отправки формы
  };

  return (
    <section className="contact-form-section">
      <div className="contact-form-section__container">
        <h2 className="contact-form-section__title">
          Оставьте заявку на получение консультации
        </h2>
        
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="contact-form__row">
            <div className="contact-form__field">
              <label className="contact-form__label">ФИО контактного лица</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                placeholder="Введите ФИО"
                className="contact-form__input"
                required
              />
            </div>
            
            <div className="contact-form__field">
              <label className="contact-form__label">Номер телефона</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="+7"
                className="contact-form__input"
                required
              />
            </div>
          </div>
          
          <div className="contact-form__row">
            <div className="contact-form__field">
              <label className="contact-form__label">ИИН/БИН компании</label>
              <input
                type="text"
                name="inn"
                value={formData.inn}
                onChange={handleInputChange}
                placeholder="Введите ИИН/БИН"
                className="contact-form__input"
                required
              />
            </div>
            
            <div className="contact-form__field">
              <label className="contact-form__label">Филиал банка</label>
              <select
                name="branch"
                value={formData.branch}
                onChange={handleInputChange}
                className="contact-form__select"
                required
              >
                <option value="">Выберите филиал</option>
                <option value="almaty">Алматы</option>
                <option value="astana">Астана</option>
                <option value="shymkent">Шымкент</option>
              </select>
            </div>
          </div>
          
          <div className="contact-form__consent">
            <p className="contact-form__consent-text">
              Нажимая кнопку «Отправить», вы соглашаетесь на 
              обработку персональных данных несовершеннолетних лиц.
            </p>
          </div>
          
          <button type="submit" className="contact-form__submit">
            Отправить заявку
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;