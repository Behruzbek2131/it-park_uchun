import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Komponentlarni import qilish
import Header from './components/Header/header';
import Footer from './components/Footer/footer';

// Sahifalarni import qilish
import Home from './pages/Home/home';
import Teachers from './pages/Teachers/teacher';
import TeacherDetail from "./pages/TeacherDetail/TeacherDetail.jsx";
import Contact from './pages/Contact/contact';
import NotFound from './pages/NotFound/notFound';

// Global stillar
import './styles/variables.css'; 
import Preparation from './pages/Preparation/Preparation.jsx';
import Courses from './pages/Courses/Courses.jsx';
import CoursesDetail from './pages/CoursesDetail/CoursesDetail.jsx';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        
        <main className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/teachers" element={<Teachers />} />
            <Route path='/preparation' element={<Preparation />} />
            <Route path='/courses' element={<Courses />} />
            <Route path='/coursesDetail/:id' element={<CoursesDetail />}/>  
            {/* Dinamik ID orqali o'qituvchi profiliga o'tish */}
            <Route path="/teachers/:id" element={<TeacherDetail />} />
            <Route path="/contact" element={<Contact />} />
            {/* Hech qaysi yo'l tushmasa 404 sahifasi */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;