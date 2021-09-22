let answer = []

function main() {
  for (let i = 0; i < 100; i++) {
    if (i%3==0 && i%5==0) {
      answer.push("FizzBuzz")

    } else if (i%3==0) {
      answer.push("Fizz")
    } else if (i%5==0){
      answer.push("Buzz")
    } else {
      answer.push(i)
    };
  };

  for (let i = 0; i < answer.length; i++) {
    let line = document.createElement("p");
    line.innerHTML = answer[i]
    document.appendChild(line)
  };

  console.log(answer)
};

main()
