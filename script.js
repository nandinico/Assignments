document.getElementById("submit").addEventListener("click", function (event) {
   event.preventDefault();

   checkData();
});

var username = document.getElementById("username");
var email = document.getElementById("email");
var pass = document.getElementById("pass");

   function checkData() {
   var usernameValue = username.value.trim();
   var emailValue = email.value.trim();
   var passValue = pass.value.trim();

   var isValid = true; 

   if (usernameValue === "") {
       setError(username, "Username can't be blank");
       isValid = false;
   } else {
       setSuccess(username);
   }

   if (emailValue === "") {
       setError(email, "Email can't be blank");
       isValid = false;
   } else if (!isEmail(emailValue)) {
       setError(email, "Email is not valid");
       isValid = false;
   } else {
       setSuccess(email);
   }

   if (passValue === "") {
       setError(pass, "Password can't be blank");
       isValid = false;
   } else {
       setSuccess(pass);
   }

   if (isValid) {
       alert('Form submitted successfully!');
       document.getElementById("input-field").reset();
   }
}

function setError(u, msg) {
   var parentBox = u.parentElement;
   parentBox.className = "input-field error";
   var span = parentBox.querySelector("span");
   var fa = parentBox.querySelector(".fa");
   span.innerText = msg;
   fa.className = "fa fa-exclamation-circle";
}

function setSuccess(u) {
   var parentBox = u.parentElement;
   parentBox.className = "input-field success";
   var fa = parentBox.querySelector(".fa");
   fa.className = "fa fa-check-circle";
}

function isEmail(e) {
   var reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   return reg.test(e);
}
