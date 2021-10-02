console.log('Contacts log');

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
myDBConn.on("child_added", displayData);


// Tell JavaScript to call saveDetails when SUBMIT button is clicked
const btn = document.getElementById("submit-data");
btn.addEventListener("click", saveContacts);

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
  data.set({email: emailFieldValue
            }
          );

  
  //displayRow(emailFieldValue);
  
  console.log("Contacts SAVED!!!");
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

function insertData2(data, prevChildKey) {
    var datapoint = data.val();
    document.getElementById("results").value += datapoint.fname + "\t\t\t"+ datapoint.sname + "\n";
}