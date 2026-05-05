import React from 'react';
import './contact.css';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Xabaringiz yuborildi! Tez orada siz bilan bog'lanamiz.");
  };

  return (
    <div className="contact_page">
      <div className="contact_container">
        <div className="contact_info">
          <h1>Biz bilan <span className="green_text">bog'laning</span></h1>
          <p>Savollaringiz bormi? Bizga yozing yoki qo'ng'iroq qiling. Biz yordam berishdan mamnunmiz.</p>
          
          <div className="info_items">
            <div className="info_item">
              <i className="fas fa-map-marker-alt"></i>
              <div>
                <h4>Manzil</h4>
                <p>Urganch sh., Al-Xorazmiy ko'chasi, IT Park Xorazm</p>
              </div>
            </div>

            <div className="info_item">
              <i className="fas fa-phone-alt"></i>
              <div>
                <h4>Telefon</h4>
                <p>+998 (99) 123-45-67</p>
              </div>
            </div>

            <div className="info_item">
              <i className="fas fa-envelope"></i>
              <div>
                <h4>Email</h4>
                <p>info@it-park.uz</p>
              </div>
            </div>
          </div>

          <div className="social_links">
            <span>Telegram</span>
            <span>Instagram</span>
            <span>Facebook</span>
          </div>
        </div>

        <div className="contact_form_wrapper">
          <form className="contact_form" onSubmit={handleSubmit}>
            <div className="input_group">
              <label>To'liq ismingiz</label>
              <input type="text" placeholder="Masalan: Azizbek Rahmonov" required />
            </div>

            <div className="input_group">
              <label>Email manzilingiz</label>
              <input type="email" placeholder="example@gmail.com" required />
            </div>

            <div className="input_group">
              <label>Xabaringiz</label>
              <textarea rows="5" placeholder="Savolingizni shu yerga yozing..." required></textarea>
            </div>

            <button type="submit" className="send_btn">Xabarni yuborish</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;