// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB8P-vC2cIrqIPYBqda0u-vVOCAF9mLcxc",
  authDomain: "alt1-test-ceab3.firebaseapp.com",
  databaseURL: "https://alt1-test-ceab3-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "alt1-test-ceab3",
  storageBucket: "alt1-test-ceab3.appspot.com",
  messagingSenderId: "120760284874",
  appId: "1:120760284874:web:6b7b33fd83db512d916633",
  measurementId: "G-VVXRRX1566"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// Toggle between login and signup forms
function toggleForms() {
  document.getElementById("login-form").classList.toggle("hidden");
  document.getElementById("signup-form").classList.toggle("hidden");
}

// Sign Up function
function signup() {
  const email = document.getElementById('signup-email').value;
  const password = document.getElementById('signup-password').value;

  auth.createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      alert('User signed up successfully!');
    })
    .catch((error) => {
      alert(error.message);
    });
}

// Log In function
function login() {
  const email = document.getElementById('login-email').value;
  const password = document.getElementById('login-password').value;

  auth.signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      alert('User logged in successfully!');
    })
    .catch((error) => {
      alert(error.message);
    });
}
