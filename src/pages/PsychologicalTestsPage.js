import React from 'react';

const PsychologicalTestsPage = () => {
  return (
    <div style={styles.pageContainer}>
      <h1 style={styles.pageTitle}>심리 검사</h1>
      <p style={styles.description}>
        여기에서 MMPI-3, 로르샤흐(로샤), 웩슬러 지능검사와 같은 다양한 심리 검사를 확인할 수 있습니다.
      </p>

      <div style={styles.testList}>
        {/* MMPI-3 */}
        <div style={styles.testCard}>
          <img src="./image3-1.jpg" alt="MMPI-3" style={styles.image} />
          <div style={styles.textContainer}>
            <h2 style={styles.testTitle}>MMPI-3</h2>
            <p style={styles.summary}>성격 및 정신 건강 상태를 평가하는 다면적 인성 검사</p>
            <button style={styles.viewButton}>검사 더 알아보기</button>
          </div>
        </div>

        {/* 로샤 수행평가체계 */}
        <div style={styles.testCard}>
          <img src="./image3-2.jpg" alt="로샤" style={styles.image} />
          <div style={styles.textContainer}>
            <h2 style={styles.testTitle}>로샤 수행평가체계(R-PAS)</h2>
            <p style={styles.summary}>사람의 심리적 상태를 분석하는 잉크 반점 테스트</p>
            <button style={styles.viewButton}>검사 더 알아보기</button>
          </div>
        </div>

        {/* 웩슬러 지능 검사 */}
        <div style={styles.testCard}>
          <img src="./image3-3.jpg" alt="웩슬러 지능 검사" style={styles.image} />
          <div style={styles.textContainer}>
            <h2 style={styles.testTitle}>웩슬러 지능 검사</h2>
            <p style={styles.summary}>개인의 지능 수준을 평가하는 표준화된 지능 검사</p>
            <button style={styles.viewButton}>검사 더 알아보기</button>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  pageContainer: {
    backgroundColor: '#d0e7f9',  // 전체 배경을 블루 계열의 색상으로 변경
    padding: '2rem',
  },
  pageTitle: {
    backgroundColor: '#1a8bbb',
    fontSize: '2.5rem',
    fontWeight: 'bold',
    textAlign: 'center',
    padding: '1.5rem',
    borderRadius: '8px',
    color: '#fff',
    maxWidth: '960px',  // 제목 박스의 최대 너비 설정
    margin: '0 auto 2rem auto',
  },
  description: {
    fontSize: '1.2rem',
    textAlign: 'center',
    marginBottom: '2rem',
    color: '#555',
  },
  testList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '3rem',  // 각 항목 사이 간격
    maxWidth: '960px',  // 전체 페이지의 너비를 설정
    margin: '0 auto',  // 좌우 여백을 맞추기 위해 가운데 정렬
  },
  testCard: {
    display: 'flex',
    backgroundColor: '#f0f0f0',  // 항목 배경색
    padding: '1.5rem',  // 상하 좌우 여백을 동일하게 설정
    borderRadius: '8px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    alignItems: 'center',
  },
  image: {
    width: '240px',  // 이미지 크기 설정
    height: '180px',  // 이미지 높이 설정
    objectFit: 'cover',
    borderRadius: '8px',
    marginRight: '1.5rem',  // 이미지와 텍스트 사이 간격
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    flex: 1,
    height: '100%',
  },
  testTitle: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
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
    backgroundColor: '#7890ee',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};

export default PsychologicalTestsPage;
