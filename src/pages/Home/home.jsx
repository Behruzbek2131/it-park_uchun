import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';

import heroImg from '../../assets/image/it_horazm.jpg';

const Home = () => {
  return (
    <div className="home_page">
      {/* 1. Hero Section */}
      <section className="hero_section">
        <div className="hero_text">
          <h1>Xorazmning Eng Kuchli <span className="green_text">IT Mentorlaridan</span> Bilim Oling</h1>
          <p>Nazariya va amaliyotni birlashtirgan holda, real loyihalar ustida ishlashni o'rganing.</p>
          <div className="hero_btns">
            <Link to="/teachers" className="btn_main">O'qituvchilar bilan tanishish</Link>
            <Link to="/contact" className="btn_sub">Kursga yozilish</Link>
          </div>
        </div>
        <div className="hero_image">
            <img src={heroImg} alt="it horazm" />
        </div>
      </section>

      {/* 2. Stats Section */}
      <section className="stats_bar">
        <div className="stat_item"><h3>50+</h3><p>Mentorlar</p></div>
        <div className="stat_item"><h3>15+</h3><p>IT Kurslar</p></div>
        <div className="stat_item"><h3>500+</h3><p>Muvaffaqiyatli loyihalar</p></div>
      </section>

      
      <section className="mentor_preview">
         <h2>Bizning Top Mentorlar</h2>
            <div className="mentor_cards">
                <div className="mentor_card">
                    <div className="mentor_img">
                        <img src="src/assets/image/mentor.jpg" alt="mentor" />
                    </div>
                    <div className="mentor_text">
                        <h3>Mentor Ismi</h3>
                        <p>Mutaxassislik: Frontend Dasturlash</p>
                        <p>5 yillik tajriba, 100+ loyihalar</p>
                        <Link to="/teachers/1" className="btn_sub">Batafsil</Link>
                    </div>
                </div>
                <div className="mentor_card">
                    <div className="mentor_text">
                        <h3>Mentor Ismi</h3>
                        <p>Mutaxassislik: Frontend Dasturlash</p>
                        <p>5 yillik tajriba, 100+ loyihalar</p>
                        <Link to="/teachers/2" className="btn_sub">Batafsil</Link>
                    </div>
                    <div className="mentor_img">
                        <img src="src/assets/image/mentor.jpg" alt="mentor" />
                    </div>
                </div>
                <div className="mentor_card">
                    <div className="mentor_img">
                        <img src="src/assets/image/mentor.jpg" alt="mentor" />
                    </div>
                    <div className="mentor_text">
                        <h3>Mentor Ismi</h3>
                        <p>Mutaxassislik: Frontend Dasturlash</p>
                        <p>5 yillik tajriba, 100+ loyihalar</p>
                        <Link to="/teachers/3" className="btn_sub">Batafsil</Link>   
                    </div>
                </div>
            </div>
      </section>
    </div>
  );
};

export default Home;