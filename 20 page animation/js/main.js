const title = document.querySelector('h1');
const btn = document.querySelector('.btn');
const img = document.querySelector('img');
const bg = document.querySelector('.bg');
var tl = gsap.timeline();

tl.from(img, {
        duration: 1,
        height: 0,
        top: '50%'
    }, "+=0.5")
    .to(img, {
        duration: 1,
        width: 980
    })
    .from(bg, {
        duration: 1,
        width: 0
    }, "-=0.5")
    .from(title, {
        duration: 1,
        opacity: 0,
        x: 50
    }, "-=0.5")
    .from(btn, {
        duration: 1,
        opacity: 0,
        x: -50
    }, "-=1");
