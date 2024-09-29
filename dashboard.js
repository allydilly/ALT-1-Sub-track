// Firebase configuration (Ensure you replace with your Firebase config)
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB8P-vC2cIrqIPYBqda0u-vVOCAF9mLcxc",
  authDomain: "alt1-test-ceab3.firebaseapp.com",
  databaseURL: "https://alt1-test-ceab3-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "alt1-test-ceab3",
  storageBucket: "alt1-test-ceab3.appspot.com",
  messagingSenderId: "120760284874",
  appId: "1:120760284874:web:6b7b33fd83db512d916633",
  measurementId: "G-VVXRRX1566"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

// Get current logged-in user
auth.onAuthStateChanged((user) => {
  if (user) {
    console.log("User logged in: ", user.uid);
    loadSubscriptions(user.uid);  // Load user subscriptions from Firebase
  } else {
    window.location.href = "index.html";  // Redirect to login if not authenticated
  }
});

// Add a new subscription
function addSubscription() {
  const name = document.getElementById('subscription-name').value;
  const cost = parseFloat(document.getElementById('subscription-cost').value);
  const period = document.getElementById('subscription-period').value;

  if (name === "" || isNaN(cost)) {
    alert("Please enter valid subscription details");
    return;
  }

  // Convert cost to weekly value
  let weeklyCost;
  if (period === 'monthly') {
    weeklyCost = (cost / 4).toFixed(2); // Roughly 4 weeks in a month
  } else if (period === 'yearly') {
    weeklyCost = (cost / 52).toFixed(2); // 52 weeks in a year
  }

  const user = firebase.auth().currentUser;
  if (user) {
    const subscription = {
      name: name,
      cost: cost,
      period: period,
      weeklyCost: weeklyCost
    };

    // Save subscription to Firestore
    db.collection('subscriptions').doc(user.uid).collection('userSubscriptions')
      .add(subscription)
      .then(() => {
        alert("Subscription added!");
        displaySubscription(subscription);  // Update the UI
      })
      .catch((error) => {
        console.error("Error adding subscription: ", error);
      });
  }
}

// Load subscriptions from Firebase for the current user
function loadSubscriptions(uid) {
  const subscriptionList = document.getElementById('subscription-list');
  subscriptionList.innerHTML = "";  // Clear current list

  db.collection('subscriptions').doc(uid).collection('userSubscriptions')
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        const subscription = doc.data();
        displaySubscription(subscription);
      });
    })
    .catch((error) => {
      console.error("Error loading subscriptions: ", error);
    });
}

// Display subscription in the list
function displaySubscription(subscription) {
  const subscriptionList = document.getElementById('subscription-list');
  const listItem = document.createElement('li');

  listItem.innerHTML = `
    ${subscription.name} - $${subscription.weeklyCost}/week
    <span>(Original: $${subscription.cost} per ${subscription.period})</span>
  `;

  subscriptionList.appendChild(listItem);
}
