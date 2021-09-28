import { firebase } from 'firebase'
const app = firebase({
    apiKey: "AIzaSyDQQxOtIrZpt5VfbCU_uwlTm_XrLnug8xE",
    authDomain: "catalago-filmes-736a6.firebaseapp.com",
    projectId: "catalago-filmes-736a6",
    storageBucket: "catalago-filmes-736a6.appspot.com",
    messagingSenderId: "518753281760",
    appId: "1:518753281760:web:cd5663f6fa0791eb95d285",
    measurementId: "G-6HHWJS6RBH"
})

export const db = app.database()