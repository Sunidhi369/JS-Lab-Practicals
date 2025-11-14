// JSON room data
const roomData = {
  "standard": { "price": 2000 },
  "deluxe": { "price": 3500 },
  "suite": { "price": 5000 }
};

// Smooth scroll to booking form
function scrollToForm() {
  document.getElementById("booking").scrollIntoView({ behavior: "smooth" });
}

// Booking logic
document.getElementById("bookingForm").addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const type = document.getElementById("roomType").value;
  const days = document.getElementById("days").value;
  const total = roomData[type].price * days;

  const booking = {
    name: name,
    roomType: type.toUpperCase(),
    days: days,
    totalAmount: total
  };

  alert(`🎉 Booking Confirmed!\nName: ${name}\nRoom: ${type.toUpperCase()}\nTotal: ₹${total}`);

  document.getElementById("billOutput").innerHTML = `
    <div class="fade">
      <p><strong>Name:</strong> ${booking.name}</p>
      <p><strong>Room Type:</strong> ${booking.roomType}</p>
      <p><strong>Days:</strong> ${booking.days}</p>
      <p><strong>Total Bill:</strong> ₹${booking.totalAmount}</p>
    </div>
  `;

  console.log("Booking JSON:", JSON.stringify(booking, null, 2));
});

// Theme toggle
document.getElementById("themeToggle").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  alert("🌗 Theme changed!");
});