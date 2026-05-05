import React, { useState } from 'react';
import './header.css';
import { Link } from 'react-router-dom';

// TeacherDetail.jsx yoki Teacher.jsx ichida
import mentorsImg from '../../assets/image/iticon.jpg'; 

const Header = () => {
  // Menyu ochiq yoki yopiqligini tekshirish uchun state
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Menyuni ochish/yopish funksiyasi
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Havola bosilganda menyuni yopish
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="header">
      <div className="header_img">
        <img src={mentorsImg} alt="it icon" />
      </div>

      {/* Burger tugmasi: faqat mobil versiyada ko'rinadi */}
      <div className={`burger_menu ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </div>

      {/* Navigatsiya linklari: 'active' klassi menyuni ekranga chiqaradi */}
      <div className={`header_link ${isMenuOpen ? 'active' : ''}`}>
        <Link to="/" onClick={closeMenu}>Bosh Sahifa</Link>
        <Link to="/teachers" onClick={closeMenu}>O'qituvchilar</Link>
        {/* Mobil menyu ichida ko'rinadigan bog'lanish tugmasi */}
        <div className="contact_btn mobile_only">
          <Link to="/contact" onClick={closeMenu}>Bog'lanish</Link>
        </div>
      </div>

      {/* Desktop uchun bog'lanish tugmasi */}
      <div className="contact_btn desktop_only">
        <Link to="/contact">Bog'lanish</Link>
      </div>
    </div>
  );
};

export default Header;