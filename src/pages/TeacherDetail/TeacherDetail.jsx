import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { TEACHERS_DATA } from '../../constants/teacherData';
import './TeacherDetail.css';

const TeacherDetail = () => {
  const { id } = useParams();

  // Sahifa ochilganda eng tepaga skroll qilsin
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // ID bo'yicha mentorni topish (String qilib solishtirish xavfsizroq)
  const mentor = TEACHERS_DATA.find((t) => String(t.id) === String(id));

  // Agar mentor topilmasa (masalan, ID xato bo'lsa)
  if (!mentor) {
    return (
      <div className="not_found_container">
        <h1>Mentor topilmadi</h1>
        <p>Kechirasiz, bunday ID ga ega mentor ma'lumotlar bazasida yo'q.</p>
        <Link to="/teachers" className="back_link">O'qituvchilar ro'yxatiga qaytish</Link>
      </div>
    );
  }

  return (
    <div className="profile_page">
      <div className="container">
        <Link to="/teachers" className="back_link">← Orqaga qaytish</Link>
        
        <div className="profile_wrapper">
          {/* Chap tomonda rasm va ijtimoiy tarmoqlar */}
          <div className="profile_left">
            <div className="profile_img">
              <img src={mentor.imageUrl} alt={mentor.name} />
            </div>
            <div className="social_box">
              <button className="msg_btn" onClick={() => alert("Xabar yuborish tizimi tez kunda!")}>
                Xabar yuborish
              </button>
              <div className="mini_socials">
                <span>Telegram</span>
                <span>LinkedIn</span>
                <span>Instagram</span>
              </div>
            </div>
          </div>

          {/* O'ng tomonda asosiy ma'lumotlar */}
          <div className="profile_right">
            <div className="main_info">
              <span className="badge">{mentor.specialty}</span>
              <h1>{mentor.name}</h1>
              <p className="exp_text">Tajriba: <strong>{mentor.experience}</strong></p>
            </div>

            <div className="bio_section">
              <h3>Mentor haqida</h3>
              <p>{mentor.bio}</p>
              <p style={{marginTop: '10px', color: '#888'}}>
                Ushbu mentor Xorazm IT Park markazida ko'plab muvaffaqiyatli loyihalarga boshchilik qilgan 
                va talabalarga zamonaviy texnologiyalarni o'rgatib kelmoqda.
              </p>
            </div>

            <div className="skills_section">
              <h3>Texnologiyalar</h3>
              <div className="skills_list">
                {/* Agar bazada skillar bo'lmasa, default ko'rsatamiz */}
                <span>React</span>
                <span>JavaScript</span>
                <span>TypeScript</span>
                <span>Git & GitHub</span>
              </div>
            </div>

            <div className="stats_cards">
              <div className="s_card">
                <h4>150+</h4>
                <p>O'quvchilar</p>
              </div>
              <div className="s_card">
                <h4>25+</h4>
                <p>Loyihalar</p>
              </div>
              <div className="s_card">
                <h4>4.9</h4>
                <p>Reyting</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherDetail;