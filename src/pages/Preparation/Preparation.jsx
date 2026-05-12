import React, { useState } from 'react';
import './Preparation.css';
import Resources from './Resources';

const Preparation = () => {
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const [userQuestion, setUserQuestion] = useState("");
  const [quizScore, setQuizScore] = useState(null);
  
  // Savol-javob mantiqi
  const handleQuiz = (answer) => {
    if (answer === 'yes') {
      setQuizScore("Zo'r! Sizda mantiqiy fikrlash yaxshi. Darslarga bemalol qatnashishingiz mumkin.");
    } else {
      setQuizScore("Xavotir olmang! Biz darslarni mutlaqo noldan boshlaymiz.");
    }
  };

  const sendQuestion = (e) => {
    e.preventDefault();
    alert(`Rahmat! Savolingiz qabul qilindi: "${userQuestion}" \nTez orada mentorlarimiz javob berishadi.`);
    setUserQuestion("");
  };

  return (
    <div className="prep_page">
      <div className="prep_header">
        <h1>O'quv jarayoniga <span className="green_text">tayyorgarlik</span></h1>
        <p>Kursni boshlashdan oldin o'zingizni sinab ko'ring!</p>
      </div>

      {/* 1. Kichik Test Bo'limi */}
      <div className="prep_quiz_section">
        <h3>🚀 Bilimingizni tekshiring</h3>
        <p>Kompyuterda fayllarni mustaqil yarata olasizmi va ingliz tilida o'qishni bilasizmi?</p>
        {!quizScore ? (
          <div className="quiz_btns">
            <button onClick={() => handleQuiz('yes')}>Ha, albatta</button>
            <button onClick={() => handleQuiz('no')}>Hali o'rganyapman</button>
          </div>
        ) : (
          <div className="quiz_result">{quizScore}</div>
        )}
      </div>

      {/* 2. Asosiy amallar (Bularni boya yozgan edik, ixchamroq qildim) */}
      <div className="action_container">
        <button className="main_action_btn" onClick={() => setIsResourcesOpen(true)}>
          📚 Foydali Resurslarni ko'rish
        </button>
        <a href="https://t.me/xorazm_it_park" target="_blank" className="main_action_btn tg">
          📱 Telegram guruhga kirish
        </a>
      </div>

      {/* 3. Savol berish bo'limi */}
      <div className="question_box">
        <h3>🤔 Savolingiz bormi?</h3>
        <p>Mentorlarimizga to'g'ridan-to'g'ri savol yo'llang.</p>
        <form onSubmit={sendQuestion} className="prep_form">
          <input 
            type="text" 
            placeholder="Savolingizni yozing..." 
            value={userQuestion}
            onChange={(e) => setUserQuestion(e.target.value)}
            required
          />
          <button type="submit">Yuborish</button>
        </form>
      </div>

      <div className="prep_warning">
        <h3>💡 Muhim eslatma!</h3>
        <p>Login va parollar darsdan 24 soat oldin taqdim etiladi.</p>
      </div>

      <Resources isOpen={isResourcesOpen} onClose={() => setIsResourcesOpen(false)} />
    </div>
  );
};

export default Preparation;