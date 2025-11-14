function analyzeArray() {
  let input = document.getElementById("numArray").value;
  let result = document.getElementById("result");

  if (input.trim() === "") {
    result.innerHTML = "⚠️ Please enter some numbers.";
    result.style.color = "red";
    return;
  }

  // Convert input string into an array of numbers
  let numbers = input.split(",").map(num => parseFloat(num.trim()));

  // Remove any invalid entries (NaN)
  numbers = numbers.filter(num => !isNaN(num));

  if (numbers.length === 0) {
    result.innerHTML = "❌ Invalid input! Please enter valid numbers.";
    result.style.color = "red";
    return;
  }

  // Array operations
  let maxVal = Math.max(...numbers);
  let minVal = Math.min(...numbers);

  // Demonstrating array methods
  let doubled = numbers.map(n => n * 2); // map()
  let evenNumbers = numbers.filter(n => n % 2 === 0); // filter()
  
  


  // Display results
  result.style.color = "black";
  result.innerHTML = `
    <p <b>Original Array:</b> [${numbers.join(", ")}]</p>
    <p><b>Maximum Value:</b> <span class="result-highlight">${maxVal}</span></p>
    <p> <b>Minimum Value:</b> <span class="result-highlight">${minVal}</span></p>
    <hr>
    <p> <b>Doubled using map():</b> [${doubled.join(", ")}]</p>
    <p> <b>Even Numbers (filter):</b> [${evenNumbers.join(", ")}]</p>

  `;
}
