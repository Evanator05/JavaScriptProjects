let stop = false;

function javascript() {

};

function main() {
  let firstNumber, secondNumber;

  firstNumber = document.getElementById("textfield1").value;
  secondNumber = document.getElementById("textfield2").value;
  //validate by alert or HTML text in p-tag

  stop = ((testNaN(Number(firstNumber)) == true || testNaN(Number(secondNumber)) == true));

  if (!stop) {
    if (Number(firstNumber) > Number(secondNumber)) {
      document.getElementById("answer").innerHTML = "Landscape";
    } else {
      document.getElementById("answer").innerHTML = "Portrait";
    };
  } else {
    document.getElementById("answer").innerHTML = "Error";
    alert("Please Enter 2 Real Numbers");
  };
};

function testNaN(number) {
    if (isNaN(number)) { //NaN are not values of real number system
      return true;
    } else {
      return false;
    };
};
