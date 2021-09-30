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


var myDBConn = firebase.database().ref('/contacts');


// client-side js
// run by the browser each time your view template referencing it is loaded
console.log('Contacts log');

// retrieve the data from the database and display it
// getData();
//const btn = document.getElementById("submit-data");
//btn.addEventListener("click", submitData);


// Submit clicked so post the data to the server
function saveContacts() {
  // stop our form submission from refreshing the page
  console.log("SUBMIT clicked!!!");
  
  // define variables that reference elements on our page
  //const rowList = document.getElementById('rows');
  const emailField = document.getElementById("email");
  const emailFieldValue = document.getElementById("email").value;
  console.log(emailFieldValue);
  
  // reset form 
  emailField.value = ''; // clear the field
  emailField.focus();
  
  // package up the data to post to the server
  // JUST USE THESE LINES AS THEY ARE - NO NEED TO CHANGE
  var data = myDBConn.push();
  data.set({email: firstNameFieldValue
            }
          );

  console.log("Contacts SAVED!!!");
}