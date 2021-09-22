let stop = false;

function javascript() {

};

function main() {
  let firstNumber, secondNumber;

  firstNumber = document.getElementById("textfield1").value;
  secondNumber = document.getElementById("textfield2").value;
  //validate by alert or HTML text in p-tag
  alert(testNaN(firstNumber));
  document.getElementById("validityTest1").innerHTML = testNaN(firstNumber);
  alert(testNaN(secondNumber));
  document.getElementById("validityTest2").innerHTML = testNaN(secondNumber);
  console.log(firstNumber+secondNumber)
  if (firstNumber > secondNumber) {
    document.getElementById("answer").innerHTML = "Landscape"
  } else {
    document.getElementById("answer").innerHTML = "Portrait"
  };
};

function testNaN(number) {
    if (isNaN(number)) { //NaN are not values of real number system
      stop = true;
      return "Please type a real number";
    } else {
      return "Input Validated";
    };
};
