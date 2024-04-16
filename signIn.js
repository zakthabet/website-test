
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";
//Import the api for the authentication
import { getAuth, signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/10.10.0/firebase-auth.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
apiKey: "AIzaSyDrVMDCxDvLU3mzcN6NBdw1TAmCJoCkVLY",
authDomain: "login-auth-723bd.firebaseapp.com",
projectId: "login-auth-723bd",
storageBucket: "login-auth-723bd.appspot.com",
messagingSenderId: "741178770770",
appId: "1:741178770770:web:11d33eeb7fb9c11367e68b",
measurementId: "G-ZNMPN3FJ7Y"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Check if a user is signed in
const user = auth.currentUser;
if (user) {
  // User is signed in
  const userId = user.uid;
  console.log("Current user ID:", userId);
} else {
  // No user is signed in
  console.log("No user signed in.");
}

//grab the sign up button 
const signInFunc = document.getElementById('loginBtn');

//Function used to sign up and store to firebase autication
signInFunc.addEventListener("click", function(event){
    event.preventDefault()
    
    //get variables
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      window.location.href = "home.html";
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage)
    });
})