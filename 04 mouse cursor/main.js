var cursor1 = document.getElementById("cursor1");
var cursor2 = document.getElementById("cursor2");
document.addEventListener('mousemove', function (e) {
    var x = e.clientX;
    var y = e.clientY;

    cursor1.style.left = x + "px";
    cursor1.style.top = y + "px";

    cursor2.style.left = x + "px";
    cursor2.style.top = y + "px";
});