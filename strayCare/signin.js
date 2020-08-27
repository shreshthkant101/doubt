var provider = new firebase.auth.GoogleAuthProvider();
firebase.auth().useDeviceLanguage();
var user;
firebase.auth().signInWithPopup(provider).then(function(result) {
    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = result.credential.accessToken;
    // The signed-in user info.
    user = result.user;


    document.getElementById('idp').style.display = "inline-block";
    document.getElementById('name').innerHTML = user.displayName.toUpperCase();
    document.getElementById('uid').innerHTML = user.email;
    document.getElementById('pw').style.display = "none";
    yes();
    // ...
}).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;

    console.log(errorCode);
    console.log(errorMessage);

    if (errorCode == "auth/user-disabled") {
        alert("Your account has been disabled by the administrator. Mail at shreshthkant101@gmail.com for more information.");
    }
    // ...
    document.getElementById('don').innerHTML = "Not Signed in";
    document.getElementById('don').style.color = "red";
    document.getElementById('pw').style.display = "none";
    no();
});