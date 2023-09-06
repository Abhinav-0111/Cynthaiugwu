const scroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true
});

var curser = document.querySelector(".curser")
var main= document.querySelector(".main")
function mousescroll() {
    main.addEventListener("mousemove", function (dets) {
        curser.style.transform = `translate(${dets.x -5}px  , ${dets.y -5}px)`;
    })
}
mousescroll();

// circleMouseFollower();

// function widemousescroll() {
//     var xscale = 1
//     var yscale = 1
//     var xprev = 0
//     var yprev = 0

//     document.addEventListener("mousemove", function (dets) {
//         xscale = gsap.utils.clamp(.8, 1.2, dets.x - xprev)
//         yscale = gsap.utils.clamp(.8, 1.2, dets.y - yprev)

//         xprev = dets.X;
//         yprev = dets.Y;
//         mousescroll(xscale,yscale);
//     })
// }
// function mousescroll(){
// document.addEventListener("mousemove", function (dets) {
//     curser.style.left = dets.x -5 + "px"
//     curser.style.top = dets.y -5 + "px"
// })
// }
// mousescroll();


// element.forEach(function (elem) {
//     elem.addEventListener("mousemove", function (dets) {
//         var diffy = dets.y - elem.getBoundingClientRect().top-160;
//         var diffx = dets.x - elem.getBoundingClientRect().left-200;

//         gsap.to(elem.querySelector("img"), {
//             opacity: 1,
//             ease: Power1,
//             top: diffy,
//             left:diffx
//         })
//     })
// })



gsap.from(".nav", {
    y: 10,
    opacity: 0,
    ease: Expo.easeInOut,
    duration: 1,
    stagger: .2,

})

gsap.to(".boundingelm", {
    y: 0,
    ease: Expo.easeInOut,
    duration: 2,
    stagger: .2,
    delay: -1
})
gsap.to(".boundingelm1", {
    y: 0,
    ease: Expo.easeInOut,
    duration: 2,
    stagger: .2,
    delay: -1
})
gsap.from(".herofooter", {
    y: -10,
    opacity: 0,
    ease: Expo.easeInOut,
    duration: 2,

})