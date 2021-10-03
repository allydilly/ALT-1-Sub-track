// contact2-show.js
// retrieve the list of contacts from the database
console.log('Client-side log for showing the contacts in a table');


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
firebase.initializeApp(firebaseConfig);

// retrieve a connection for the database referenced by contacts
let myDBConn = firebase.database().ref('/contacts');

// Tell JavaScript to call tabulateData each time a child is added
myDBConn.on("child_added", tabulateData);


// Listener function ... called when the server returns the data requested
// This function unpacks the data and builds the HTML to display the data on the page
function tabulateData(data, prevChildKey) {
  console.log("tabulateData()!!!");

  // retrieve the reference for the contacts table from its HTML id
  const table = document.getElementById('contacts-table');
  let tableRow = table.insertRow();

  // insert the firstname into the 1st column (index=0)
  let cell0 = tableRow.insertCell(0);
  cell0.innerHTML = data.val().fname;

  // insert the surname into the 2nd column
  let cell1 = tableRow.insertCell(1);
  cell1.innerHTML = data.val().sname;

  // insert the gender into the 3rd column
  let cell2 = tableRow.insertCell(2);
  cell2.innerHTML = data.val().sname;

  // insert the email into the 4th column
  let cell3 = tableRow.insertCell(3);
  cell3.innerHTML = data.val().email;

  // insert the county into the 4th column
  let cell4 = tableRow.insertCell(4);
  cell4.innerHTML = data.val().email;

    // insert the newsletter into the 5th column
  let cell5 = tableRow.insertCell(5);
  cell5.innerHTML = data.val().news;

}
