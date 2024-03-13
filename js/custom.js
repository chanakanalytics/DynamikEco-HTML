$(window).on('load', function () {
    $('.loader').fadeOut();
});

AOS.init();

$(".control").click(function () {
    $("body").addClass("search-active");
    $(".input-search").focus();
});

$(".icon-close").click(function () {
    $("body").removeClass("search-active");
});




const new_arival_slide_top = new Swiper(".new_arival_slide_top", {
    speed: 1000,
    slidesPerView: 2.6,
    parallax: true,
    spaceBetween: 100,
    loop: true,

    // centeredSlides: true,
    autoplay: {
        delay: 200000,
        disableOnInteraction: true
    },
    pagination: {
        el: ".new_arival_slide_top_pagination",
        clickable: true
    },
    navigation: {
        nextEl: ".new_arival_slide_top_next",
        prevEl: ".new_arival_slide_top_prev"
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 30
        },
        991: {
            slidesPerView: 2.6,
            spaceBetween: 100
        },
    },
});

const new_arival_slide_bottom = new Swiper(".new_arival_slide_bottom", {
    speed: 1000,
    slidesPerView: 2.6,
    parallax: true,
    spaceBetween: 100,
    loop: true,

    // centeredSlides: true,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
        reverseDirection: true,
    },
    pagination: {
        el: ".new_arival_slide_bottom_pagination",
        clickable: true
    },
    navigation: {
        nextEl: ".new_arival_slide_bottom_next",
        prevEl: ".new_arival_slide_bottom_prev"
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 30
        },
        991: {
            slidesPerView: 2.6,
            spaceBetween: 100
        },
    },
});


const latest_product_sldier = new Swiper(".latest_product_sldier", {
    speed: 1000,
    slidesPerView: 3.9,
    parallax: true,
    spaceBetween: 30,
    loop: true,
    centeredSlides: true,
    effect: "coverflow",
    coverflowEffect: {
        rotate: 20,
        slideShadows: true
    },
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
        reverseDirection: false,
    },
    pagination: {
        el: ".latest_product_sldier_pagination",
        clickable: true
    },
    navigation: {
        nextEl: ".latest_product_sldier_next",
        prevEl: ".latest_product_sldier_prev"
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 30
        },
        991: {
            slidesPerView: 3.9,
            spaceBetween: 30
        },
    },
});

const latest_news_slide = new Swiper(".latest_news_slide", {
    speed: 2000,
    slidesPerView: 3,
    parallax: true,
    spaceBetween: 30,
    loop: false,
    centeredSlides: false,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
        reverseDirection: false,
    },
    pagination: {
        el: ".latest_news_slide_pagination",
        clickable: true
    },
    navigation: {
        nextEl: ".latest_news_slide_next",
        prevEl: ".latest_news_slide_prev"
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 30
        },
        991: {
            slidesPerView: 3,
            spaceBetween: 30
        },
    },
});


const mySwiper = new Swiper('.instagram_post_slide', {
    effect: 'coverflow',
    loop: 'true',
    slidesPerView: 'auto',
    centeredSlides: true,
    coverflowEffect: {
        slideShadows: true,
        rotate: 20,
        stretch: 0,
        depth: 350,
        modifier: 1,
    },
});


const instagram_post_slide = new Swiper(".instagram_post_slide", {
    speed: 1000,
    autoplay: {
        delay: 1000,
    },
    draggable: false,
    effect: 'coverflow',
    loop: 'false',
    slidesPerView: 3.5,
    centeredSlides: true,
    coverflowEffect: {
        slideShadows: true,
        rotate: 10,
        stretch: 10,
        depth: 200,
        modifier: 1.2,
    },
    pagination: {
        el: ".latest_news_slide_pagination",
        clickable: true
    },
    navigation: {
        nextEl: ".instagram_post_slide_next",
        prevEl: ".instagram_post_slide_prev"
    },
    breakpoints: {
        320: {
            slidesPerView: 1.5,
            spaceBetween: 30
        },
        991: {
            slidesPerView: 3.5,
            spaceBetween: 30
        },
    },
});


var swiper = new Swiper(".mobile_hero_slider_thumb", {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
});
var swiper2 = new Swiper(".mobile_hero_slider", {
    loop: true,
    spaceBetween: 10,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    thumbs: {
        swiper: swiper,
    },
});


var swiper = new Swiper(".product_uses_card_slide", {
    effect: "cards",
    grabCursor: true,
});




const initSlider = (selector, options = {}) => {
    const sliderContainers = document.querySelectorAll(selector);

    if (sliderContainers.length) {
        sliderContainers.forEach((container) => {
            const slider = container.querySelector(".swiper-container");
            const paging = container.querySelector(".js-paging");
            let prev;
            let next;

            if (paging) {
                prev = paging.querySelector(".js-paging-prev");
                next = paging.querySelector(".js-paging-next");
            }

            const swiper = new Swiper(slider, {
                loop: false,
                speed: 1000,
                slidesPerView: 4,
                centeredSlides: false,
                spaceBetween: 30,
                grabCursor: true,

                ...options
            });

            //            next.addEventListener("click", () => {
            //                swiper.slideNext(1000);
            //            });
            //            prev.addEventListener("click", () => {
            //                swiper.slidePrev(1000);
            //            });

            // Used for animations on slider dragging
            swiper.on("touchMove", ({
                el
            }) => {
                el.classList.add("dragged");
            });
            swiper.on("touchEnd", ({
                el
            }) => {
                el.classList.remove("dragged");
            });
        });
    }
};

initSlider(".js-slider");

//---------------------
// CURSOR CODE
//---------------------

// set the starting position of the cursor outside of the screen
let clientX = -100;
let clientY = -100;
let lastX = -100;
let lastY = -100;
const cursor = document.querySelector(".cursor");
const section = document.querySelector(".slider");

// Show/hide the cursor when it is over the section
if (section) {
    section.addEventListener("mouseenter", () => {
        cursor.classList.add("visible");
    });

    section.addEventListener("mouseleave", () => {
        cursor.classList.remove("visible");
    });
}

// function for linear interpolation of values
const lerp = (a, b, n) => {
    return (1 - n) * a + n * b;
};

const initCursor = () => {
    if (!cursor) return;

    // add listener to track the current mouse position
    document.addEventListener("mousemove", (e) => {
        clientX = e.clientX;
        clientY = e.clientY;
    });

    // transform the cursor to the current mouse position
    // use requestAnimationFrame() for smooth performance
    const render = () => {
        // lesser delta, greater the delay that the custom cursor follows the real cursor
        const delta = 0.1;
        lastX = lerp(lastX, clientX, delta);
        lastY = lerp(lastY, clientY, delta);

        cursor.style.transform = `translate(${lastX}px, ${lastY}px)`;

        requestAnimationFrame(render);
    };

    requestAnimationFrame(render);
};

initCursor();
