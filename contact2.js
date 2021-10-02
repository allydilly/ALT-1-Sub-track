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


// Tell JavaScript to call saveContacts when SUBMIT button is clicked
const btn = document.getElementById("submit-data");
btn.addEventListener("click", saveContacts);



// Submit clicked so post the data to the server
function saveContacts() {
  // stop our form submission from refreshing the page
  console.log("SUBMIT clicked!!!");
  
  // define variables that reference elements on our page
  //const rowList = document.getElementById('rows');
  const firstNameField = document.getElementById("firstname");
  const firstNameFieldValue = document.getElementById("firstname").value;
  const surNameFieldValue = document.getElementById("surname").value;
  const emailFieldValue = document.getElementById("email").value;
  
  const newsField = document.getElementById("news");
  let newsFieldValue = 0;
  if (newsField.checked)
    newsFieldValue = 1;
  
  const countyFieldValue = document.getElementById("county").value;

  const genderFields = document.getElementsByName('gender'); 
  let genderFieldValue = "Male"
  // could use selectedIndex property instead of loop
  for(let i = 0; i < genderFields.length; i++) { 
      if(genderFields[i].checked) 
        genderFieldValue = genderFields[i].value; 
  }

  
  //console.log(newsFieldValue);
  //console.log(countyField.value);  
  //console.log(genderFieldValue);
  console.log(firstNameFieldValue);
  
  // create an object to post to the server
  // ONE NAME - VALUE PAIR FOR EACH FIELD
  let dataObj = {fname: firstNameFieldValue,
 //                sname: surNameField.value,
  //               email: emailField.value,
    //             news: newsFieldValue,
      //           county: countyField.value
//                 gender: genderFieldValue
                };

  // reset form 
  firstNameField.value = ''; // clear the first name field
  //surNameField.value = ''; // clear the surname field
  //emailField.value = ''; // clear the surname field
  //newsField.checked = false;
  //countyField.value = ''; // clear the county field
//  document.getElementById("Male").checked = true;
  firstNameField.focus();
  
  // package up the data to post to the server
  // JUST USE THESE LINES AS THEY ARE - NO NEED TO CHANGE
  var data = myDBConn.push();
  data.set({fname: firstNameFieldValue,
                   sname: surNameFieldValue,
                   email: emailFieldValue,
                   news: newsFieldValue,
                   county: countyFieldValue,
                   gender: genderFieldValue
            }
          );

  console.log("Contacts SAVED!!!");
}

/*

// Demo code to dynamically add some counties to the dropdown list
let newOption = document.createElement("OPTION");
newOption.setAttribute("value", "Kildare");
let textNode = document.createTextNode("Kildare");
newOption.appendChild(textNode);
document.getElementById("county").appendChild(newOption);

// It would be a nice exercise populate the dropydown from a separate counties table
*/