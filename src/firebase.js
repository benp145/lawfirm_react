import { initializeApp } from "firebase/app";
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDF2D1gcwyk4az6nPISdY02iMd7AFnQcWs",
    authDomain: "lawfirm-1c598.firebaseapp.com",
    projectId: "lawfirm-1c598",
    storageBucket: "lawfirm-1c598.appspot.com",
    messagingSenderId: "1047445384558",
    appId: "1:1047445384558:web:d4673d7a66d87fdec6e57f"
};
  
const firebase = initializeApp(firebaseConfig)

export default firebase;