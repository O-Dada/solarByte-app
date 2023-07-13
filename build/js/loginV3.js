document.addEventListener("DOMContentLoaded", function () {
  const loginBtn = document.getElementById("login-btn");

  loginBtn.addEventListener("click", (event) => {
    event.preventDefault(); // Prevents the form from submitting normally

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Create an object with the form data
    const formData = {
      username: email,
      password: password,
    };

    fetch("http://192.168.52.35:8080/sign-in", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Login failed");
        }
      })
      .then((data) => {
        const { token, controllerNumber } = data;

        // Store the token and controller number in local storage
        localStorage.setItem("token", token);
        localStorage.setItem("email", email);
        localStorage.setItem("controllerNumber", controllerNumber);

        // Redirect to the authenticated section of your application or perform other necessary actions
        window.location.assign("purchase.html");
      })
      .catch((error) => {
        // Handle any errors that occurred during the request
        console.error(error);
        console.log("Error occurred. Please try again");
      });
  });
});
