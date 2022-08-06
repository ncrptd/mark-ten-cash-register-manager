let billAmount = document.querySelector("#bill-amount");
let cashGiven = document.querySelector("#cash-given");
let checkBtn = document.querySelector("#check-btn");
let errorMessage = document.querySelector("#error-message");
let notesToReturn = document.querySelectorAll(".notes-to-return");
let availableNotes = [2000, 500, 100, 20, 10, 5, 1];

function clickHandler() {
  hideMessage();
  let bill = +billAmount.value;
  let cash = +cashGiven.value;
  if (bill > 0 && cash > 0) {
    if (cash > bill) {
      let amount = cash - bill;
      calculateChange(amount);
    } else {
      showMessage("Do you want to wash the dishes");
    }
  } else {
    showMessage("Invalid input");
  }
}
function hideMessage() {
  errorMessage.style.display = "none";
}
function showMessage(msg) {
  errorMessage.innerText = msg;
  errorMessage.style.display = "block";
}
function calculateChange(amount) {
  for (let i = 0; i < availableNotes.length; i++) {
    let cashToReturn = Math.trunc(amount / availableNotes[i]);
    amount %= availableNotes[i];
    notesToReturn[i].innerText = cashToReturn;
  }
}

checkBtn.addEventListener("click", clickHandler);
