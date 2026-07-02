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
            } else {
                aboutContent.classList.remove('animate-in');
                aboutImage.classList.remove('animate-in');
            }
        });
    }, {
        root: null,
        rootMargin: '0px 0px -150px 0px',
        threshold: 0
    });

    observer.observe(aboutSection);
});

// Why chooose us section 
document.addEventListener('DOMContentLoaded', function () {
    const whyProcess = document.querySelector('.why-process');
    const items = Array.from(whyProcess.children).filter(
        (el) => !el.classList.contains('static-item')
    );

    let timeouts = [];

    function clearAllTimeouts() {
        timeouts.forEach(function (t) {
            clearTimeout(t);
        });
        timeouts = [];
    }

    function playAnimation() {
        clearAllTimeouts();
        items.forEach(function (el, index) {
            const t = setTimeout(function () {
                el.classList.add('animate-in');
            }, index * 200);
            timeouts.push(t);
        });
    }

    function resetAnimation() {
        clearAllTimeouts();
        items.forEach(function (el) {
            el.classList.remove('animate-in');
        });
    }

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                playAnimation();
            } else {
                resetAnimation();
            }
        });
    }, {
        threshold: 0.2
    });

    observer.observe(whyProcess);
});

// ABOUT US PAGE SECTION
document.addEventListener('DOMContentLoaded', function () {
    const complianceContent = document.querySelector('.compliance-content');
    const complianceImage = document.querySelector('.compliance-image');

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                complianceContent.classList.add('animate-in');
                complianceImage.classList.add('animate-in');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.2
    });

    observer.observe(document.querySelector('.compliance-section'));
});

// EXPERIANCE SECTION
document.addEventListener('DOMContentLoaded', function () {
    const counters = document.querySelectorAll('.stats-section .counter');

    function animateCounter(el) {
        const target = parseInt(el.getAttribute('data-count'), 10);
        const suffix = el.textContent.replace(/[0-9]/g, ''); // grabs "+", "%", or "₹" prefix/suffix
        const isRupee = el.textContent.trim().startsWith('₹');
        const duration = 1500;
        const startTime = performance.now();

        function update(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const value = Math.floor(progress * target);

            el.textContent = isRupee ? '₹' + value : value + suffix.replace('₹', '');

            if (progress < 1) {
                requestAnimationFrame(update);
            } else {
                el.textContent = isRupee ? '₹' + target : target + suffix.replace('₹', '');
            }
        }

        requestAnimationFrame(update);
    }

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                counters.forEach(function (counter) {
                    animateCounter(counter);
                });
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.3
    });

    observer.observe(document.querySelector('.stats-section'));
});

// SERICES PAGE 
// SERVICES SECTION
$(function () {
    const $tabs = $('.tab-btn');
    const $rows = $('.service-row');

    let scrollspyEnabled = true;

    function setActiveTab(target) {
        $tabs.each(function () {
            $(this).toggleClass('active', $(this).data('target') === target);
        });
    }

    function filterServices(target) {
        if (target === 'all') {
            $rows.removeClass('hidden');
            scrollspyEnabled = true;
        } else {
            $rows.each(function () {
                $(this).toggleClass('hidden', $(this).attr('id') !== target);
            });
            scrollspyEnabled = false;
        }
    }

    // Remove any previously bound click handlers on these tabs before binding fresh ones
    $tabs.off('click.serviceTabs').on('click.serviceTabs', function () {
        const target = $(this).data('target');

        setActiveTab(target);
        filterServices(target);

        const $section = $('.services-list-section');
        if ($section.length) {
            $('html, body').animate({
                scrollTop: $section.offset().top
            }, 500);
        }
    });

    // Scrollspy: only runs when "All" is active (all rows visible)
    const observer = new IntersectionObserver(function (entries) {
        if (!scrollspyEnabled) return;

        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                setActiveTab(id);
            }
        });
    }, {
        rootMargin: '-40% 0px -50% 0px',
        threshold: 0
    });

    $rows.each(function () {
        observer.observe(this);
    });
});