console.log('Contacts log');

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



}




