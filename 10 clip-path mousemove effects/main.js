var pos = document.documentElement;
pos.addEventListener("mousemove", function (e) {
    pos.style.setProperty('--x', e.clientX + "px");
    pos.style.setProperty('--y', e.clientY + "px");
});