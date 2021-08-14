$(document).ready(function() {
    $(".owl-carousel").owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 2000,
        dots: false,
        nav: true,
        navText: [$(".nav-left"), $(".nav-right")],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            },

        }




    });
});


AOS.init();