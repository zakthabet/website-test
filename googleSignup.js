import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js';
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';
import { getAuth, getRedirectResult, signInWithRedirect, GoogleAuthProvider} from "https://www.gstatic.com/firebasejs/10.10.0/firebase-auth.js";



// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyDrVMDCxDvLU3mzcN6NBdw1TAmCJoCkVLY",
  authDomain: "login-auth-723bd.firebaseapp.com",
  projectId: "login-auth-723bd",
  storageBucket: "login-auth-723bd.appspot.com",
  messagingSenderId: "741178770770",
  appId: "1:741178770770:web:11d33eeb7fb9c11367e68b",
  measurementId: "G-ZNMPN3FJ7Y"
};
  
//Initialized the app
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider(app);

//called the googlesignupFunc
const googleSignUpFunc = document.getElementById('googleSignupBtn');


//added an onclick listner
googleSignUpFunc.addEventListener("click", function(event){
  signInWithRedirect(auth, provider);

  getRedirectResult(auth)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access Google APIs.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;

    // The signed-in user info.
    const user = result.user;
    // IdP data available using getAdditionalUserInfo(result)
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  })
})