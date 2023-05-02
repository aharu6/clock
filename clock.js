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
  document.getElementById("analogclock").style.display = "block";
  document.getElementById("degitalclock").style.display = "none";

  analogclock.classlist.add("show");
  analogclock.classlist.remove("hide");
  hourhand.classlist.add("show");
  hourhand.classList.remove("hide");
  minuteshand.classList.add("show");
  minuteshand.classList.remove("hide");
  secondshand.classList.add("show");
  secondshand.classList.remove("hide");
  clockface.classList.add("show");
  clockface.classListr.remove("hide");
}
//デジタル表示
function showdegitalclock() {
  document.getElementById("analogclock").style.display = "none";
  document.getElementById("degitalclock").style.display = "block";
  degitalclock.classlist.add("show");
  degitalclock.classlist.remove("hide");
}
//各クラス取得中のリアルタイムでの時間表示　デジタルとアナログそれぞれ
function updatetime() {
  let now = new Date();
  let minutes = now.getMinutes();

  if (minutes % 10 === 0) {
    setInterval(analogclock, 1000);
  } else {
    setInterval(degitalclock, 1000);
  }
}
setInterval(updatetime, 1000);
