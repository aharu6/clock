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
  document.getElementById("analogclock").style.display = "block";
  document.getElementById("hourhand").style.display = "block";
  document.getElementById("minuteshand").style.display = "block";
  document.getElementById("secondshand").style.display = "block";
  document.getElementById("clockface").style.display = "block";
  const degitalnone = document.getElementById("degitalclock");
  degitalnone.classList.add("degitalclocknone");
}
//デジタル表示
function showdegitalclock() {
  setInterval(degitalclock, 1000);
  const anaclock = document.getElementById("analogclock");
  anaclock.classList.add("analogclocknone");
  const hrid = document.getElementById("hourhand");
  hrid.classList.add("hourhandnone");
  const mnid = document.getElementById("minuteshand");
  mnid.classList.add("minuteshandnone");
  const seid = document.getElementById("secondshand");
  seid.classList.add("secondshandnone");
  document.getElementById("degitalclock").style.display = "block";
  
}
//各クラス取得中のリアルタイムでの時間表示　デジタルとアナログそれぞれ
function updatetime() {
  let now = new Date();
  let minutes = now.getMinutes();

  if (minutes % 10 === 0) {
    setInterval(showananalogclock, 1000);
  } else {
    setInterval(showdegitalclock, 1000);
  }
}
setInterval(updatetime, 1000);
