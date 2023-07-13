document.addEventListener("DOMContentLoaded", function () {
  const controllerInput = document.getElementById("controllerNumber");

  // Retrieve the controller number from local storage
  const controllerNumber = localStorage.getItem("controllerNumber");

  // Populate the input field with the controller number
  if (controllerInput && controllerNumber) {
    controllerInput.value = controllerNumber;
  } else {
    console.log("Controller number not found in local storage");
  }

  const unitsInput = document.getElementById("units-input");
  const priceEquivalenceInput = document.getElementById("price-equivalence");
  const housingDistrictInput = document.getElementById("housingDistrict");

  unitsInput.addEventListener("input", function () {
    const units = parseInt(unitsInput.value);
    const priceEquivalence = calculatePriceEquivalence(units);

    if (!isNaN(priceEquivalence)) {
      priceEquivalenceInput.value = `₦ ${priceEquivalence.toFixed(2)}`;
    } else {
      priceEquivalenceInput.value = "";
    }

    // Update the selected units and total amount
    // const selectedPlant = housingDistrictInput.value;
    // const selectedUnits = `${units} Kw`;
    // const totalAmount = `₦ ${priceEquivalence.toFixed(2)}`;

    // document.getElementById("selectedPlant").textContent = selectedPlant;
    // document.getElementById("selectedUnits").textContent = selectedUnits;
    // document.getElementById("totalAmount").textContent = totalAmount;
  });

  function calculatePriceEquivalence(units) {
    // Perform your calculation to determine the price equivalence based on the units entered
    // Replace the following line with your actual calculation logic
    const pricePerUnit = 500; // Assuming the price per unit is ₦500
    return units * pricePerUnit;
  }

  const email = document.getElementById("email").value;
  const units = document.getElementById("units-input").value;
  const housingDistrict = document.getElementById("housingDistrict").value;
  const priceEquivalence = document.getElementById("price-equivalence");
  const paymentReference = document.getElementById("payment-reference");

  // controllerNumber = controllerInput.value;
});

const token = localStorage.getItem("token");
// const email = localStorage.getItem("email");
const continueBtn = document.getElementById("continue-Btn");
continueBtn.addEventListener("click", (event) => {
  const formData = {
    email: email,
    controllerNumber: controllerNumber,
    units: units,
    housingDistrict: housingDistrict,
    priceEquivalence: priceEquivalence,
    paymentReference: paymentReference,
  };
  fetch("http://192.168.52.35:8080/transaction", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(formData),
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Request failed");
      }
    })
    .then((data) => {
      // Handle the response from the backend
      console.log(data);
      window.location.assign("index.html");
    })
    .catch((error) => {
      // Handle any errors that occurred during the request
      console.error(error);
    });
});
