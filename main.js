// Home page
$(".open-BTN").click(function(){
    if ($(".sidenav").outerWidth() == "250") {
        $(".sidenav").animate({width:"0px"},500,function(){
        $(".sidenav").css({display: "none"});
        });
        $(".caption").animate({"margin-left":"0px"},500);
    } 
    else {
        $(".sidenav").animate({width:"250px"},500);
        $(".sidenav").css({display: "block"});
        $(".caption").animate({"margin-left":"250px"},500);
    }
})
// for X icon 
$(".fa-xmark").click(function(){
    $(".sidenav").animate({width:"0px"},500,function(){
        $(".sidenav").css({display: "none"});
    });
    $(".caption").animate({"margin-left":"0px"},500);
})






// Singers section
$(".singer").click(function(){
    $(this).next().slideToggle(500)
    $(".singer-text").not($(this).next()).slideUp(500)
})







// CountDown Section
function countdown() {
//  get today date
    var now = new Date().getTime();
//  get the event date
    var eventDate = new Date(2022, 6, 20).getTime();
// remaning Time 
    var remaningTime = eventDate - now;
// calculate the time of sec.,min.,hr. & days
    var s = Math.floor(remaningTime / 1000);
    var m = Math.floor(s / 60);
    var h = Math.floor(m / 60);
    var d = Math.floor(h / 24) - 30;
// to not exceed 60s 60m 24h
    h %= 24;
    m %= 60;
    s %= 60;

// display on Dom.
    document.getElementById("days").innerHTML = "<h3>" + d + " D" + "</h3>";
    document.getElementById("hrs").innerHTML = "<h3>" + h + " h" + "</h3>";
    document.getElementById("min").innerHTML = "<h3>" + m + " m" + "</h3>";
    document.getElementById("sec").innerHTML = "<h3>" + s + " s" + "</h3>";

    setTimeout(countdown, 1000);
}

countdown();





// Reamining Characters section
$(function () {
    var max = 100;
    $("textarea").keyup(function () {
        var length = $(this).val().length;
        var character = max - length;
        if (character <= 0) {
            $("#char").text("your available character finished");
        } else {
            $("#char").text(character);
        }
    });
});






