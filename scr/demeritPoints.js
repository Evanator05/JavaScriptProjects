function main() {

};

function calculateDemeritPoints(currentSpeed, maxSpeed) {
  let demerits = 0;
  if (currentSpeed >= maxSpeed) {
    demerits = Math.floor((currentSpeed-maxSpeed)/5);

    if (demerits >= 12) {
      demerits = "Suspended";
    };
  };
  return demerits;
};

function submit() {
  let csp = document.getElementById("CurrentSpeed").value;
  let msp = document.getElementById("SpeedLimit").value;
  csp = Number(csp);
  msp = Number(msp);

  if (!(isNaN(csp) && isNaN(msp))) {
    document.getElementById("output").innerHTML = calculateDemeritPoints(csp, msp)
  };
};
