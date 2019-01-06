$(document).ready(function () {
    /* For Sticky Navigation */
    $('.js--section-skills').waypoint(function (direction) {
        if (direction === 'down') {
            $('nav').addClass('sticky')
        } else {
            $('nav').removeClass('sticky')
        }
    }, {
        offset: '60px'
    });

    /* For button scroll */
    $('.js--scroll-to-prjcts').click(function () {
        $('html, body').animate({scrollTop: $('.js-section-prjcts').offset().top}, 1000);
    });
    $('.js-scroll-to-skills').click(function () {
        $('html, body').animate({scrollTop: $('.js--section-skills').offset().top}, 1000);
    });

    /* Navigation Scroll*/
    $(function() {
        $('a[href*="#"]:not([href="#"])').click(function() {
            if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
    });

    /* Animations on scroll */
    $('.js--wp-1').waypoint(function(direction) {
        $('.js--wp-1').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });
    $('.js--wp-2').waypoint(function(direction) {
        $('.js--wp-2').addClass('animated fadeIn');
    }, {
        offset: '60%'
    });
    $('.js--wp-3').waypoint(function(direction) {
        $('.js--wp-3').addClass('animated fadeInUp');
    }, {
        offset: '50%'
    });
    $('.js--wp-4').waypoint(function(direction) {
        $('.js--wp-4').addClass('animated fadeInUp');
    }, {
        offset: '60%'
    });

    /* Mobile nav */
    $('.mobile-nav').click(function () {
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon ion-icon');
        nav.slideToggle(200);
        if (icon.attr("name") === 'menu') {
            icon.attr("name", 'close');
        } else {
            icon.attr("name", 'menu');
        }
    });
});