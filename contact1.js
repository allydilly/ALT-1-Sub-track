
// alert("Welcome to the Contact Us page");

// TASK 4B – Copy your web app's Firebase configuration here ...


// TASK 4C



// Task 2D - Tell JavaScript to call saveContacts when SUBMIT button is clicked
const btn = document.getElementById("submit-data"); 

btn.addEventListener("click", saveContacts); 

 

// Submit clicked so post the data to the server 

function saveContacts() { 

 // alert("SUBMIT clicked!!!"); 
  const emailField = document.getElementById("email"); 

  const emailFieldValue = emailField.value; 

  alert(emailFieldValue) 
  
  emailField.value = ''; // clear the field 

  emailField.focus(); // set the focus 
  
} 


// Task 5B - Code to retrieve and display the data goes here ...



// Task 5C - Code to retrieve and display the data in a list goes here ...