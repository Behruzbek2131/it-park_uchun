import React from 'react';
import './footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
    <div className="footer_container">
      
      {/* 1. Kompaniya haqida */}
      <div className="fot_info">
        <div className="fot_text">
          <h1>ITPark <span>KHOREZM</span></h1>
          <p>Xorazm viloyatida IT sohasini rivojlantirish va yoshlarni xalqaro bozorga tayyorlash markazi.</p>
          <div className="contact_details">
             <p>📍 Manzil: Urganch sh., Tinchlik ko'chasi 6</p>
             {/* Telefon uchun Link-da tel: prefiksi ishlatiladi */}
             <a href="tel:+998990531199">📞 Aloqa: +998 99 053 11 99</a>
          </div>
        </div>
      </div>

      {/* 2. Tezkor havolalar (Navigatsiya) */}
      <div className="fot_links">
        <h3>Sahifalar</h3>
        <ul>
          <li><Link to="/">Bosh sahifa</Link></li>
          <li><Link to="/teachers">O'qituvchilar</Link></li>
          <li><Link to="/contact">Bog'lanish</Link></li>
        </ul>
      </div>

      {/* 3. Yo'nalishlar (Kurslar) */}
      <div className="fot_links">
        <h3>Yo'nalishlar</h3>
        <ul>
          <li>Frontend Dasturlash</li>
          <li>Backend (Python/Node.js)</li>
          <li>UI/UX Dizayn</li>
          <li>Grafik Dizayn</li>
        </ul>
      </div>

      {/* 4. Ijtimoiy tarmoqlar */}
      <div className="fot_social">
        <h3>Biz ijtimoiy tarmoqlarda</h3>
        <div className="social_icons">
          <a href="https://t.me/xorazm_it_park" target="_blank" rel="noreferrer">Telegram</a>
          <a href="https://instagram.com/itpark_xorazm_" target="_blank" rel="noreferrer">Instagram</a>
          <a href="https://www.facebook.com/p/It-Park-Xorazm-100090150763568/" target="_blank" rel="noreferrer">Facebook</a>
        </div>
      </div>

    </div>

    <div className="footer_bottom">
      <p>&copy; {new Date().getFullYear()} ITPark Khorezm. Barcha huquqlar himoyalangan.</p>
    </div>
  </footer>
  );
};


export default Footer;