// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";  // 인증 모듈 추가

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCMixVdxJH14-Fv3b6uZgLGKo3_21gADNQ",
  authDomain: "miniproject-66882.firebaseapp.com",
  projectId: "miniproject-66882",
  storageBucket: "miniproject-66882.appspot.com",
  messagingSenderId: "862409661375",
  appId: "1:862409661375:web:662c1814721ff5f3a8df0a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Firebase 인증 기능을 초기화하고 export
export const auth = getAuth(app);  // 이 부분이 추가된 코드
