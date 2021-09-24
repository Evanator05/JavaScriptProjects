function main() {
  let numberA, numberB;
  //Get text from both number labels
  numberA = document.getElementById("numberA").value;
  numberB = document.getElementById("numberB").value;
  //Set text in number labels to actual numbers
  numberA = Number(numberA);
  numberB = Number(numberB);
  //check if they are both real numbers
  if (!(isNaN(numberA) || isNaN(numberB))) {
    document.getElementById("answer").innerHTML = numberA * (numberA > numberB) + numberB * (numberB > numberA);
    if (numberA == numberB) {
      document.getElementById("answer").innerHTML = "Equal";
    };
  } else {
    document.getElementById("answer").innerHTML = "Please Input 2 Real Numbers";
  };
};
