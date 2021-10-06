//alert("Welcome to the Contact Us page");


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
  alert(emailFieldValue)

  

}



// TASK 5 (step 2): Include code to display the data here ..

