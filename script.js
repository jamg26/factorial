// Function to calculate factorial using a loop
function factorial(n) {
  if (n < 0) return "Factorial is not defined for negative numbers.";
  if (n === 0 || n === 1) return 1;

  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

// Event listener for the button
document
  .getElementById("calculateButton")
  .addEventListener("click", function () {
    const input = document.getElementById("numberInput").value;
    const number = parseInt(input);

    const resultElement = document.getElementById("result");

    if (isNaN(number) || number < 0) {
      resultElement.textContent = "Please enter a valid non-negative integer.";
      return;
    }

    const result = factorial(number);
    resultElement.textContent = `The factorial of ${number} is ${result}.`;
  });
