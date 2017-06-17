/*===============================================*/
/*           FRONT Page Behavior File            */
/*===============================================*/
/*This behavior file applies to the GLOBAL/entire site
and is included in every page*/





// This code executes after the DOM has loaded completely
$(function(){
"use strict";

    // Need for initial fade effect
    $('body').removeClass('fade-out');

    // Animating Header Logo
    $( "#header-logo" ).animate({"height" : 300, opacity:1}, 1500, "easeOutSine");


   // Only on Desktop view, not Mobile
    if( !(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) ) {


        //Animate topic Buttons row moving up
        var $c1 = $('.topic-button');                  //shortcut definition
        $c1.css("position", "relative");                //temporarly set relative position
        $c1.css('top', "+=100px");                     //quickly move down
        var animateChange = "-=100px";
        $c1.css('opacity', "0");                        //quickly make invisible

        var scrolledUp = true;      // Controls hide and show of scroll up button

        $(window).scroll(function () {

            if ($(this).scrollTop() > 235) {            //if past certain point on page
                if ($c1.hasClass('visible') == false) { //if it is NOT visible
                    $c1.animate({                       //animate up
                        top:     animateChange,
                        opacity: 0.8
                    }, 1500, "easeOutQuart", function () {
                        $c1.addClass('visible');        //add "visible" when done
                        $c1.css("position", "static");  //restore static position
                    });
                } else {
                    $c1.animate().stop()
                }

            } 




            //Hide or Show scroll up button
            if ($(this).scrollTop() > 50 && scrolledUp == true) {
                $("#scroll-up-button").animate({
                    width     : "70px", 
                    right     : "50px",
                    opacity   : "0.70"
                }, 500, "easeOutBounce" , function() {
                    scrolledUp = false;
                });
            } 
            if ($(this).scrollTop() < 50  && scrolledUp == false) {
                $("#scroll-up-button").animate().stop();
                $("#scroll-up-button").animate({
                    width     : "5px", 
                    right     : "-30px",
                    opacity   : "0.50"
                }, 500, "easeOutQuint", function() {
                    scrolledUp = true;
                });
            }

        });




    }

    // When the user clicks on the button, scroll to the top of the document
    $('#scroll-up-button').click(function(){
        $("html, body").animate({
            scrollTop: 0,
        }, 500, "easeOutQuint")
    })








        
    // Set the date we're counting down to
    var countDownDate = new Date("Jul 4, 2017 00:00:00").getTime();

    // Update the count down every 1 second
    var x = setInterval(function() {

        // Get todays date and time
        var now = new Date().getTime();

        // Find the distance between now an the count down date
        var distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        var days    = Math.floor( distance / (1000 * 60 * 60 * 24));
        var hours   = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the result in the element with id="countdown-timer"
        document.getElementById("countdown-timer").innerHTML = days + " Days - " + hours + " Hours - "
        + minutes + " Minutes - " + seconds + " Seconds ";

        // If the count down is finished, write some text 
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("countdown-timer").innerHTML = "We are LIVE!";
        }
    }, 1000);
    

});