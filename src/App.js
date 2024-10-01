import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import JamoviTutorialPage from './pages/JamoviTutorialPage';
import PsychologyResearchTrendPage from './pages/PsychologyResearchTrendPage';
import PsychologicalTestsPage from './pages/PsychologicalTestsPage';
import CBTExamPage from './pages/CBTExamPage';
import SignUpPage from './pages/SignUpPage';  // 회원가입 페이지 추가
import LogInPage from './pages/LogInPage';    // 로그인 페이지 추가

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/jamovi-tutorial" element={<JamoviTutorialPage />} />
        <Route path="/psychology-research-trend" element={<PsychologyResearchTrendPage />} />
        <Route path="/psychological-tests" element={<PsychologicalTestsPage />} />
        <Route path="/cbt-exam" element={<CBTExamPage />} />
        <Route path="/signup" element={<SignUpPage />} />  {/* 회원가입 경로 */}
        <Route path="/login" element={<LogInPage />} />    {/* 로그인 경로 */}
      </Routes>
    </Router>
  );
}

export default App;
