
// alert("Welcome to the Contact Us page");

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA3uzOEiSmHmSZ96xd2pDMDttMxuHezGBI",
  authDomain: "contacts-database-b26e4.firebaseapp.com",
  databaseURL: "https://contacts-database-b26e4-default-rtdb.firebaseio.com",
  projectId: "contacts-database-b26e4",
  storageBucket: "contacts-database-b26e4.appspot.com",
  messagingSenderId: "717772121564",
  appId: "1:717772121564:web:e4400e0dadf40a5b8f9b19",
  measurementId: "G-NE88YCNMGR"
};


// TASK 4C



// Task 2D - Tell JavaScript to call saveContacts when SUBMIT button is clicked
const btn = document.getElementById("submit-data"); 

btn.addEventListener("click", saveContacts); 

 

// Submit clicked so post the data to the server 


  
  
  
  
  
  
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyA3uzOEiSmHmSZ96xd2pDMDttMxuHezGBI",
    authDomain: "contacts-database-b26e4.firebaseapp.com",
    databaseURL: "https://contacts-database-b26e4-default-rtdb.firebaseio.com",
    projectId: "contacts-database-b26e4",
    storageBucket: "contacts-database-b26e4.appspot.com",
    messagingSenderId: "717772121564",
    appId: "1:717772121564:web:e4400e0dadf40a5b8f9b19",
    measurementId: "G-NE88YCNMGR"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>
  const emailFieldValue = emailField.value; 

  alert(emailFieldValue) 
  
  emailField.value = ''; // clear the field 

  emailField.focus(); // set the focus 
  
} 


// Task 5B - Code to retrieve and display the data goes here ...



// Task 5C - Code to retrieve and display the data in a list goes here ...