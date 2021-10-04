console.log('Contacts log');




// Tell JavaScript to call saveContacts when SUBMIT button is clicked
const btn = document.getElementById("submit-data");
btn.addEventListener("click", saveContacts);

// Submit clicked so post the data to the server
function saveContacts() {
  // stop our form submission from refreshing the page
  console.log("SUBMIT clicked!!!");
  
  // define variables that reference elements on our page
  //const rowList = document.getElementById('rows');
  const emailField = document.getElementById("email");
  const emailFieldValue = emailField.value;
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

}

function insertData2(data, prevChildKey) {
    var datapoint = data.val();
    document.getElementById("results").value += datapoint.fname + "\t\t\t"+ datapoint.sname + "\n";
}