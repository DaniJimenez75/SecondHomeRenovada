// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDlcUbdttXusuSRWw42OnA2EPK5rPJVlTI",
    authDomain: "second-home-studio-be3b8.firebaseapp.com",
    databaseURL: "https://second-home-studio-be3b8.firebaseio.com",
    projectId: "second-home-studio-be3b8",
    storageBucket: "second-home-studio-be3b8.appspot.com",
    messagingSenderId: "981645759516",
    appId: "1:981645759516:web:782296eda069fe43483bd9"
  };

  // Initialize Firebase
  var proy=firebase.initializeApp(firebaseConfig);


function enviar(){
    var email=document.getElementById('email').value;
      var pass=document.getElementById('pass').value;
      //alert("email="+email+" pass="+pass);
  
      firebase.auth().createUserWithEmailAndPassword(email, pass)
      .catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorMessage);
  })
  .then(function(){
    verificar();
  });
  }

  function verificar(){
    var user = firebase.auth().currentUser;
    user.sendEmailVerification().then(function() {
      // Email sent.
    }).catch(function(error) {
      // An error happened.
    });

  }

  function acceso(){
    var emailA=document.getElementById('emailA').value;
    var passA=document.getElementById('passA').value;
    emailA.innerHTML="";
    passA.innerHTML="";

    firebase.auth().signInWithEmailAndPassword(emailA, passA)
    .catch(function(error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            alert(errorMessage);
        
    });
}
function observador(){
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          // User is signed in.
          console.log("Existe usuario activo");

          var displayName = user.displayName;
          var email = user.email;
          var emailVerified = user.emailVerified;
          if(emailVerified == false){
            sessionStorage.setItem("emailVerified", emailVerified);

          }
          var photoURL = user.photoURL;
          var isAnonymous = user.isAnonymous;
          var uid = user.uid;
          var providerData = user.providerData;
          // ...
          sessionStorage.setItem("email", email);
          location.href ="inicio.html";
        } else {
          // User is signed out.
          // ...
          console.log("No existe usuario activo");
        }
      });
}

function cerrar(){
    firebase.auth().signOut()
    .then(function(){
        console.log("Salienddo...");
        location.href ="login.html";

    })
    .catch(function(error){
        console.log(error);
    })
}
