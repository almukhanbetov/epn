(function ($) {
 "use strict";
 
 
/*
Preloader
------------------------------ */

setTimeout(function () {
	$('#preloader').fadeToggle();
}, 1500);
 
/*
Tooltip
------------------------------ */

$(document).ready(function(){
	$('[data-toggle="tooltip"]').tooltip();
});

/*
Countdown Clock
------------------------------ */
var startTime = new Date();
// Устанавливаем дату окончания через 30 дней
var endTime = new Date(startTime.getTime() + 30 * 24 * 60 * 60 * 1000);

function makeTimer() {
    var now = new Date().getTime();
    var timeLeft = Math.floor((endTime.getTime() - now) / 1000); // в секундах

    var days = Math.floor(timeLeft / 86400); 
    var hours = Math.floor((timeLeft % 86400) / 3600);
    var minutes = Math.floor((timeLeft % 3600) / 60);
    var seconds = Math.floor(timeLeft % 60);

    // Добавляем ведущие нули
    if (hours < 10) { hours = "0" + hours; }
    if (minutes < 10) { minutes = "0" + minutes; }
    if (seconds < 10) { seconds = "0" + seconds; }

    $("#days").html(days + "<h6>Days</h6>");
    $("#hours").html(hours + "<h6>Hrs</h6>");
    $("#minutes").html(minutes + "<h6>Min</h6>");
    $("#seconds").html(seconds + "<h6>Sec</h6>");
}

setInterval(makeTimer, 1000);


/*
Prognroll 
------------------------------ */
$(function() {
  $("#scrollbar-right").prognroll({
    height: 2, //Progress bar height
    color: "#fd6802", //Progress bar background color
    custom: true //If you make it true, you can add your custom div and see it's scroll progress on the page
  });
});

/*
Expend 
------------------------------ */
$(".notify-btn,.close-icon").click(function() {
	$("body,#scrollbar-right,.close-icon").toggleClass("active");
});

 
 })(jQuery)