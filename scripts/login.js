document.querySelector("form").addEventListener("submit", login);
var userstack = JSON.parse(localStorage.getItem("userDataBase"));

// console.log(userstack);
function login(event) {
  event.preventDefault();
  //    console.log("login");
  var email = document.querySelector("#main").value;
  var password = document.querySelector("#pass").value;

  // console.log(email,password);
  var match = false;
  for (var i = 0; i < userstack.length; i++) {
    if (userstack[i].emailId === email && userstack[i].passwd === password) {
      match = true;
    }
  }
  if (match) {
    alert("login success");
    window.location.href = "index.html";
  } else {
    alert("invalid Credentials");
  }
}
