$(document).ready(function () {
    $('#pagepiling').pagepiling({
        direction: 'vertical',
        anchors: ['sec1', 'sec2', 'sec3', 'sec4'],
        menu: '#myMenu',
        navigation: {
            'textColor': '#fff',
            'bulletsColor': '#000',
            'position': 'left',
            'tooltips': ['Landscape', 'Architecture', 'Sunrise', 'Sunset']
        }
    });
});