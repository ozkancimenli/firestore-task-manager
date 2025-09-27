// firebaseConfig.ts
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyD8qq6Eu1Z3ahfD06lcsjuOoxWezYEIDt8",
  authDomain: "task-manager-a0cc1.firebaseapp.com",
  projectId: "task-manager-a0cc1",
  storageBucket: "task-manager-a0cc1.firebasestorage.app",
  messagingSenderId: "296075324831",
  appId: "1:296075324831:web:63404051429a21e05521aa"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };