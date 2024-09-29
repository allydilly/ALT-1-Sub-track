// alert("Welcome to the Contact Us page");

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyB8P-vC2cIrqIPYBqda0u-vVOCAF9mLcxc",
    authDomain: "alt1-test-ceab3.firebaseapp.com",
    projectId: "alt1-test-ceab3",
    storageBucket: "alt1-test-ceab3.appspot.com",
    messagingSenderId: "120760284874",
    appId: "1:120760284874:web:6b7b33fd83db512d916633",
    measurementId: "G-VVXRRX1566"
  };

// TASK 4C
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Retrieve the database handle

const myDBCxn = firebase.database().ref("/contacts");

// Task 2D - Tell JavaScript to call saveContacts when SUBMIT button is clicked
const btn = document.getElementById("submit-data");

btn.addEventListener("click", saveContacts);

function saveContacts() {
  //alert("SUBMIT clicked!!!");

  // read the data from the email field

  const emailField = document.getElementById("email");

  const emailFieldValue = emailField.value;

  alert(emailFieldValue);

  // reset form

  emailField.value = ""; // clear the field

  emailField.focus(); // set the focus

  // TASK 4D

  // code to save the data to Firebase GOES HERE!

  const data = myDBCxn.push();

  data.set({ email: emailFieldValue });
} // end saveContacts

// Submit clicked so post the data to the server

// Task 5B - Code to retrieve and display the data goes here ...

myDBCxn.on("child_added", displayData);

function displayData(data, prevChildKey) {
  const datapoint = data.val();

  document.getElementById("contacts").value += datapoint.email + "\n";
}

// Task 5C - Code to retrieve and display the data in a list goes here ...

myDBCxn.on("child_added", displayDataAsList);

// A handler to display the Firebase data as a list

function displayDataAsList(data, prevChildKey) {
  const datapoint = data.val();

  // create a new list item element and set its value to the email address

  const newListItem = document.createElement("li");

  newListItem.innerHTML = datapoint.email;

  // append the above list item to the ordered list identified by rows

  const rowList = document.getElementById("rows");

  rowList.appendChild(newListItem);
}
