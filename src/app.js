const h1 = document.querySelector(".main-header");
const h2 = document.querySelector(".main-header2");
const imgMain = document.querySelector(".img-container");
const h3 = document.querySelector(".main-header3");
const pMain = document.querySelector(".description");
const imgBreakfast = document.querySelector(".breakfast");
const btn = document.querySelectorAll(".btn-container");
const addOrderBtn = document.querySelectorAll(".add-order-btn");
const contact = document.querySelector(".contact-container");

//catering page
const addOrder = function buttonAddOrder() {
    alert('Order added to the cart!');
};

addOrderBtn.forEach(orderBtn => {
    orderBtn.addEventListener('click', addOrder);
});




//timeline animations

var tl = gsap.timeline({
    default: {
        // opacity: 0,
        ease: "linear",
        duration: 3,

    }
});
var menuTl = gsap.timeline({
    default: {
        // opacity: 0,
        ease: "linear",
        duration: 3,

    }
});
var teamTl = gsap.timeline({
    default: {
        // opacity: 0,
        ease: "linear",
        duration: 5,

    }
});
var resTl = gsap.timeline({
    default: {
        // opacity: 0,
        ease: "linear",
        duration: 5,

    }
});
var caterTl = gsap.timeline({
    default: {
        // opacity: 0,
        ease: "linear",
        duration: 5,

    }
});
var contactTl = gsap.timeline({
    default: {
        // opacity: 0,
        ease: "linear",
        duration: 5,

    }
});
//homepage animations
tl.fromTo(".main-header", { x: -100 }, {
    opacity: 1,
    x: 0,
});
tl.fromTo(".main-header2", { x: -100 }, {
    x: 0,
    opacity: 1,
});
tl.fromTo(".img-container", { y: 200 }, {
    opacity: 1,
    y: 0,
    duration: 1,

});
tl.fromTo(".main-header3", { y: 200 }, {
    opacity: 1,
    y: 0,
});
tl.fromTo(".sub-container", { y: 200 }, {
    opacity: 1,
    y: 0,
});
tl.fromTo(".btn-container", { x: -100 }, {
    opacity: 1,
    x: 0,
});
//menu page animations
menuTl.fromTo(".menu", { x: 0, }, {
    opacity: 1,

});
menuTl.fromTo(".menu-header", { x: -100 }, {
    duration: 1,
    x: 0,
    opacity: 1,
    ease: "elastic",

});

//team page animations
teamTl.fromTo(".team-img", { height: 0 }, {
    opacity: 1,
    height: 250,

});
teamTl.fromTo(".team-description", { x: -100 }, {
    opacity: 1,
    x: 0,

});

//reservation page animations
resTl.fromTo(".reservations-container", { y: -100 }, {
    opacity: 1,
    y: 0,

});
//catering page animations
caterTl.fromTo(".catering-container", { y: -100 }, {
    opacity: 1,
    y: 0,

});
//contact page animations
contactTl.fromTo(".contact-container", { x: -100 }, {
    opacity: 1,
    x: 0,

});