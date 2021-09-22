let stop = false;

function javascript() {

};

function main() {
  let firstNumber, secondNumber;

  firstNumber = document.getElementById("textfield1").value;
  secondNumber = document.getElementById("textfield2").value;
  //validate by alert or HTML text in p-tag

  console.log(Number(firstNumber)+Number(secondNumber))
  if (Number(firstNumber) > Number(secondNumber)) {
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
