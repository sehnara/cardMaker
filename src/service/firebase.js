import firebase from 'firebase';
  
const firebaseConfig = {
apiKey: "AIzaSyAGesZFwW4YXBYrUqkftPyvjnPnupgH69w",
authDomain: "business-cardmaker-9e1ca.firebaseapp.com",
databaseURL : "https://business-cardmaker-9e1ca.firebaseapp.com",
projectId: "business-cardmaker-9e1ca",
storageBucket: "business-cardmaker-9e1ca.appspot.com",
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
export default firebaseApp;