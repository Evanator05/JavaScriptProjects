function getTime() {
  var today = new Date();
  let time = [today.getHours(),today.getMinutes()];
  return time;
};

function pickMessage(time) {
  message = "";

  if (time > 19) {
    message = "Time to start going to bed."
  } else if (time > 15) {
    message = "You getting hungry?"
  } else if (time > 11) {
    message = "Today is really long, isn't it?"
  } else if (time > 7) {
    message = "Time for school."
  } else if (time > 3) {
    message = "You should start waking up."
  } else if (time >= 0) {
      message = "Why arent you still sleeping?"
  };

  return message;

};

document.getElementById("time").innerHTML = getTime()[0]+":"+getTime()[1];
if (getTime()[1] < 10) {
  document.getElementById("time").innerHTML = getTime()[0]+":0"+getTime()[1]
};
document.getElementById("message").innerHTML = pickMessage(getTime()[0]);
