document.getElementById("gymForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const age = document.getElementById("age").value;
  const gender = document.querySelector('input[name="gender"]:checked');
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const eyeColor = document.getElementById("eyeColor").value;
  const height = document.getElementById("height").value;
  const weight = document.getElementById("weight").value;
  const ability = document.getElementById("fitnessLevel").value.trim();
  const checkboxes = document.querySelectorAll(".checkboxes input:checked");

  // Validation
  if (!name || !age || !gender || !email || !phone) {
    alert("⚠️ Please fill all mandatory fields.");
    return;
  }

  // Collect fitness goals
  const goals = Array.from(checkboxes).map(cb => cb.value).join(", ") || "None";

  // Display result
  const outputDiv = document.getElementById("output");
  outputDiv.style.display = "block";
  outputDiv.innerHTML = `
    <h3>✅ Registration Successful!</h3>
    <p><b>Name:</b> ${name}</p>
    <p><b>Age:</b> ${age}</p>
    <p><b>Gender:</b> ${gender.value}</p>
    <p><b>Email:</b> ${email}</p>
    <p><b>Phone:</b> ${phone}</p>
    <p><b>Eye Color:</b> ${eyeColor || "Not specified"}</p>
    <p><b>Height:</b> ${height || "Not specified"} cm</p>
    <p><b>Weight:</b> ${weight || "Not specified"} kg</p>
    <p><b>Fitness Goals:</b> ${goals}</p>
    <p><b>Fitness Level:</b> ${ability || "Not specified"}</p>
  `;

  // Reset form
  document.getElementById("gymForm").reset();
});
