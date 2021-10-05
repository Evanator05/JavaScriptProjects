function returnAverage(text) {
  var average = 0;

  text = text.split(",");


  for (let i = 0; i < text.length; i++) {
    text[i] = Number(text[i])
    average += text[i]
  };
  average = average/text.length
  return average;
};

function getGrade(number) {
  var grade = "F"
  if (number >= 90) {
    grade = "A"
  } else if (number >= 80) {
    grade = "B"
  } else if (number >= 70) {
    grade = "C"
  } else if (number >= 60) {
    grade = "D"
  } else {
    grade = "F"
  };

  return grade
};

function pressed() {
  let text = document.getElementById("grades").value
  document.getElementById("grade").innerHTML = getGrade(returnAverage(text))
};
