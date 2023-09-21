// function convertToCelsius() {
//   const celsiusInput = document.getElementById("celsius");
//   const fahrenheitResult = document.getElementById("result");

//   if (celsiusInput.value === "") {
//     fahrenheitResult.textContent = "Please enter a temperature in Celsius";
//     return;
//   }

//   const celsius = parseFloat(celsiusInput.value);
//   const fahrenheit = (celsius * 9) / 5 + 32;
//   fahrenheitResult.textContent = `${celsius} Celsius is ${fahrenheit.toFixed(
//     2
//   )} Fahrenheit`;
// }

// function convertToFahrenheit() {
//   const fahrenheitInput = document.getElementById("fahrenheit");
//   const celsiusResult = document.getElementById("result2");

//   if (fahrenheitInput.value === "") {
//     celsiusResult.textContent = "Please enter a temperature in Fahrenheit";
//     return;
//   }

//   const fahrenheit = parseFloat(fahrenheitInput.value);
//   const celsius = ((fahrenheit - 32) * 5) / 9;
//   celsiusResult.textContent = `${fahrenheit} Fahrenheit is ${celsius.toFixed(
//     2
//   )} Celsius`;
// }

// Function to convert Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

// Function to convert Fahrenheit to Celsius
function fahrenheitToCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}

// Get input elements
const celsiusInput = document.getElementById("celsius");
const fahrenheitInput = document.getElementById("fahrenheit");
const convertButton = document.getElementById("convert-btn");

// Convert and update the Fahrenheit input when the Convert button is clicked
convertButton.addEventListener("click", function () {
  const celsiusValue = parseFloat(celsiusInput.value);
  if (!isNaN(celsiusValue)) {
    const fahrenheitValue = celsiusToFahrenheit(celsiusValue);
    fahrenheitInput.value = fahrenheitValue.toFixed(2);
  } else {
    fahrenheitInput.value = "";
  }
});

// Initial conversion
convertButton.click();
