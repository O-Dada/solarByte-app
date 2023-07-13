let eyeIcon = document.getElementById("eye-icon");
let eyeIcon2 = document.getElementById("eye-icon2");
let passwordInput = document.getElementById("password");
let seer = document.getElementById("seer");
const loginBtn = document.getElementById("login");
const errorOk = document.getElementById("errorOk");
const confirmPasswordInput = document.getElementById("confirm-password");

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("form");
  const fullNameInput = document.getElementById("full-name");
  const emailInput = document.getElementById("email");
  const telNumberInput = document.getElementById("tel-number");
  const passwordInput = document.getElementById("password");
  const regBtn = document.getElementById("register-btn");
  const confirmPasswordInput = document.getElementById("confirm-password");

  eyeIcon.onclick = function () {
    if (passwordInput.type == "password") {
      passwordInput.type = "text";
      eyeIcon.classList.replace = ("fa-eye", "fa-eye-slash");
    } else {
      passwordInput.type = "password";
    }
  };

  eyeIcon2.onclick = function () {
    if (confirmPasswordInput.type == "password") {
      confirmPasswordInput.type = "text";
      eyeIcon.classList.replace = ("fa-eye", "fa-eye-slash");
    } else {
      confirmPasswordInput.type = "password";
    }
  };

  // let x = false;
  form.addEventListener("change", colorer);

  function colorer() {
    if (validateInputs()) {
      regBtn.removeAttribute("disabled");
    } else {
      regBtn.setAttribute("disabled", "disabled");
    }
  }

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    if (validateInputs()) {
      // Form is valid, proceed with submission or other actions
      regBtn.setAttribute("disabled", false);
      form.submit();
    }
  });

  fullNameInput.addEventListener("input", function () {
    validateFullName();
  });

  emailInput.addEventListener("input", function () {
    validateEmail();
  });

  telNumberInput.addEventListener("input", function () {
    validateTelNumber();
  });

  passwordInput.addEventListener("input", function () {
    validatePassword();
  });

  confirmPasswordInput.addEventListener("input", function () {
    validateConfirmPassword();
  });

  function validateInputs() {
    let isValid = true;

    isValid &= validateFullName();
    isValid &= validateEmail();
    isValid &= validateTelNumber();
    isValid &= validatePassword();
    isValid &= validateConfirmPassword();

    return isValid;
  }

  function validateFullName() {
    const value = fullNameInput.value.trim();
    if (value === "") {
      setError(fullNameInput, "Full Name is required");
      return false;
    } else {
      removeError(fullNameInput);
      return true;
    }
  }

  function validateEmail() {
    const value = emailInput.value.trim();
    if (value === "") {
      setError(emailInput, "Email Address is required");
      return false;
    } else if (!isValidEmail(value)) {
      setError(emailInput, "Invalid Email Address");
      return false;
    } else {
      removeError(emailInput);
      return true;
    }
  }

  function validateTelNumber() {
    const value = telNumberInput.value.trim();
    if (value === "") {
      setError(telNumberInput, "Phone Number is required");
      return false;
    } else if (!isValidPhoneNumber(value)) {
      setError(telNumberInput, "Invalid Phone Number");
      return false;
    } else {
      removeError(telNumberInput);
      return true;
    }
  }

  function validatePassword() {
    const value = passwordInput.value.trim();
    if (value === "") {
      setError(passwordInput, "Password is required");
      return false;
    } else {
      removeError(passwordInput);
      return true;
    }
  }

  function validateConfirmPassword() {
    const value = confirmPasswordInput.value.trim();
    if (value === "") {
      setError(confirmPasswordInput, "Confirm Password is required");
      return false;
    } else if (value !== passwordInput.value.trim()) {
      setError(confirmPasswordInput, "Passwords do not match");
      return false;
    } else {
      removeError(confirmPasswordInput);
      return true;
    }
  }

  function setError(input, errorMessage) {
    const errorDiv = input.nextElementSibling;
    input.classList.add("border-blue-500");
    errorDiv.textContent = errorMessage;
  }

  function removeError(input) {
    const errorDiv = input.nextElementSibling;
    input.classList.remove("border-red-500");
    errorDiv.textContent = "";
  }

  function isValidEmail(email) {
    // Regular expression for email validation
    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    return emailRegex.test(email);
  }

  function isValidPhoneNumber(phoneNumber) {
    // Regular expression for phone number validation (10 digits)
    const phoneNumberRegex = /^\d{11}$/;
    return phoneNumberRegex.test(phoneNumber);
  }
});

loginBtn.addEventListener("click", function link() {
  window.location.assign("login.html");
});

errorOk.addEventListener("click", function link() {
  window.location.assign("signup.html");
});

// const errorOk = document.getElementById("errorOk");
