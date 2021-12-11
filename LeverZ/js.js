$(function() {


    var header = $("#header"),
        introH = $("#intro").innerHeight(),
        scrollOffset = 0
    $(window).on("scroll", function() {
   
        scrollOffset = $(this).scrollTop();
        
        if(scrollOffset >= introH) {
            header.addClass("fixed")
        } else {
            header.removeClass("fixed")
        }
    }); 



    /* scroll */
    $('a[href^="#"').on('click', function() {

        let href = $(this).attr('href');

        $('html, body').animate({
            scrollTop: $(href).offset().top
        }, 700);
        return false;
    });


    /* nav toggle */

    $("#nav__toggle").on("click", function(event) {
        event.preventDefault();

        $("#nav").toggleClass("active");
        $("#header").toggleClass("active");
    });

});