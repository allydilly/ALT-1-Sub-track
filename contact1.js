console.log('Contacts log');

const firebaseConfig = {
  apiKey: "AIzaSyDm658kpc77IYcNGtOw5iMyNPZEK8zQ15Q",
  authDomain: "nw5-test-aa08c.firebaseapp.com",
  databaseURL: "https://nw5-test-aa08c-default-rtdb.firebaseio.com",
  projectId: "nw5-test-aa08c",
  storageBucket: "nw5-test-aa08c.appspot.com",
  messagingSenderId: "250665852303",
  appId: "1:250665852303:web:9d9dad8e6e6fc9cb7c7ffa"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Retrieve the database handle
const myDBCxn = firebase.database().ref('/contacts');

myDBCxn.on("child_added", displayData);


//alert("Welcome to the Contact Us page");

// Tell JavaScript to call saveContacts when SUBMIT button is clicked
const btn = document.getElementById("submit-data");
btn.addEventListener("click", saveContacts);

// Submit clicked so post the data to the server
function saveContacts() {
  
  //alert("SUBMIT has just been clicked!!!");
  
  // read the data from the email field
  const emailField = document.getElementById("email");
  const emailFieldValue = emailField.value;
  alert(emailFieldValue)
  
  // reset form 
  emailField.value = ''; // clear the field
  emailField.focus(); // set the focus

  // code to save the data to Firebase GOES HERE!
  const data = myDBCxn.push();
  data.set( {email: emailFieldValue
            });


}


function displayData(data, prevChildKey) {
    const datapoint = data.val();
    document.getElementById("qqqq").value += datapoint.email + "\n";
}




