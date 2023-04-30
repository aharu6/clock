window.onload = function () {
  showananalogclock();
  setInterval(updateclock, 1000);
  if (time < 10) {
    return "0" + time;
  } else {
    return time;
  }
};
let now = new Date();
let hours = now.getHours();
if (hours >= 6 && hours < 10) {
  showananalogclock();
} else {
  showdegitalclock();
}
//アナログ表示
function showananalogclock() {
  document.getElementById("analog-clock").style.display = "block";
  document.getElementById("degital-clock").style.display = "none";
  analogclock.classlist.add("show");
  analogclock.classlist.remove("hide");
}
//デジタル表示
function showdegitalclock() {
  document.getElementById("analog-clock").style.display = "none";
  document.getElementById("degital-clock").style.display = "block";
  degitalclock.classlist.add("show");
  degitalclock.classlist.remove("hide");
}
//各クラス取得中のリアルタイムでの時間表示　デジタルとアナログそれぞれ
function updateclock() {
  let now = new Date();
  if (document.getElementById("analog-clock").classList.contains("show")) {
    analogclock(now);
  } else if (
    document.getElementById("degital-clock").classList.contains("show")
  ) {
    degitalclock(now);
  }
}
//時計本体 アナログ
function analogclock() {
  var now = new Date();
  var hours = now.getHours();
  var minutes = now.getMinutes();
  var seconds = now.getSeconds();

  var hourhand = document.querySelector(".hour-hand");
  var minutehand = document.querySelector(".minutes-hand");
  var secondhand = document.querySelector(".seconds-hand");

  var hourhanddeg = (hours % 12) * 30 + (minutes / 60) * 30;
  var minutshanddeg = (minutes / 60) * 360;
  var secondhanddeg = (seconds / 60) * 360;

  hourhand.style.transform = "rotate(" + hourhanddeg + "deg)";
  minutehand.style.transform = "rotate(" + minutshanddeg + "deg)";
  secondhand.style.transform = "rotate(" + secondhanddeg + "deg)";
}
//時計本体　デジタル
function degitalclock() {
  var now = new Date();
  var hours = now.getHours();
  var minutes = now.getMinutes();
  var seconds = now.getSeconds();
  var timeString =
    addZeroPadding(hours) +
    ":" +
    addZeroPadding(minutes) +
    ":" +
    addZeroPadding(seconds);
  document.getElementById("degital-clock").innerHTML = timeString;
}
