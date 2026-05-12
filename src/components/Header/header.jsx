import React, { useState, useEffect } from 'react'; // useEffect qo'shildi
import './header.css';
import { Link } from 'react-router-dom';
import mentorsImg from '../../assets/image/iticon.jpg'; 

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // --- 1. SKROLNI MUZLATISH MANTIQI ---
  useEffect(() => {
    if (isMenuOpen) {
      // Menyu ochilganda skrolni o'chirish
      document.body.style.overflow = 'hidden';
    } else {
      // Menyu yopilganda skrolni qaytarish
      document.body.style.overflow = 'auto';
    }

    // Komponentdan chiqib ketganda skrol har doim qaytsin (Tozalash)
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  // --- 2. FUNKSIYALAR ---
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="header">
      <div className="header_img">
        <img src={mentorsImg} alt="it icon" />
      </div>

      {/* Burger tugmasi */}
      <div className={`burger_menu ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </div>

      {/* Navigatsiya linklari */}
      <div className={`header_link ${isMenuOpen ? 'active' : ''}`}>
        <Link to="/" onClick={closeMenu}>Bosh Sahifa</Link>
        <Link to="/teachers" onClick={closeMenu}>O'qituvchilar</Link>
        <Link to="/courses" onClick={closeMenu}>Kurslar</Link>
        <Link to="/preparation" onClick={closeMenu}>Kursga Tayyorgarlik</Link>
        
        {/* Mobil menyu ichidagi bog'lanish tugmasi */}
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