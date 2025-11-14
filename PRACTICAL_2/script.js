function calculateBill() {
  var item1 = Number(document.getElementById("item1").value);
  var item2 = Number(document.getElementById("item2").value);
  var item3 = Number(document.getElementById("item3").value);
  var item4 = Number(document.getElementById("item4").value);
  var item5 = Number(document.getElementById("item5").value);
  var item6 = Number(document.getElementById("item6").value);

  var total =
    item1 * 150 +
    item2 * 200 +
    item3 * 100 +
    item4 * 300 +
    item5 * 400 +
    item6 * 150;

  document.getElementById("bill").textContent = "Total Bill: Rs " + total;
}
