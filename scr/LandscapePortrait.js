let stop = false;

function javascript() {

};

function main() {
  let firstNumber, secondNumber;

  firstNumber = document.getElementById("textfield1").value;
  secondNumber = document.getElementById("textfield2").value;
  //validate by alert or HTML text in p-tag
  document.getElementById("validityTest1").innerHTML = alert(testNaN(firstNumber));
  document.getElementById("validityTest1").innerHTML = testNaN(firstNumber);
  document.getElementById("validityTest2").innerHTML = alert(testNaN(secondNumber));
  document.getElementById("validityTest2").innerHTML = testNaN(secondNumber);

};

function testNaN(number) {
    if (isNaN(number)) { //NaN are not values of real number system
      stop = true;
      return "Please type a real number";
    } else {
      return "Input Validated";
    };
};
