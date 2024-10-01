import React from 'react';

const JamoviTutorialPage = () => {
  return (
    <div style={styles.pageContainer}>
      <h1 style={styles.pageTitle}>Jamovi 튜토리얼</h1>
      <p style={styles.description}>
        아래 목록에서 원하는 강의를 선택하고, 강의를 시청하고 교안을 다운로드 받으세요. <br />
        또한 각 강의에 대한 문제를 풀고 학습 통계도 확인할 수 있습니다.
      </p>
      <div style={styles.chapterList}>
        {chapters.map((chapter, index) => (
          <div key={index} style={styles.chapterCard}>
            <h2 style={styles.chapterTitle}>
              <span style={styles.chapterNumber}>{index + 1}. </span>
              <span style={styles.chapterText}>{chapter.titleKor}</span>
            </h2>
            <div style={styles.buttons}>
              <button style={{ ...styles.button, ...styles.videoButton }}>강의 듣기</button>
              <button style={{ ...styles.button, ...styles.materialButton }}>교안 다운</button>
              <button style={{ ...styles.button, ...styles.quizButton }}>문제 풀기</button>
            </div>
            <div style={styles.progress}>
              <p>학습 진행도: <strong>{chapter.progress}%</strong></p>
              <p>정답률: <strong>{chapter.correctRate}%</strong></p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const chapters = [
  { titleKor: '빈도분포', progress: 80, correctRate: 90 },
  { titleKor: '집중경향과 변산성', progress: 70, correctRate: 85 },
  { titleKor: '표집과 확률', progress: 60, correctRate: 75 },
  { titleKor: '정상곡선, 표준화, z점수', progress: 50, correctRate: 65 },
  { titleKor: 'z 검증을 통한 가설검증', progress: 40, correctRate: 55 },
  { titleKor: '신뢰구간, 효과크기, 그리고 통계적 검증력', progress: 30, correctRate: 45 },
  { titleKor: '단일표본 T검증과 대응표본 T검증', progress: 20, correctRate: 35 },
  { titleKor: '독립표본 T검증', progress: 90, correctRate: 95 },
  { titleKor: '일원 변량분석', progress: 80, correctRate: 90 },
  { titleKor: '이원 변량분석', progress: 75, correctRate: 85 },
  { titleKor: '상관분석', progress: 65, correctRate: 70 },
  { titleKor: '회귀분석', progress: 55, correctRate: 60 },
  { titleKor: '카이제곱 검증', progress: 45, correctRate: 55 },
];

const styles = {
  pageContainer: {
    backgroundColor: '#b3d9ff',  // 전체 배경
    padding: '2rem 4rem',  // 좌우 여백 추가
  },
  pageTitle: {
    backgroundColor: '#1a8bbb',  // 제목 박스 배경
    fontSize: '2.5rem',
    fontWeight: 'bold',
    textAlign: 'center',
    padding: '1.5rem',
    marginBottom: '2rem',
    borderRadius: '8px',
    color: '#fff',  // 제목 글자 색상 (흰색)
    maxWidth: '960px',  // 제목 너비 조정하여 각 박스와 맞춤
    margin: '0 auto',  // 가운데 정렬
  },
  description: {
    fontSize: '1.2rem',
    textAlign: 'center',
    marginBottom: '3rem',
    color: '#555',
  },
  chapterList: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',  // 한 줄에 3개씩 배치
    gap: '3rem',  // 각 항목 간격을 넓힘
    maxWidth: '960px',  // 각 박스와 제목의 너비를 맞춤
    margin: '0 auto',  // 가운데 정렬
  },
  chapterCard: {
    backgroundColor: '#f0f0f0',  // 연한 회색 배경
    padding: '1.5rem',
    borderRadius: '8px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    textAlign: 'left',
  },
  chapterTitle: {
    display: 'flex',
    alignItems: 'flex-start',  // 번호와 제목의 첫 글자가 같은 열에 맞춰지도록 함
    fontSize: '1.5rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
  },
  chapterNumber: {
    marginRight: '0.5rem',  // 번호와 제목 사이에 간격을 둠
  },
  buttons: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '1rem',
  },
  button: {
    padding: '0.6rem 1rem',  // 버튼 크기 조정하여 텍스트가 한 줄에 들어가게 수정
    fontSize: '1rem',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  videoButton: {
    backgroundColor: '#A8DADC',  // 파스텔 블루
  },
  materialButton: {
    backgroundColor: '#F4A261',  // 파스텔 오렌지
  },
  quizButton: {
    backgroundColor: '#E9C46A',  // 파스텔 옐로우
  },
  progress: {
    marginTop: '1rem',
    textAlign: 'left',
    fontSize: '1rem',
    color: '#555',
  },
};

export default JamoviTutorialPage;
