$(function () {
    var controller = new ScrollMagic.Controller();

    var scene_top = new ScrollMagic.Scene({
            triggerElement: '.top',
            triggerHook: 0
        })
        .setPin('.top')
        .addIndicators()
        .addTo(controller);

    var scene_sec01 = new ScrollMagic.Scene({
            triggerElement: '#sec01',
            triggerHook: 0,
            duration: '300%'
        })
        .setPin('#sec01', {
            pushFollowers: true
        })
        .addIndicators()
        .addTo(controller)
        .on('progress', function (e) {
            var p1 = e.progress;
            var n = $('#sec01 ul li').length;
            var i = 1;

            if (p1 > 0.02) {
                $('#sec01 h2').addClass('fadeIn');
            } else {
                $('#sec01 h2').removeClass('fadeIn');
            }

            while (i <= n) {
                if (p1 > 0.07 * i) {
                    $('#sec01 ul li:nth-child(' + i + ')').addClass('on');
                } else {
                    $('#sec01 ul li:nth-child(' + i + ')').removeClass('on');
                }

                i++;
            }
        });

    var scene_sec02 = new ScrollMagic.Scene({
            triggerElement: '#sec02',
            triggerHook: 0,
            duration: '200%'
        })
        .setPin('#sec02')
        .addIndicators()
        .addTo(controller)
        .on('progress', function (e) {
            var p2 = e.progress;
            var percent = (p2 * 100).toFixed(0);
            var offset = 754 * (1 - p2);
            if (offset > 753) {
                offset = 753;
            }

            $('#percent').html(percent);
            $('svg circle:nth-child(2)').css('stroke-dashoffset',offset);
        });
});