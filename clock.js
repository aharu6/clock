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
  setInterval(analogclock, 1000);
  document.getElementById("analogclock").classList.add("show");
  document.getElementById("hourhand").classList.add("show");
  document.getElementById("minuteshand").classList.add("show");
  document.getElementById("secondshand").classList.add("show");
  document.getElementById("clockface").classList.add("show");
  document.getElementById("clockface").classList.add("show");
  document.getElementById("degitalclock").classList.add("none");
}
//デジタル表示
function showdegitalclock() {
  setInterval(degitalclock, 1000);
  document.getElementById("analogclock").classList.add("none");
  document.getElementById("hourhand").classList.add("none");
  document.getElementById("minuteshand").classList.add("none");
  document.getElementById("secondshand").classList.add("none");
  document.getElementById("clockface").classList.add("none");
  document.getElementById("degitalclock").classList.add("show");
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
    clearInterval(setInterval(showdegitalclock, 1000));
    setInterval(showananalogclock, 1000);
  } else if (
    Math.floor(minutes / 10) === 1 ||
    Math.floor(minutes / 10) === 3 ||
    Math.floor(minutes / 10) === 5
  ) {
    clearInterval(setInterval(showananalogclock, 1000));
    setInterval(showdegitalclock, 1000);
  }
}
setInterval(updatetime, 1000);
