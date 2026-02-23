const firebaseConfig = {
    apiKey: "AIzaSyAYhSNjH_o3qI9ZL5qFHpY-vS1GUiVV5JI",
    authDomain: "spt-team-teat.firebaseapp.com",
    projectId: "spt-team-teat",
    storageBucket: "spt-team-teat.firebasestorage.app",
    messagingSenderId: "899092858991",
    appId: "1:899092858991:web:1664ca1132f9d8dec3659a"
};
// Initialize Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
const db = firebase.firestore();
const auth = firebase.auth();