import React, { useState, useEffect } from 'react';
import './resources.css';

const RESOURCES_DATA = [
  {
    id: 1,
    category: "Dasturlash",
    title: "VS Code o'rnatish",
    desc: "Eng mashhur matn muharriri. Dasturlashni boshlash uchun eng asosiy vosita.",
    link: "https://code.visualstudio.com/",
    icon: "💻"
  },
  {
    id: 2,
    category: "Mashq",
    title: "Ratatype - Tez yozish",
    desc: "O'n barmoqda kod yozish tezligingizni oshirish uchun ajoyib trenajyor.",
    link: "https://www.ratatype.com/",
    icon: "⌨️"
  },
  {
    id: 3,
    category: "Til",
    title: "Technical English",
    desc: "Dasturlash terminlarini o'rganish uchun foydali manbalar to'plami.",
    link: "#",
    icon: "🇬🇧"
  },
  {
    id: 4,
    category: "Dizayn",
    title: "Figma Community",
    desc: "UI/UX dizaynerlar uchun tayyor shablonlar va ilhom manbalari.",
    link: "https://www.figma.com/community",
    icon: "🎨"
  }
];

const Resources = ({ isOpen, onClose }) => {
  // Drawer ochilganda skrolni to'xtatish
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => { document.body.style.overflow = 'auto'; };
  }, [isOpen]);

  return (
    <>
      {/* Orqa fon xiralashishi */}
      <div className={`resources_overlay ${isOpen ? 'active' : ''}`} onClick={onClose}></div>

      {/* O'ng tarafdagi Panel */}
      <aside className={`resources_drawer ${isOpen ? 'open' : ''}`}>
        <div className="drawer_header">
          <div className="header_title">
            <span className="green_dot"></span>
            <h2>O'quv Resurslari</h2>
          </div>
          <button className="close_drawer_btn" onClick={onClose}>&times;</button>
        </div>

        <div className="drawer_content">
          <p className="drawer_subtitle">
            Dars boshlanishidan oldin ushbu vositalar bilan tanishib chiqishingizni tavsiya qilamiz.
          </p>

          <div className="resources_list">
            {RESOURCES_DATA.map((item) => (
              <div key={item.id} className="resource_item">
                <div className="res_icon_box">{item.icon}</div>
                <div className="res_info">
                  <span className="res_category">{item.category}</span>
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                  <a href={item.link} target="_blank" rel="noreferrer" className="res_link">
                    O'tish <span className="arrow">→</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="drawer_footer">
          <p>Yana savollaringiz bormi? <a href="/contact">Biz bilan bog'laning</a></p>
        </div>
      </aside>
    </>
  );
};

export default Resources;