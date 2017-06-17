/*===============================================*/
/*             SECTION Behavior File             */
/*===============================================*/
/*This behavior file applies specifically to every
SECTION page. */


$(function(){
"use strict";


    // Reading Progress Bar
    $(window).scroll(function() {
        var wintop      = $(window).scrollTop(); 
        var docheight   = $('body').height();
        var winheight   = $(window).height();
        var totalScroll = (wintop / (docheight - winheight) )*100;

        $(".KW_progressBar").css("width", totalScroll+"%");

        if (totalScroll > 98) {
            $(".KW_progressBar").css("background-color", "green");
            $(".KW_progressBar").css("height", "1.2em");

            // $(".KW_progressBar").animate({                   
            //             height: "1.5em",
            // }, 1750, "easeOutElastic", function () {
            //             console.log("DONE BOUNCE")
            // });

        } else {
            $(".KW_progressBar").css("background-color", "orange");
            $(".KW_progressBar").css("height", "0.6em");
        };
    });









});
