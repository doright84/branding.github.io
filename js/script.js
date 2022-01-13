$(document).ready(function () {
    AOS.init();
    // ---gotop----
    $('.gotop').click(function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        });
    });
    $(".gotop").hide();
    $(window).scroll(function () {
        if ($(this).scrollTop() > 400) {
            $('.gotop').slideDown();

        } else {
            $('.gotop').slideUp();

        }

    });



    //  ----------swiper----------
    var sw_design = new Swiper('.swiper-container', {

        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        loop: true,

        autoplay: {
            delay: 2400,
            disableOnInteraction: false,
        },

        speed: 800,

    });
    // --------footer-------
    $('.footer-cont').hover(function () {
        $('.footer-txt').toggleClass('footer-txt-on');
        $('.footer').toggleClass('footer-hover');
    });
});