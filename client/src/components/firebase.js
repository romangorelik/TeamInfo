import firebase from 'firebase'

var config = {
  apiKey: "AIzaSyBQ8_Cdlaj4dCfD_dtgZtcqzFFxMgJCcWo",
  authDomain: "teamstats-6a572.firebaseapp.com",
  databaseURL: "https://teamstats-6a572.firebaseio.com",
  projectId: "teamstats-6a572",
  storageBucket: "",
  messagingSenderId: "493753782460",
  appId: "1:493753782460:web:b614ed2ff709fdf7"
};

firebase.initializeApp(config);

export default firebase