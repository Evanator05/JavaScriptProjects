function main() {
  let number;

  number = document.getElementById("number").value
  number = Number(number)
  if (!(isNaN(number))) {
    if (number%2 == 0) {
      document.getElementById("answer").innerHTML = "Even"
    } else {
      document.getElementById("answer").innerHTML = "Odd"
    };
  } else {
    document.getElementById("answer").innerHTML = "Please Input a Real Number"
  };

};
