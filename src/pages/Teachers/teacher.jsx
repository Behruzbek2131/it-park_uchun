import React from 'react';
import './teacher.css';
import { Link } from 'react-router-dom';
// constants papkasidagi ma'lumotlarni import qilamiz
import { TEACHERS_DATA } from '../../constants/teacherData'; 

const Teacher = () => {
  return (
    <div className="teachers_page">
      {/* Sahifa sarlavhasi */}
      <header className="teachers_header">
        <h1>Bizning <span className="green_text"> Mentorlarimiz</span></h1>
        <p>
          Xorazm IT Park markazining eng tajribali va o'z ishining ustalari bilan tanishing. 
          Hozirda bizda {TEACHERS_DATA.length} nafar faol mentor mavjud.
        </p>
      </header>

      {/* 20 ta kartochka chiqadigan joy */}
      <div className="teachers_grid">
        {TEACHERS_DATA.map((teacher) => (
          <div className="teacher_card" key={teacher.id}>
            <div className="card_img_wrapper">
              {/* Har bir mentorning rasmi */}
              <img src={teacher.imageUrl} alt={teacher.name} />
              {/* Rasm ustidagi tajriba belgisi */}
              <span className="exp_badge">{teacher.experience} tajriba</span>
            </div>
            
            <div className="card_content">
              <h3>{teacher.name}</h3>
              <p className="specialty">{teacher.specialty}</p>
              <p className="bio">{teacher.bio}</p>
              
              {/* Dinamik ID orqali profilga o'tish */}
              <Link to={`/teachers/${teacher.id}`} className="btn_sub">
                Profilni ko'rish
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Teacher;