// client-side js
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
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


var myDBConn = firebase.database().ref('/contacts');
myDBConn.on("child_added", tabulateData);


// define variables that reference elements on our page
const table = document.getElementById('contacts-table');


// Listener function ... called when the server returns the data requested
// This function unpacks the data and builds the HTML to display the data on the page
function tabulateData(data, prevChildKey) {
  console.log("tabulateData()!!!");
  //console.log(this.responseText);
  
  //rowList.innerHTML = ''; // clear all the list items
  
  // parse our response to convert to JSON
  //let members = JSON.parse(this.responseText);

  //let index = 0;
  // iterate through every row and add it to our page
  //members.forEach( function(row) {
    
    let tableRow = table.insertRow();

    let cell0 = tableRow.insertCell(0);
      var datapoint = data.val();
    cell0.innerHTML = datapoint.email;

//   }); 
}

function displayData(data, prevChildKey) {

    var datapoint = data.val();
  
    const newListItem = document.createElement('li');
    newListItem.innerHTML = datapoint.email;
    
    // the next line prevents the page from being refreshed
    //event.preventDefault();   

    const rowList = document.getElementById('rows');
    rowList.appendChild(newListItem);  
  
  
    //document.getElementById("results").value += datapoint.fname + "\t\t\t"+ datapoint.sname + "\n";
}
