const firebaseConfig = {
  apiKey: "AIzaSyDePtfAKouNDGoNY27_mIfSG096hRJ9U1U",
  authDomain: "adrix-1.firebaseapp.com",
  projectId: "adrix-1",
  storageBucket: "adrix-1.firebasestorage.app",
  messagingSenderId: "633957470456",
  appId: "1:633957470456:web:0865dfe89f5e9f6df2ab0d"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Export auth reference (optional, helpful later)
const auth = firebase.auth();
