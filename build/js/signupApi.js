let registerButton = document.getElementById("register-btn");
let baseUrl = "http://192.168.52.35:8080/register-customer";
const signupArea = document.getElementById("signup");
const errorArea = document.getElementById("errorSign");

registerButton.addEventListener("click", function (event) {
  event.preventDefault();

  let fullNameInput = document.getElementById("full-name").value;
  let emailInput = document.getElementById("email").value;
  let telNumberInput = document.getElementById("tel-number").value;
  let passwordInput = document.getElementById("password").value;
  let confirmPasswordInput = document.getElementById("confirm-password").value;
  let username = document.getElementById("username").value;

  var data = {
    fullName: fullNameInput,
    email: emailInput,
    phoneNumber: telNumberInput,
    password: passwordInput,
    username: username,
    confirmPassword: confirmPasswordInput,
  };

  fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "Application/json",
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify(data),
  })
    .then(function (response) {
      if (response.ok) {
        console.log("Registration successful!");
        signupArea.classList.remove("hidden");
        window.location.assign("login.html");
      } else {
        console.log("Failed");
        console.log("Registration failed.");
        errorArea.classList.remove("hidden");
        window.location.assign("signup.html");
        // window.location.href = "build/signup.html";
      }
    })
    .catch(function (error) {
      console.log("Error:", error);
    });
});
