//alert("Welcome to the Contact Us page");
const firebaseConfig = {
  apiKey: "AIzaSyAbXRGUbGzeCW3XPHBrhWBjde7fC1fy4jI",
  authDomain: "testproject-139b2.firebaseapp.com",
  databaseURL: "https://testproject-139b2-default-rtdb.firebaseio.com",
  projectId: "testproject-139b2",
  storageBucket: "testproject-139b2.appspot.com",
  messagingSenderId: "276557844520",
  appId: "1:276557844520:web:6ef2089e5a4b3f085e651d"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Retrieve the database handle
const myDBCxn = firebase.database().ref('/contacts');


// TASK 4: Include firebase config info here ...



// TASK 2: Include code to save the data here ..
// Tell JavaScript to call saveContacts when SUBMIT button is clicked
const btn = document.getElementById("submit-data");
btn.addEventListener("click", saveContacts);

// Submit clicked so post the data to the server
function saveContacts() {
  //alert("SUBMIT clicked!!!");
  
  // read the data from the email field
  const emailField = document.getElementById("email");
  const emailFieldValue = emailField.value;
  //alert(emailFieldValue)

  // code to save the data to Firebase GOES HERE!
  const data = myDBCxn.push();
  data.set( {email: emailFieldValue
            });
  

}



// TASK 5 (step 2): Include code to display the data here ..

