let numberA = 0, numberB = 0;


function main() {
  let numberA, numberB;

  numberA = document.getElementById("numberA").value;
  numberB = document.getElementById("numberB").value;

  numberA = Number(numberA);
  numberB = Number(numberB);

  document.getElementById("answer").innerHTML = numberA * (numberA > numberB) + numberB * (numberB > numberA) + (numberA+numberB) * (numberA==numberB);

};
