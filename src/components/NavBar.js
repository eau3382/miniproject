import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../firebase';  // Firebase 인증 가져오기
import { onAuthStateChanged, signOut } from 'firebase/auth';  // Firebase 인증 상태 관리, 로그아웃 기능 추가

const NavBar = () => {
  const [user, setUser] = useState(null);  // 유저 상태 저장

  // Firebase 인증 상태 변경 시 처리
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);  // 로그인 상태 변경 시 유저 정보 설정
    });
    return () => unsubscribe();  // 컴포넌트 언마운트 시 상태 정리
  }, []);

  // 로그아웃 핸들러
  const handleLogout = async () => {
    try {
      await signOut(auth);
      alert('로그아웃 성공!');
    } catch (error) {
      console.error('로그아웃 실패:', error.message);
    }
  };

  return (
    <nav style={styles.nav}>
      <div style={styles.left}>
        <h1 style={styles.logo}>심리연구 & 데이터분석</h1>
        <p style={{ fontSize: '1.5rem', color: '#704214', marginTop: '0.5rem' }}>with Jamovi</p>
      </div>
      <div style={styles.menu}>
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">KeyTerms</a>
        <a href="#">Research</a>
        <a href="#">Contact</a>
        
        {/* 유저 상태에 따라 로그인/회원가입 또는 아이디 표시 */}
        {user ? (
          <>
            <span style={styles.welcome}>{user.email}님</span>
            <button onClick={handleLogout} style={styles.logoutButton}>로그아웃</button>
          </>
        ) : (
          <>
            <Link to="/signup" style={styles.link}>회원가입</Link>
            <Link to="/login" style={styles.link}>로그인</Link>
          </>
        )}
      </div>
    </nav>
  );
};

const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',  
    padding: '1.5rem',
    backgroundColor: '#f8f3e4',
    borderBottom: '2px solid #704214',
  },
  left: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',  
    flexGrow: 1,
    marginLeft: '1rem',
  },
  logo: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    color: '#704214',
    margin: 0,
  },
  menu: {
    display: 'flex',
    gap: '2rem',
  },
  link: {
    fontSize: '1.2rem',
    textDecoration: 'none',
    color: '#704214',
    fontWeight: '600',
  },
  welcome: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    color: '#704214',
  },
  logoutButton: {
    backgroundColor: '#ff6347',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    padding: '0.5rem 1rem',
    cursor: 'pointer',
    fontSize: '1rem',
  },
};

export default NavBar;
