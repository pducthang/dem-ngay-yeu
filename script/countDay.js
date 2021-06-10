let textTyping = document.querySelector(".curtain__text");
cusor = "+";

let count = 0;

let mess = "I Love You<br/>" + "Moa Moa <br/>" + "^_^";

function type() {
  textTyping.innerHTML = mess.substring(0, count++);

  if (count <= mess.length) {
    setTimeout("type()", 150);
  }
}
type();

let yearsNumber = document.querySelector(".years__number");
let monthsNumber = document.querySelector(".months__number");
let weeksNumber = document.querySelector(".weeks__number");
let daysNumber = document.querySelector(".days__number");
let hoursNumber = document.querySelector(".hours__number");
let minutesNumber = document.querySelector(".minutes__number");
let secondsNumber = document.querySelector(".seconds__number");

let CountDays = document.querySelector(".days_top");
function countDayLove() {
  let dayStartLove = new Date(`May 29, 2020 00:00:00`);
  let now = new Date().getTime();
  let distanceLove = now - dayStartLove.getTime();
  let days = Math.floor(distanceLove / (1000 * 60 * 60 * 24));

  let distance = countdown(
    new Date("May 30, 2020 00:00:00"),
    new Date(),
    countdown.ALL
  );
  CountDays.innerHTML = days;

  yearsNumber.innerHTML = distance.years;
  monthsNumber.innerHTML = distance.months;
  weeksNumber.innerHTML = distance.weeks;
  daysNumber.innerHTML = distance.days;
  hoursNumber.innerHTML = distance.hours;
  minutesNumber.innerHTML = distance.minutes;
  secondsNumber.innerHTML = distance.seconds;
}
setInterval(countDayLove, 1000);

let curtainOpenLeft = document.querySelector(".curtain__panel--left");
let curtainOpenRight = document.querySelector(".curtain__panel--right");
let hideCurtainText = document.querySelector(".curtain__text");
let hideCurtainHeart = document.querySelector(".curtain__heart");
function curtainOpen() {
  curtainOpenLeft.style.transform = "translateX(-100%)";
  curtainOpenLeft.style.animation = "curtainLeft linear 2s";

  curtainOpenRight.style.transform = "translateX(100%)";
  curtainOpenRight.style.animation = "curtainRight linear 2s";

  hideCurtainText.style.opacity = "0";
  hideCurtainText.style.transition = "all linear 1.2s";

  hideCurtainHeart.style.opacity = "0";
  hideCurtainHeart.style.transition = "all linear 1.2s";
  let elementCurtainHeart = document.styleSheets[1].cssRules[7].style;
  elementCurtainHeart.removeProperty("animation");
}
setTimeout(curtainOpen, 5800);


//heart flying 

function love() {
    var r_num = Math.floor(Math.random() * 40) + 1;
    var r_size = Math.floor(Math.random() * 65) + 10;
    var r_left = Math.floor(Math.random() * 100) + 1;
    var r_bg = Math.floor(Math.random() * 25) + 100;
    var r_time = Math.floor(Math.random() * 5) + 5;

    $('.bg_heart').append("<div class='heart' style='width:" + r_size + "px;height:" + r_size + "px;left:" + r_left + "%;background:rgba(255," + (r_bg - 25) + "," + r_bg + ",1);-webkit-animation:love " + r_time + "s ease;-moz-animation:love " + r_time + "s ease;-ms-animation:love " + r_time + "s ease;animation:love " + r_time + "s ease'></div>");

    $('.bg_heart').append("<div class='heart' style='width:" + (r_size - 10) + "px;height:" + (r_size - 10) + "px;left:" + (r_left + r_num) + "%;background:rgba(255," + (r_bg - 25) + "," + (r_bg + 25) + ",1);-webkit-animation:love " + (r_time + 5) + "s ease;-moz-animation:love " + (r_time + 5) + "s ease;-ms-animation:love " + (r_time + 5) + "s ease;animation:love " + (r_time + 5) + "s ease'></div>");

    $('.heart').each(function() {
        var top = $(this).css("top").replace(/[^-\d\.]/g, '');
        var width = $(this).css("width").replace(/[^-\d\.]/g, '');
        if (top <= -100 || width >= 150) {
            $(this).detach();
        }
    });
};

setInterval(love,500);


function countLoveFar() {
  let loveFarDays = document.querySelector(".love--far__days");
  let loveFarHours = document.querySelector(".love--far__hours");
  let loveFarMinutes = document.querySelector(".love--far__minutes");
  let loveFarSeconds = document.querySelector(".love--far__seconds");

  let distance = countdown(
    new Date(),
    new Date("2020-09-06 00:00:00"),
    countdown.DAYS|countdown.HOURS|countdown.MINUTES|countdown.SECONDS
  );

  loveFarDays.innerHTML = distance.days;
  loveFarHours.innerHTML = distance.hours;
  loveFarMinutes.innerHTML = distance.minutes;
  loveFarSeconds.innerHTML = distance.seconds;
}

setInterval(countLoveFar,1000);

//click play audio
let autoPlayAudio = document.querySelector(".audio");
function autoPlay(){
  window.addEventListener('touchmove', function(){
    autoPlayAudio.play();
  });
  window.addEventListener('click', function(){
    autoPlayAudio.play();
  });
}
autoPlay();

