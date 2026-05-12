import React, { useState } from 'react';
import './home.css';
import ITimg from '../../assets/image/it_horazm.jpg';
import { Link } from 'react-router-dom';

const Home = () => {
  const [courseChoice, setCourseChoice] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if(courseChoice.trim()) {
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 3000); // 3 soniyadan keyin xabarni o'chirish
    }
  };

  return (
    <div className="home_page">
      {/* 1. Hero Section - Jalb qiluvchi rasm va matn */}
      <section className="hero_section">
        <div className="hero_text">
          <span className="badge">Yangi imkoniyatlar maskani</span>
          <h1>IT Park bilan <br/> <span className="green_text">O'z kelajagingni</span> qur!</h1>
          <p>
            Biz bilan noldan boshlab professional darajagacha chiqing. 
            Eng zamonaviy kurslar va tajribali mentorlar sizni kutmoqda.
          </p>
          <div className="hero_btns">
            <Link to="/courses" className="main_btn">Kurslarni ko'rish</Link>
            <Link to="/teachers" className="main_btn outline">Mentorlarimiz</Link>
          </div>
        </div>
        
        <div className="hero_img">
          <div className="img_wrapper">
            <img src={ITimg} alt="IT Park" />
            <div className="floating_card">
              <span>🚀 20+ Zamonaviy Kurslar</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Statistika - Ishonchni oshirish uchun */}
      <section className="stats_bar">
        <div className="stat_item">
          <h2>10k+</h2>
          <p>Bitiruvchilar</p>
        </div>
        <div className="stat_divider"></div>
        <div className="stat_item">
          <h2>95%</h2>
          <p>Ishga joylashish</p>
        </div>
        <div className="stat_divider"></div>
        <div className="stat_item">
          <h2>50+</h2>
          <p>Hamkor kompaniyalar</p>
        </div>
      </section>

      {/* 3. Interaktiv Input - Qiziqtirish uchun */}
      <section className="interest_section">
        <div className={`interest_card ${isSubmitted ? 'success' : ''}`}>
          {isSubmitted ? (
            <div className="thanks_msg">
              <h2>Ajoyib! 🎉</h2>
              <p>Tez orada bizning mutaxassislarimiz {courseChoice} bo'yicha siz bilan bog'lanishadi.</p>
            </div>
          ) : (
            <>
              <h3>Kelajagingizni qaysi sohada ko'rasiz?</h3>
              <p>Sizga mos kursni birga tanlaymiz.</p>
              <form className="interest_form" onSubmit={handleSubmit}>
                <div className="input_group">
                  <input 
                    type="text" 
                    placeholder="Qaysi kursimiz sizga ma'qul? (masalan: Frontend)" 
                    value={courseChoice}
                    onChange={(e) => setCourseChoice(e.target.value)}
                    required
                  />
                  <button type="submit">Menga yordam bering</button>
                </div>
              </form>
            </>
          )}
        </div>
      </section>
    </div>
  );
};

export default Home;