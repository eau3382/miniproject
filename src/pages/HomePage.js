import React from 'react';
import NavBar from '../components/NavBar';  // 네비바 컴포넌트 불러오기
import ImageGrid from '../components/ImageGrid'; // 상단 이미지 그리드 컴포넌트

const HomePage = () => {
  return (
    <div style={styles.container}>
      <NavBar />  {/* 네비바 추가 */}
      <ImageGrid />
      
      {/* 소개 섹션 추가 */}
      <div style={styles.introSection}>
        <h1 style={styles.introHeading}></h1>
        <p style={styles.introText}>
          심리 연구와 데이터 분석의 발전을 위한 학문적 접근을 탐구합니다. 다양한 심리검사와 연구 방법론을 통해 심리학 분야의 지식을 확장하고, 연구자들이 더욱 심도 있는 통찰을 얻을 수 있도록 돕습니다. 심리 연구 트렌드, 심리검사 도구, 연구방법론의 실제를 다루며, 이를 통해 정확하고 신뢰할 수 있는 연구 결과를 도출할 수 있도록 지원합니다.
        </p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    width: '100%',
    backgroundColor: '#f9f9f9',
    paddingBottom: '4rem',
  },
  introSection: {
    padding: '4rem 2rem',
    backgroundColor: '#704214',  // 섹션 배경 색상 (진한 갈색)
    color: '#fff',  // 텍스트 색상 (화이트)
    textAlign: 'center',
  },
  introHeading: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    marginBottom: '2rem',
  },
  introText: {
    fontSize: '1.2rem',
    lineHeight: '1.6',
    maxWidth: '800px',
    margin: '0 auto',
  },
};

export default HomePage;
