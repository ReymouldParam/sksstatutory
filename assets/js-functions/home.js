//=========================================
// Services Scroll Animation
//=========================================

$(function () {
    const cards = document.querySelectorAll(".service-card");
    const scrollContainer = document.querySelector(".services-right");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("active");
                }
            });
        },
        {
            root: scrollContainer,
            threshold: 0.3
        }
    );

    cards.forEach((card) => observer.observe(card));
});


//=========================================
// Marquee Animation
//=========================================

$(function () {

    const $content = $(".marquee-content");

    $content.append($content.html());

    let position = 0;
    const speed = 1;

    function animate() {

        position -= speed;

        if (position <= -($content[0].scrollWidth / 2)) {
            position = 0;
        }

        $content.css("transform", `translateX(${position}px)`);

        requestAnimationFrame(animate);

    }

    animate();

});


//=========================================
// Choose Process Animation
//=========================================

$(function () {

    function restartAnimation() {

        $(".choose-process").removeClass("run");

        void $(".choose-process")[0].offsetWidth;

        $(".choose-process").addClass("run");

    }

    restartAnimation();

    setInterval(function () {

        $(".circle").css("animation", "none");
        $(".connector").css("animation", "none");
        $(".choose-process").css("animation", "none");

        void document.body.offsetWidth;

        $(".choose-process").css("animation", "slideRow 10s linear infinite");

        $(".choose-item:nth-child(1) .circle")
            .css("animation", "circleReveal .8s .3s forwards,pulseGlow 2s 1.5s infinite");

        $(".choose-item:nth-child(3) .circle")
            .css("animation", "circleReveal .8s 1.1s forwards,pulseGlow 2s 2.3s infinite");

        $(".choose-item:nth-child(5) .circle")
            .css("animation", "circleReveal .8s 1.9s forwards,pulseGlow 2s 3.1s infinite");

        $(".choose-item:nth-child(7) .circle")
            .css("animation", "circleReveal .8s 2.7s forwards,pulseGlow 2s 3.9s infinite");

        $(".connector:nth-child(2)")
            .css("animation", "arrowReveal .6s .8s forwards");

        $(".connector:nth-child(4)")
            .css("animation", "arrowReveal .6s 1.6s forwards");

        $(".connector:nth-child(6)")
            .css("animation", "arrowReveal .6s 2.4s forwards");

    }, 10000);

});


//=========================================
// Testimonial Slider
//=========================================

$(function () {

    $(".testimonial-slider").slick({

        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 700,
        arrows: false,
        dots: false,
        pauseOnHover: false,

        responsive: [

            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2
                }
            },

            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            }

        ]

    });

});


//=========================================
// Numeric Counter
//=========================================

$(function () {

    let started = false;

    $(window).on("scroll", function () {

        if (started) return;

        const sectionTop = $(".hero-stats").offset().top;
        const windowBottom = $(window).scrollTop() + $(window).height();

        if (windowBottom > sectionTop - 100) {

            started = true;

            $(".counter").each(function () {

                const $this = $(this);
                const target = parseInt($this.data("count"));

                $({ countNum: 0 }).animate({

                    countNum: target

                }, {

                    duration: 2000,
                    easing: "swing",

                    step: function () {

                        if (target >= 1000) {

                            if (this.countNum >= 1000) {
                                $this.text(Math.floor(this.countNum / 1000) + "K+");
                            } else {
                                $this.text(Math.floor(this.countNum));
                            }

                        } else {

                            $this.text(Math.floor(this.countNum) + "+");

                        }

                    },

                    complete: function () {

                        if (target >= 1000) {
                            $this.text((target / 1000) + "K+");
                        } else {
                            $this.text(target + "+");
                        }

                    }

                });

            });

        }

    });

    $(window).trigger("scroll");

});

// Banner section animation
document.addEventListener('DOMContentLoaded', function () {
    const heroLeft = document.querySelector('.hero-left');
    const heroRight = document.querySelector('.hero-right');

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                observer.unobserve(entry.target); // animate only once
            }
        });
    }, {
        threshold: 0.2 // fires when 20% of the element is visible
    });

    observer.observe(heroLeft);
    observer.observe(heroRight);
});

// About us section
document.addEventListener('DOMContentLoaded', function () {
    const aboutSection = document.querySelector('.about-section');
    const aboutContent = document.querySelector('.about-content');
    const aboutImage = document.querySelector('.about-image');

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                aboutContent.classList.add('animate-in');
                aboutImage.classList.add('animate-in');
                observer.unobserve(entry.target);
            }
        });
    }, {
        root: null,
        rootMargin: '0px 0px -150px 0px',
        threshold: 0
    });

    observer.observe(aboutSection);
});