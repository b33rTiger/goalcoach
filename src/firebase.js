import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyBaKXu9pjG0EVa2MERGn6SHV_rin_ZV9DQ",
  authDomain: "goalcoach-727ed.firebaseapp.com",
  databaseURL: "https://goalcoach-727ed.firebaseio.com",
  projectId: "goalcoach-727ed",
  storageBucket: "",
  messagingSenderId: "796723835247"
};

export const firebaseApp = firebase.initializeApp(config);
export const goalRef = firebase.database().ref('goals');
export const completeGoalRef = firebase.database().ref('completeGoals');
