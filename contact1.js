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
// Initialize Firebase 
firebase.initializeApp(firebaseConfig); 

 

// Retrieve the database handle 

const myDBCxn = firebase.database().ref('/contacts'); 



// Task 2D - Tell JavaScript to call saveContacts when SUBMIT button is clicked
const btn = document.getElementById("submit-data"); 

btn.addEventListener("click", saveContacts); 

 function saveContacts() { 

  //alert("SUBMIT clicked!!!"); 

   

  // read the data from the email field 

  const emailField = document.getElementById("email"); 

  const emailFieldValue = emailField.value; 

  alert(emailFieldValue) 

 

  // reset form  

  emailField.value = ''; // clear the field 

  emailField.focus(); // set the focus 

 

  // TASK 4D 

  // code to save the data to Firebase GOES HERE! 

  const data = myDBCxn.push(); 

  data.set( {email: emailFieldValue 

            }); 

 

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

    const newListItem = document.createElement('li'); 

    newListItem.innerHTML = datapoint.email; 

  

    // append the above list item to the ordered list identified by rows 

    const rowList = document.getElementById('rows'); 

    rowList.appendChild(newListItem);   

 

}