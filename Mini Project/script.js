// script.js

const quotes = [
  "Believe in yourself and all that you are.",
  "Every day is a second chance.",
  "Positive thoughts create positive results.",
  "You are stronger than you think.",
  "Start where you are. Use what you have. Do what you can.",
  "Peace begins with a smile."
];

document.addEventListener("DOMContentLoaded", function() {
  const quoteBtn = document.getElementById("newQuoteBtn");
  const quoteDisplay = document.getElementById("quoteDisplay");

  if (quoteBtn) {
    quoteBtn.addEventListener("click", () => {
      const randomIndex = Math.floor(Math.random() * quotes.length);
      quoteDisplay.textContent = `"${quotes[randomIndex]}"`;
    });
  }
});

// Contact form validation
function validateForm() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (name === "" || email === "" || message === "") {
    alert("Please fill out all fields before submitting!");
    return false;
  }

  alert("Thank you for your message! 💌");
  return true;
}

// For Quotes Page random generator
const quoteBtn2 = document.getElementById("generateQuoteBtn");
const quoteBox = document.getElementById("quoteBox");

if (quoteBtn2) {
  quoteBtn2.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteBox.textContent = `"${quotes[randomIndex]}"`;
  });
}
