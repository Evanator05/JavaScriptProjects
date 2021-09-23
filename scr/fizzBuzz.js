let answer = [];
let amount = 500;

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
