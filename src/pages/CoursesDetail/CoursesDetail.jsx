import React, { useState, useEffect } from 'react'; // 1. Hooklarni import qilish
import { useParams, useNavigate } from 'react-router-dom';
import { COURSES_DATA } from '../../constants/coursesData';
import './CoursesDetail.css';

const CoursesDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // --- 1. STATES (Har doim tepada turishi shart) ---
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '' });

  // --- 2. DATA FINDING ---
  const course = COURSES_DATA.find(item => item.id === parseInt(id));

  // --- 3. EFFECTS (Skrolni to'xtatish) ---
  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    // Komponentdan chiqib ketganda skrolni tozalash
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [showModal]);

  // --- 4. HANDLERS ---
  const handleEnrollSubmit = (e) => {
    e.preventDefault();
    alert(`Rahmat, ${formData.name}! Siz ${course.title} kursiga ariza topshirdingiz. Tez orada bog'lanamiz.`);
    setShowModal(false);
    setFormData({ name: '', phone: '' });
  };

  // --- 5. CONDITIONAL RENDERING (Hooklardan pastda bo'lishi shart) ---
  if (!course) {
    return (
      <div className="error_container">
        <div className="error_msg">Kurs topilmadi...</div>
        <button onClick={() => navigate('/courses')}>Kurslarga qaytish</button>
      </div>
    );
  }

  return (
    <div className="detail_page">
      <button className="back_btn" onClick={() => navigate(-1)}>← Orqaga</button>

      <div className="detail_container">
        {/* Chap tomon: Ma'lumotlar */}
        <div className="detail_main">
          <div className="category_tag">Premium Kurs</div>
          <h1>{course.title}</h1>
          <p className="full_description">{course.fullInfo || course.description}</p>
          
          <div className="what_you_learn">
            <h3>Siz nimalarni o'rganasiz?</h3>
            <ul>
              <li>Asosiy tushunchalar va zamonaviy texnologiyalar</li>
              <li>Real loyihalar ustida amaliy ishlash</li>
              <li>Portfolio yaratish va ishga tayyorlanish</li>
              <li>Mentorlar tomonidan individual qo'llab-quvvatlash</li>
            </ul>
          </div>
        </div>

        {/* O'ng tomon: Sidebar */}
        <div className="detail_sidebar">
          <div className="price_card">
            <div className="placeholder_img">
                <span>{course.short}</span>
            </div>
            <div className="price_info">
                <span className="price_label">Kurs narxi:</span>
                <h2 className="price_value">{course.price || "1 200 000"} so'm <small>/oy</small></h2>
            </div>
            <div className="specs">
              <div className="spec_item"><span>📅 Davomiyligi:</span> <b>{course.duration}</b></div>
              <div className="spec_item"><span>⏰ Vaqti:</span> <b>{course.time}</b></div>
              <div className="spec_item"><span>👨‍🏫 Mentor:</span> <b>{course.mentor || "Tayinlanmagan"}</b></div>
              <div className="spec_item"><span>🎓 Daraja:</span> <b>Noldan boshlab</b></div>
            </div>
            <button className="enroll_btn" onClick={() => setShowModal(true)}>
              Kursga yozilish
            </button>
          </div>
        </div>
      </div>

      {/* --- MODAL --- */}
      {showModal && (
        <div className="modal_overlay" onClick={() => setShowModal(false)}>
          <div className="modal_content" onClick={(e) => e.stopPropagation()}>
            <button className="close_btn" onClick={() => setShowModal(false)}>&times;</button>
            <h2>Kursga yozilish</h2>
            <p>Ma'lumotlaringizni qoldiring, biz sizga qo'ng'iroq qilamiz.</p>
            
            <form onSubmit={handleEnrollSubmit} className="enroll_form">
              <div className="input_group_modal">
                <label>To'liq ismingiz</label>
                <input 
                  type="text" 
                  placeholder="Masalan: Behruzbek" 
                  required 
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>
              <div className="input_group_modal">
                <label>Telefon raqamingiz</label>
                <input 
                  type="tel" 
                  placeholder="+998 90 123 45 67" 
                  required 
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                />
              </div>
              <button type="submit" className="modal_submit_btn">Arizani yuborish</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default CoursesDetail;