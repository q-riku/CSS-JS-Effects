$(function(){
    $('.btn').click(function(){
        $(this).toggleClass('click');
        $('ul li').toggleClass('open');
    });
});