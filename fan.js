let fan = document.querySelector("img");

function fan_on() {
  console.log("fan");
  fan.style.animationDuration = 1 + "s";
  document.getElementById("speed").style.display = "block";
}
function fan_off() {
  fan.style.animationDuration = 0 + "s";
  document.getElementById("speed").style.display = "none";
}
function fan_1() {
  fan.style.animationDuration = 1 + "s";
}
function fan_2() {
  fan.style.animationDuration = 0.8 + "s";
}
function fan_3() {
  fan.style.animationDuration = 0.6 + "s";
}
function fan_4() {
  fan.style.animationDuration = 0.4 + "s";
}
function fan_5() {
  fan.style.animationDuration = 0.2 + "s";
}
