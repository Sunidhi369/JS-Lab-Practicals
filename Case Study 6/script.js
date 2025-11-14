// Function 1: Reverse a string
function reverseString() {
  let input = document.getElementById("stringInput").value;
  let result = document.getElementById("reverseResult");

  if (input.trim() === "") {
    result.innerHTML = "⚠️ Please enter a string.";
    result.style.color = "red";
    return;
  }

  // Using built-in methods: split(), reverse(), join()
  let reversed = input.split("").reverse().join("");
  result.innerHTML = `🔁 Reversed String: <b>${reversed}</b>`;
  result.style.color = "green";
}

// Function 2: Count vowels in a paragraph
function countVowels() {
  let text = document.getElementById("paragraphInput").value;
  let result = document.getElementById("vowelResult");

  if (text.trim() === "") {
    result.innerHTML = "⚠️ Please enter a paragraph.";
    result.style.color = "red";
    return;
  }

  // Convert to lowercase and count vowels using regex
  let vowels = text.match(/[aeiouAEIOU]/g);
  let count = vowels ? vowels.length : 0;

  result.innerHTML = `🅰️ Total vowels: <b>${count}</b>`;
  result.style.color = "#4b0082";

  // Demonstrate basic string methods
  console.log("Substring Example:", text.substring(0, 20));   // first 20 characters
  console.log("Index of 'a':", text.indexOf("a"));
  console.log("Split Example:", text.split(" "));
  console.log("Replace Example:", text.replace("the", "THE"));
}
