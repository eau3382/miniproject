import React from 'react';

const PsychologyResearchTrendPage = () => {
  return (
    <div style={styles.pageContainer}>
      <h1 style={styles.pageTitle}>심리학 연구 트렌드</h1>
      <p style={styles.description}>
        아래에서 최신 국내 및 해외 심리학 연구 트렌드를 확인하고, 연구 논문을 살펴보세요.
      </p>

      <div style={styles.trendList}>
        {/* 국내 연구 */}
        <div style={styles.trendCard}>
          <img src="./image2-1.jpg" alt="국내 심리학 연구" style={styles.image} />
          <div style={styles.textContainer}>
            <h2 style={styles.trendTitle}>국내 심리학 연구 트렌드 2024</h2>
            <p style={styles.year}>발표 연도: 2024</p>
            <p style={styles.summary}>최근 국내 심리학 연구에서 주목받고 있는 주제는...</p>
            <button style={styles.viewButton}>논문 보기</button>
          </div>
        </div>

        {/* 해외 연구 */}
        <div style={styles.trendCard}>
          <img src="./image2-2.jpg" alt="해외 심리학 연구" style={styles.image} />
          <div style={styles.textContainer}>
            <h2 style={styles.trendTitle}>해외 심리학 연구 트렌드 2023</h2>
            <p style={styles.year}>발표 연도: 2023</p>
            <p style={styles.summary}>The latest trends in international psychology research...</p>
            <button style={styles.viewButton}>논문 보기</button>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  pageContainer: {
    backgroundColor: '#e6f2ff',  // 전체 배경 색상
    padding: '2rem',
  },
  pageTitle: {
    backgroundColor: '#1a8bbb',  // 제목 박스 배경 색상
    fontSize: '2.5rem',
    fontWeight: 'bold',
    textAlign: 'center',
    padding: '1.5rem',
    borderRadius: '8px',
    color: '#fff',
    maxWidth: '960px',
    margin: '0 auto 2rem auto',
  },
  description: {
    fontSize: '1.2rem',
    textAlign: 'center',
    marginBottom: '2rem',
    color: '#555',
  },
  trendList: {
    display: 'flex',
    flexDirection: 'column',  // 한 줄에 하나씩 배치
    gap: '3rem',
    maxWidth: '960px',
    margin: '0 auto',  // 가운데 정렬
  },
  trendCard: {
    display: 'flex',  // 이미지와 텍스트를 가로로 배치
    backgroundColor: '#f0f0f0',  // 박스 배경
    padding: '1.5rem',  // 상하 좌우 여백을 동일하게 설정
    borderRadius: '8px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    alignItems: 'center',
  },
  image: {
    width: '240px',  // 좌우 길이를 더 넓게 설정
    height: '180px',  // 동일한 높이를 유지
    objectFit: 'cover',
    borderRadius: '8px',
    marginRight: '1.5rem',  // 이미지와 텍스트 사이 간격
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',  // 텍스트와 버튼이 상하로 균등하게 배치되도록 설정
    flex: 1,
    height: '100%',  // 텍스트와 버튼이 이미지와 동일한 높이가 되도록 설정
  },
  trendTitle: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    marginBottom: '0.5rem',
    color: '#333',
  },
  year: {
    fontSize: '1rem',
    color: '#666',
    marginBottom: '1rem',
  },
  summary: {
    fontSize: '1rem',
    color: '#555',
    marginBottom: '1.5rem',
  },
  viewButton: {
    padding: '0.8rem 1.5rem',
    fontSize: '1rem',
    color: '#fff',
    backgroundColor: '#7890ee',  // 버튼 배경색
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    alignSelf: 'flex-end',  // 버튼을 텍스트와 같은 높이에 맞추고 박스 밖으로 나가지 않도록 설정
  },
};

export default PsychologyResearchTrendPage;
