function checkGrade() {
  let marks = document.getElementById("marks").value;
  let result = document.getElementById("result");

  if (marks === "") {
    result.innerHTML = "⚠️ Please enter your marks.";
    result.style.color = "red";
  } 
  else if (marks < 0 || marks > 100) {
    result.innerHTML = "❌ Invalid marks! Enter between 0 and 100.";
    result.style.color = "red";
  } 
  else if (marks >= 50 && marks <= 65) {
    result.innerHTML = "🎯 Your Grade is: <b>C</b>";
    result.style.color = "#ffb400";
  } 
  else if (marks >= 66 && marks <= 80) {
    result.innerHTML = "🌟 Your Grade is: <b>B</b>";
    result.style.color = "#007bff";
  } 
  else if (marks >= 81 && marks <= 90) {
    result.innerHTML = "🏅 Your Grade is: <b>A</b>";
    result.style.color = "#28a745";
  } 
  else if (marks > 90) {
    result.innerHTML = "🔥 Your Grade is: <b>A+</b>";
    result.style.color = "#ff5733";
  } 
  else {
    result.innerHTML = "❌ Sorry, you failed!";
    result.style.color = "red";
  }
}
