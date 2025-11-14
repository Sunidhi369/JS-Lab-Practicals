// Function to reverse a number
function reverseNumber(num) {
  let reversed = 0;
  let original = num;

  while (num > 0) {
    let digit = num % 10;
    reversed = reversed * 10 + digit;
    num = Math.floor(num / 10);
  }

  return reversed;
}

// Arrow function to check palindrome
const checkPalindrome = () => {
  let num = document.getElementById("numInput").value;
  let result = document.getElementById("result");

  if (num === "") {
    result.innerHTML = "⚠️ Please enter a number.";
    result.style.color = "red";
    return;
  }

  let reversedNum = reverseNumber(num);

  if (num == reversedNum) {
    result.innerHTML = `✅ ${num} is a Palindrome!`;
    result.style.color = "green";
  } else {
    result.innerHTML = `❌ ${num} is not a Palindrome.`;
    result.style.color = "red";
  }
};

// Demonstrate function scope & closure
function outerFunction() {
  let message = "Function scope and closure demo successful!";
  function innerFunction() {
    console.log(message); // closure example
  }
  innerFunction();
}
outerFunction();
