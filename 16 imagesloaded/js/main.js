$(function () {
    var imgNum = imagesLoaded('body').images.length;
    var progressNowPosition = 0;
    var loadedImg = 0;
    imagesLoaded('body').on('progress', function () {
        loadedImg++;
    });

    var Timer = setInterval(progressMonitor, 1000 / 40);

    function progressMonitor() {
        var progressPosition = (loadedImg / imgNum) * 100;
        progressNowPosition += (progressPosition - progressNowPosition) * 0.1;
        $('.loadingbar div').css('width', progressNowPosition + '%');
        $('.num span').text(Math.floor(progressNowPosition));

        if (progressNowPosition >= 100) {
            clearInterval(Timer);
            setTimeout(function () {
                $('.loading').fadeOut(1000);
            }, 1000);
        }

        if (progressNowPosition > 99.9) {
            progressNowPosition = 100;
        }
    }

});

$(function(){
    $('a').click(function(){
        location.reload(true);
    });
});