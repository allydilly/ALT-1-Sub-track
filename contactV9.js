console.log('Contact V9 log');

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC-NkVmpZwqRtQAo4U0z2-yrd8YnA3CcvQ",
  authDomain: "pdst-nw5-demo-project.firebaseapp.com",
  databaseURL: "https://pdst-nw5-demo-project-default-rtdb.firebaseio.com",
  projectId: "pdst-nw5-demo-project",
  storageBucket: "pdst-nw5-demo-project.appspot.com",
  messagingSenderId: "112871842032",
  appId: "1:112871842032:web:7c6db5b0e774a0c1e5e235"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


    import {
      getDatabase,
      ref,
      set,
      child,
      push,
      update
    } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-database.js";


// retrieve the data from the database and display it
// getData();
const btn = document.getElementById("submit-data");
btn.addEventListener("click", saveContacts9);
console.log('Contact V9 log hello hello hello?');

// Submit clicked so post the data to the server
function saveContacts9() {
  // stop our form submission from refreshing the page
  console.log("SUBMIT V9 clicked!!!");
  
  // define variables that reference elements on our page
  //const rowList = document.getElementById('rows');
  const emailField = document.getElementById("email");
  const emailFieldValue = document.getElementById("email").value;
  console.log(emailFieldValue);
  
  // reset form 
  emailField.value = ''; // clear the field
  emailField.focus();
  
  // package up the data to post to the server
  const dataObj = {email: emailFieldValue
                };
  
  
  // JUST USE THESE LINES AS THEY ARE - NO NEED TO CHANGE
  const dbCxn = getDatabase();
  const newPostKey = push(child(ref(dbCxn), "posts")).key;
  
  const updates = {};
  
  //Set up path to write
  updates["/contacts" + newPostKey] = dataObj;
  return update(ref(dbCxn), updates);

  
  //  var data = dbCxn.push();
  //  data.set( {email: emailFieldValue} );

  console.log("Contacts SAVED!!!");
}



        /*
        const dataIn = {
          patientName: nameIn,
          patientDOB: dobIn
        };        
        // JE
        
          const db = getDatabase();
          set(ref(db), null);
        */
        
/*        
        //Set up data to write
        const dataIn = {
          patientName: nameIn,
          patientDOB: dobIn
        };
        const newPostKey = push(child(ref(db), "posts")).key;
        const updates = {};
        //Set up path to write
        updates["/station0/customerInfo/" + newPostKey] = dataIn;
        return update(ref(db), updates);
        
*/