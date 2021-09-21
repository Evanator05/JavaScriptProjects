let stop = false;

function javascript() {

};

function main() {
  let firstNumber, secondNumber;

  //gets value of the height input field
  firstNumber = document.getElementById("textfield1").value;
  //validate by alert or HTML text in p-tag
  document.getElementById("validityTest1").innerHTML = alert(testNaN(firstNumber))

};

function testNaN(number) {
    if (isNaN(number)) { //NaN are not values of real number system
      stop = true;
      return "Please type a real number";
    } else {
      return "Input Validated";
    };
};
