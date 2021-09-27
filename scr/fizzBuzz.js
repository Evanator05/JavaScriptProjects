let answer = [];
let amount = 9999;

function main() {
  for (let i = 0; i < amount; i++) {
    if (i%3==0 && i%5==0) {
      answer.push("FizzBuzz");
    } else if (i%3==0) {
      answer.push("Fizz");
    } else if (i%5==0){
      answer.push("Buzz");
    } else {
      answer.push(i);
    };
  };

  for (let i = 0; i < answer.length; i++) {
    var line = document.createElement("P");
    line.innerText = answer[i];
    document.body.appendChild(line);
  };
};

main();

function submit() {
  let number = document.getElementById("input").value
  number = Number(number)
  if (!(isNaN(number))) {
    document.getElementById("output").innerHTML = fizzBuzz(number)
  } else {
    document.getElementById("output").innerHTML = "Please input a real number"
  };
};

function fizzBuzz(input) {
  if (input%3==0 && input%5==0) {
    return "FizzBuzz";
  } else if (input%3==0) {
    return "Fizz"
  } else if (input%5==0){
    return "Buzz";
  } else {
    return input;
  };
};
