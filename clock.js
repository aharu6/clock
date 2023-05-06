//時計本体 アナログ
function analogclock() {
  let now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  let hourhand = document.querySelector(".hour-hand");
  let minutehand = document.querySelector(".minutes-hand");
  let secondhand = document.querySelector(".seconds-hand");

  let hourhanddeg = (hours % 12) * 30 + (minutes / 60) * 30;
  let minutshanddeg = (minutes / 60) * 360;
  let secondhanddeg = (seconds / 60) * 360;

  hourhand.style.transform = "rotate(" + hourhanddeg + "deg)";
  minutehand.style.transform = "rotate(" + minutshanddeg + "deg)";
  secondhand.style.transform = "rotate(" + secondhanddeg + "deg)";
}
//時計本体　デジタル
function degitalclock() {
  let now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  let timeString =
    addZeroPadding(hours) +
    ":" +
    addZeroPadding(minutes) +
    ":" +
    addZeroPadding(seconds);
  document.getElementById("degitalclock").innerHTML = timeString;
}
function addZeroPadding(num) {
  if (num < 10) {
    return "0" + num;
  } else {
    return num;
  }
}
//アナログ表示
function showananalogclock() {
  analogclock();
  document.getElementById("analogclock").classList.add("show");
  document.getElementById("analogclock").classList.remove("none");
  document.getElementById("hourhand").classList.add("show");
  document.getElementById("hourhand").classList.remove("none");
  document.getElementById("minuteshand").classList.add("show");
  document.getElementById("minuteshand").classList.remove("none");
  document.getElementById("secondshand").classList.add("show");
  document.getElementById("secondshand").classList.remove("none");
  document.getElementById("clockface").classList.add("show");
  document.getElementById("clockface").classList.remove("none");
  document.getElementById("degitalclock").classList.add("none");
  document.getElementById("degitalclock").classList.remove("show");
}
//デジタル表示
function showdegitalclock() {
  degitalclock();
  document.getElementById("analogclock").classList.add("none");
  document.getElementById("analogclock").classList.remove("show");
  document.getElementById("hourhand").classList.add("none");
  document.getElementById("hourhand").classList.remove("show");
  document.getElementById("minuteshand").classList.add("none");
  document.getElementById("minuteshand").classList.remove("show");
  document.getElementById("secondshand").classList.add("none");
  document.getElementById("secondshand").classList.remove("show");
  document.getElementById("clockface").classList.add("none");
  document.getElementById("clockface").classList.remove("show");
  document.getElementById("degitalclock").classList.add("show");
  document.getElementById("degitalclock").classList.remove("none");
}
//10分ごとの表示切り替え　デジタルとアナログそれぞれ
function updatetime() {
  let now = new Date();
  let minutes = now.getMinutes();

  if (
    Math.floor(minutes / 10) === 0 ||
    Math.floor(minutes / 10) === 2 ||
    Math.floor(minutes / 10) === 4 ||
    Math.floor(minutes / 10) === 6
  ) {
    showananalogclock();
  } else if (
    Math.floor(minutes / 10) === 1 ||
    Math.floor(minutes / 10) === 3 ||
    Math.floor(minutes / 10) === 5
  ) {
    showdegitalclock();
  }
}
setInterval("updatetime()", 1000);
