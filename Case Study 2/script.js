// Demonstrate data types and variable declarations
let shopName = "BlinkMart";     // String
const gstRate = 0.08;          // Number
let isOpen = true;             // Boolean
let discount = null;           // Null
let specialOffer;              // Undefined

console.log("Shop Name:", shopName);
console.log("GST Rate:", gstRate);
console.log("Is Open:", isOpen);
console.log("Discount:", discount);
console.log("Special Offer:", specialOffer);

// Function to calculate total bill
function calculateTotal() {
  const prices = document.querySelectorAll(".price");
  const quantities = document.querySelectorAll(".quantity");
  let total = 0;

  for (let i = 0; i < prices.length; i++) {
    let price = Number(prices[i].textContent);
    let qty = Number(quantities[i].value);

    // Skip if quantity not entered or invalid
    if (isNaN(qty) || qty <= 0) continue;

    total += price * qty;
  }

  // Apply GST
  const gstAmount = total * gstRate;
  const grandTotal = total + gstAmount;

  if (total === 0) {
    document.getElementById("result").innerHTML = "⚠️ Please enter valid quantities.";
  } else {
    document.getElementById("result").innerHTML =
      `🧾 Subtotal: ₹${total.toFixed(2)}<br>GST (18%): ₹${gstAmount.toFixed(2)}<br><b>Total Payable: ₹${grandTotal.toFixed(2)}</b>`;
  }

  console.log("Total before GST:", total);
  console.log("Grand Total:", grandTotal);
}

