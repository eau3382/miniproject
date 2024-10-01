import React from 'react';

const ImageGrid = () => {
  const sections = [
    {
      title: 'Jamovi Tutorial',
      description: '심리학 사례로 배우는 자모비 사용법',
      image: './image1.jpg',
      link: '/jamovi-tutorial',  // 링크 경로
    },
    {
      title: 'Research Trend',
      description: '국내 및 해외 심리 연구 트렌드',
      image: './image2.jpg',
      link: '/psychology-research-trend',  // 경로를 올바르게 수정
    },
    
    {
      title: 'Psychological Tests',
      description: 'MMPI-3, 로샤(R-PAS), 웩슬러 지능검사',
      image: './image3.jpg',
      link: '/psychological-tests',  // 링크 경로
    },
    {
      title: 'CBT Exam',
      description: '연구방법론 기출문제',
      image: './image4.jpg',
      link: '/cbt-exam',  // 링크 경로
    },
  ];

  return (
    <div style={styles.grid}>
      {sections.map((section, index) => (
        <a key={index} href={section.link} target="_blank" rel="noopener noreferrer" style={styles.gridItem}>
  {/* 새창에서 열리기 */}
          <img src={section.image} alt={section.title} style={styles.image} />
          <h3 style={styles.title}>{section.title}</h3>
          <p style={styles.description}>{section.description}</p>
        </a>
      ))}
    </div>
  );
};

const styles = {
  grid: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '2rem',
    justifyContent: 'center',
    padding: '2rem',
  },
  gridItem: {
    width: '250px',
    textAlign: 'center',
    textDecoration: 'none',  // 링크 스타일을 제거
    color: 'inherit',  // 링크 클릭 시 기본 색상 유지
  },
  image: {
    width: '100%',
    height: 'auto',
    borderRadius: '10px',
    marginBottom: '1rem',
  },
  title: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    color: '#704214',
  },
  description: {
    fontSize: '1rem',
    color: '#333',
  },
};

export default ImageGrid;
