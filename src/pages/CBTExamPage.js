import React from 'react';

const CBTExamPage = () => {
  return (
    <div style={styles.pageContainer}>
      <h1 style={styles.pageTitle}>자격증 기출문제 풀기</h1>
      <p style={styles.description}>
        다양한 자격증 기출문제를 풀어보고 공부할 수 있습니다. 아래에서 원하는 자격증 시험을 선택하여 문제를 풀어보세요.
      </p>

      <div style={styles.examList}>
        {/* 임상심리사 1급 */}
        <div style={styles.examCard}>
          <div style={styles.textContainer}>
            <div style={styles.titleWithIcon}>
              <div style={styles.iconCircle}>1</div> {/* 노란색 아이콘 */}
              <h2 style={styles.examTitle}>임상심리사 1급</h2>
            </div>
            <p style={styles.examSubtitle}>임상심리연구방법론</p>
            <button style={styles.examButton}>문제 풀기</button>
            <button style={styles.historyButton}>학습 기록 보기</button>
          </div>
        </div>

        {/* 청소년상담사 1급 */}
        <div style={styles.examCard}>
          <div style={styles.textContainer}>
            <div style={styles.titleWithIcon}>
              <div style={styles.iconCircle}>2</div> {/* 노란색 아이콘 */}
              <h2 style={styles.examTitle}>청소년상담사 1급</h2>
            </div>
            <p style={styles.examSubtitle}>상담연구방법론의 기초</p>
            <button style={styles.examButton}>문제 풀기</button>
            <button style={styles.historyButton}>학습 기록 보기</button>
          </div>
        </div>

        {/* 청소년상담사 2급 */}
        <div style={styles.examCard}>
          <div style={styles.textContainer}>
            <div style={styles.titleWithIcon}>
              <div style={styles.iconCircle}>3</div> {/* 노란색 아이콘 */}
              <h2 style={styles.examTitle}>청소년상담사 2급</h2>
            </div>
            <p style={styles.examSubtitle}>상담연구방법론의 실제</p>
            <button style={styles.examButton}>문제 풀기</button>
            <button style={styles.historyButton}>학습 기록 보기</button>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  pageContainer: {
    backgroundColor: '#d6eaff',  // 전체 배경을 블루 계열로 설정
    padding: '2rem',
    minHeight: '100vh',
  },
  pageTitle: {
    backgroundColor: '#1a6bb8',
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
  examList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '3rem',
    maxWidth: '960px',
    margin: '0 auto',
  },
  examCard: {
    backgroundColor: '#f0f0f0',
    padding: '1.5rem',
    borderRadius: '8px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    alignItems: 'center',
    display: 'flex',
  },
  titleWithIcon: {
    display: 'flex',
    alignItems: 'center',  // 아이콘과 텍스트를 수평 정렬
    marginBottom: '0.5rem',  // 제목과 아이콘의 높이를 맞추기 위해 추가
  },
  iconCircle: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    backgroundColor: '#f4c430',  // 진한 노란색 아이콘 배경
    color: '#000',  // 검정색 숫자
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '1.5rem',
    marginRight: '1rem',
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    flex: 1,
  },
  examTitle: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#333',
  },
  examSubtitle: {
    fontSize: '1.2rem',
    color: '#666',
    marginBottom: '1rem',
  },
  examButton: {
    padding: '0.8rem 1.5rem',
    fontSize: '1rem',
    color: '#fff',
    backgroundColor: '#4caf50',  // 문제 풀기 버튼 색상
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    marginBottom: '0.5rem',
  },
  historyButton: {
    padding: '0.5rem 1rem',
    fontSize: '0.9rem',
    backgroundColor: '#ccc',
    color: '#333',  // 회색 배경에 어울리는 진한 글씨색
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};

export default CBTExamPage;
