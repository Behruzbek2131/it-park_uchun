import React from 'react';
import './Courses.css';
import { Link } from 'react-router-dom';

// 1. DATA komponentdan TASHQARIDA turishi kerak yoki alohida fayldan import qilinishi kerak
const COURSES_DATA = [
  {
    id: 1,
    title: "Frontend Development",
    short: "FE",
    duration: "6 oy",
    time: "18:00 - 20:00",
    description: "HTML, CSS, JavaScript va React orqali zamonaviy interfeyslar yaratishni o'rganing.",
    color: "#00a82d"
  },
  {
    id: 2,
    title: "Backend Development",
    short: "BE",
    duration: "7 oy",
    time: "19:00 - 21:00",
    description: "Node.js yoki Python yordamida ma'lumotlar bazasi va serverlar bilan ishlash ustasi bo'ling.",
    color: "#00a82d"
  },
  {
    id: 3,
    title: "UI/UX Design",
    short: "UX",
    duration: "4 oy",
    time: "14:00 - 16:00",
    description: "Figma orqali mobil ilovalar va veb-saytlar dizaynini professional darajada chizing.",
    color: "#00a82d"
  },
  {
    id: 4,
    title: "Mobile App Development",
    short: "MD",
    duration: "6 oy",
    time: "10:00 - 12:00",
    description: "Flutter yordamida ham Android, ham iOS uchun ilovalar yaratishni o'rganing.",
    color: "#00a82d"
  }
];

const Courses = () => {
  // 2. Link bosilganda sahifa tepasiga chiqishi uchun
  const handleScrollTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="courses_page">
      <div className="courses_header">
        <h1>Bizning <span className="green_text">O'quv Yo'nalishlarimiz</span></h1>
        <p>O'zingizga mos kursni tanlang va professional karyerangizni boshlang.</p>
      </div>

      <div className="courses_grid">
        {/* Agar ma'lumot bo'lsa chiqadi, bo'lmasa xato bermaydi */}
        {COURSES_DATA && COURSES_DATA.length > 0 ? (
          COURSES_DATA.map((course) => (
            <div key={course.id} className="course_card">
              <div className="course_placeholder">
                <span>{course.short}</span>
              </div>

              <div className="course_content">
                <h3>{course.title}</h3>
                <p className="course_desc">{course.description}</p>
                
                <div className="course_info_row">
                  <span>📅 {course.duration}</span>
                  <span>⏰ {course.time}</span>
                </div>

                {/* Link yo'nalishini tekshiring: /coursesDetailmi yoki /courseDetail? */}
                <Link 
                  to={`/coursesDetail/${course.id}`} 
                  className="details_btn"
                  onClick={handleScrollTop}
                >
                  Batafsil ma'lumot
                  <span className="arrow_icon">→</span>
                </Link>
              </div>
            </div>
          ))
        ) : (
          <p>Ma'lumot topilmadi...</p>
        )}
      </div>
    </div>
  );
};

export default Courses;