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

setInterval(analogclock, 1000);
