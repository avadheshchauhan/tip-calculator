const button = document.querySelector("#calculateBtn");

function calculateTip() {
  const billAmount = document.querySelector("#billAmount").value;
  const serviceQuality = document.querySelector("#serviceQuality").value;
  const peopleCount = document.querySelector("#peopleCount").value;
  let tipAmount = 0;
  if (billAmount < 0) {
    document.getElementById("totalTip").style.display = "none";
    alert("Bill Amount can't be less than 0");
  } else if (billAmount === "" || peopleCount === "") {
    document.getElementById("totalTip").style.display = "none";
    alert("Please Enter the valid input");
  } else if (billAmount > 0 && peopleCount >= 1) {
    tipAmount = (billAmount * serviceQuality) / peopleCount;
    tipAmount = tipAmount.toFixed(2);
    document.getElementById("totalTip").style.display = "block";
    document.getElementById("tipAmount").innerText = `${tipAmount} Rs each`;
  }
}

button.addEventListener("click", calculateTip);
