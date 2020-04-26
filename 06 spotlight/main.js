$(document).mousemove(function (e) {
    var x = e.pageX;
    var y = e.pageY;

    $('.cursor').css('background', 'radial-gradient(circle at ' + x + 'px ' + y + 'px, transparent, black 30%)');

});