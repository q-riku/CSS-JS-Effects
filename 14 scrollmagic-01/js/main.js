$(function () {
    var controller = new ScrollMagic.Controller();

    var scene01 = new ScrollMagic.Scene({
            triggerElement: '#sec01 ul',
            triggerHook: 0.5,
            offset: -100,
            reverse: true
        })
        .setClassToggle('#sec01 ul li', 'fadeIn')
        .addIndicators()
        .addTo(controller)
        ;

    var scene02 = new ScrollMagic.Scene({
        triggerElement: '#sec02 div.text h2',
        triggerHook: 0.5,
        offset: -100,
        reverse: false
    })
    .setClassToggle('#sec02 div.bg', 'show1')
    .addIndicators()
    .addTo(controller)
    ;

    var scene03 = new ScrollMagic.Scene({
        triggerElement: '#sec02 div.text h2',
        triggerHook: 0.5,
        offset: -100,
        reverse: false
    })
    .setClassToggle('#sec02 div.text', 'show2')
    .addTo(controller)
    ;

    var scene04 = new ScrollMagic.Scene({
        triggerElement: '#sec03',
        triggerHook: 0.5,
        offset: 300
    })
    .setClassToggle('#sec03', 'show')
    .addIndicators()
    .addTo(controller)
    ;
});