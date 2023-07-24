(function($) {
    "use strict";

    // filter-click
    $('.filter-menu a').on("click", function() {
        $('.filter-active').slideToggle();
    })

    // toggle
    $('#toggle1').on("click", function() {
        $('.create-account').slideToggle();
    })
    // toggle
    $('#toggle2').on("click", function() {
        $('#open2').slideToggle();
    })

    // sidebarmenu click
    $(".search-tigger a").on("click", function() {
        $(".search-area").addClass("current");
    });
    $(".closebar").on("click", function() {
        $(".search-area").removeClass("current");
    });

    // responsive-menu tigger
    $(".responsive-menu-tigger").on("click", function() {
        $(".responsive-menu-area").toggleClass("active");
    });

    // $('ul.metismenu').metisMenu({
    //     prependTo: ".responsive-menu-wrap"
    // });

    // imageZoom effect
    $('.product-active .item').zoom();

    // swipper slider
    var interleaveOffset = 0.5;

    var swiperOptions = {
        loop: true,
        speed: 1000,
        grabCursor: true,
        watchSlidesProgress: true,
        mousewheelControl: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        keyboardControl: true,
        pagination: {
            el: '.swiper-pagination',
        },
        on: {
            progress: function() {
                var swiper = this;
                for (var i = 0; i < swiper.slides.length; i++) {
                    var slideProgress = swiper.slides[i].progress;
                    var innerOffset = swiper.width * interleaveOffset;
                    var innerTranslate = slideProgress * innerOffset;
                    swiper.slides[i].querySelector(".slide-inner").style.transform =
                        "translate3d(" + innerTranslate + "px, 0, 0)";
                }
            },
            touchStart: function() {
                var swiper = this;
                for (var i = 0; i < swiper.slides.length; i++) {
                    swiper.slides[i].style.transition = "";
                }
            },
            setTransition: function(speed) {
                var swiper = this;
                for (var i = 0; i < swiper.slides.length; i++) {
                    swiper.slides[i].style.transition = speed + "ms";
                    swiper.slides[i].querySelector(".slide-inner").style.transition =
                        speed + "ms";
                }
            }
        }
    };

    var swiper = new Swiper(".swiper-container", swiperOptions);

    // masonry effect
    $('.grid').imagesLoaded(function() {
        var $grid = $('.grid').isotope({
            itemSelector: '.items',
            percentPosition: true,
            masonry: {
                columnWidth: '.items',
            }
        });
    });

    // Single gallery slider
    function productGallary() {
        if ($('.product-active').length && $('.product-thumbnil-active').length) {

            var $sync1 = $(".product-active"),
                $sync2 = $(".product-thumbnil-active"),
                flag = false,
                duration = 500;

            $sync1
                .owlCarousel({
                    items: 1,
                    margin: 0,
                    nav: false,
                    dots: false
                })
                .on('changed.owl.carousel', function(e) {
                    if (!flag) {
                        flag = true;
                        $sync2.trigger('to.owl.carousel', [e.item.index, duration, true]);
                        flag = false;
                    }
                });

            $sync2
                .owlCarousel({
                    margin: 10,
                    items: 3,
                    nav: true,
                    dots: false,
                    navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
                    center: false,
                    responsive: {
                        0: {
                            items: 2,
                            autoWidth: false
                        },
                        400: {
                            items: 2,
                            autoWidth: false
                        },
                        500: {
                            items: 2,
                            center: false,
                            autoWidth: false
                        },
                        600: {
                            items: 3,
                            autoWidth: false
                        },
                        1200: {
                            items: 3,
                            autoWidth: false
                        }
                    },
                })
                .on('click', '.owl-item', function() {
                    $sync1.trigger('to.owl.carousel', [$(this).index(), duration, true]);

                })
                .on('changed.owl.carousel', function(e) {
                    if (!flag) {
                        flag = true;
                        $sync1.trigger('to.owl.carousel', [e.item.index, duration, true]);
                        flag = false;
                    }
                });

        };
    }

    productGallary();


    // testmonial-active
    $('.testmonial-active').owlCarousel({
        margin: 15,
        loop: true,
        autoplay: true,
        autoplayTimeout: 5000,
        nav: false,
        smartSpeed: 1000,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        responsive: {
            0: {
                items: 1
            },
            450: {
                items: 1
            },
            768: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });

    // featured-active
    $('.featured-active').owlCarousel({
        margin: 30,
        loop: true,
        autoplay: true,
        autoplayTimeout: 5000,
        nav: true,
        smartSpeed: 1000,
        navText: ['<i class="fa fa-long-arrow-left"></i>', '<i class="fa fa-long-arrow-right"></i>'],
        responsive: {
            0: {
                items: 1
            },
            450: {
                items: 1
            },
            768: {
                items: 2
            },
            1000: {
                items: 3
            },
            1200: {
                items: 4
            }
        }
    });
    // featured-active
    $('.featured-active2').owlCarousel({
        margin: 30,
        loop: true,
        autoplay: true,
        autoplayTimeout: 5000,
        nav: true,
        smartSpeed: 1000,
        navText: ['<i class="fa fa-long-arrow-left"></i>', '<i class="fa fa-long-arrow-right"></i>'],
        responsive: {
            0: {
                items: 1
            },
            450: {
                items: 1
            },
            768: {
                items: 2
            },
            1000: {
                items: 2
            },
            1200: {
                items: 3
            }
        }
    });


    /*==========================================================================
           WHEN DOCUMENT LOADING
    ==========================================================================*/


    // // stickey menu
    $(window).on('scroll', function() {
        var scroll = $(window).scrollTop(),
            mainHeader = $('#sticky-header'),
            mainHeaderHeight = mainHeader.innerHeight();

        // console.log(mainHeader.innerHeight());
        if (scroll > 265) {
            $("#sticky-header").addClass("sticky-menu");
        } else {
            $("#sticky-header").removeClass("sticky-menu");
        }
    });

    /*--------------------------
     scrollUp
    ---------------------------- */
    $.scrollUp({
        scrollText: '<i class="fa fa-arrow-up"></i>',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'fade'
    });

    // smttoh-scroll
    function scrollSpeed() {
        $.scrollSpeed(200, 800);
    };

    /*----------------------------
     price-slider active
    ------------------------------ */
    $("#slider-range").slider({
        range: true,
        min: 0,
        max: 5000,
        values: [0, 0],
        slide: function(event, ui) {
            $("#amount").val(ui.values[0] + " - " + ui.values[1]);
        }
    });

    // $(function() {
    //     var min = $("#min");
    //     var max = $("#max");

    //     $("#slider-range").slider({
    //         range: true,
    //         min: 0,
    //         max: 200,
    //         values: [0, 0],
    //         slide: function(event, ui) {
    //             min.val(ui.values[0]);
    //             max.val(ui.values[1]);
    //             $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
    //         }
    //     });

    //     min.val($("#slider-range").slider("values", 0));
    //     max.val($("#slider-range").slider("values", 1));
    // });


    $("#amount").val($("#slider-range").slider("values", 0) +
        " - " + $("#slider-range").slider("values", 1));
    /*-- price range End --*/

    /*==================================
            LOAD MORE JQUERY
    ================================== */

    /*-----------------------
       cart-plus-minus-button
     -------------------------*/
    $(".cart-plus-minus").append('<div class="dec qtybutton">-</div><div class="inc qtybutton">+</div>');
    $(".qtybutton").on("click", function() {
        var $button = $(this);
        var oldValue = $button.parent().find("input").val();
        if ($button.text() == "+") {
            var newVal = parseFloat(oldValue) + 1;
        } else {
            // Don't allow decrementing below zero
            if (oldValue > 0) {
                var newVal = parseFloat(oldValue) - 1;
            } else {
                newVal = 0;
            }
        }
        $button.parent().find("input").val(newVal);
    });
    /*====================================================
                    load-function
    ====================================================*/

    $(window).on('load', function() {
        /*-- preloader ---*/
        $('.preloader-wrap').fadeOut();
        /*-- Two Col EqHeight---*/
        /*-- Scroll Speed---*/
        productGallary();

        $('#popup-subscribe').modal('show');
    });



    $(window).on("scroll", function() {
        /*-- preloader ---*/
        $('.preloader-wrap').fadeOut();
        productGallary();
    });

    /*-----------------------------
    14. Ajax MailChip
    ------------------------------- */
    $('#mc-form').ajaxChimp({
        url: 'http://www.wpocean.us13.list-manage.com/subscribe/post?u=e9d729be03847d1a66b143bd2&amp;id=21ac2a3302', //Set Your Mailchamp URL
        callback: function(resp) {
            if (resp.result === 'success') {
                $('.sform input, .sform .subscribe-btn').fadeOut();
            }
        }
    });

    /*---------------------
    // Ajax Contact Form
    --------------------- */




    /*------------------------------------------
        = COUNTDOWN CLOCK
-------------------------------------------*/
    if ($("#clock").length) {
        $('#clock').countdown('2022/12/25', function(event) {
            var $this = $(this).html(event.strftime('' +
                '<div class="box"><div>%D</div> <span>month</span> </div>' +
                '<div class="box"><div>%D</div> <span>Days</span> </div>' +
                '<div class="box"><div>%H</div> <span>Hours</span> </div>' +
                '<div class="box"><div>%M</div> <span>Mins</span> </div>' +
                '<div class="box"><div>%S</div> <span>Secs</span> </div>'));
        });
    }

})(jQuery);
