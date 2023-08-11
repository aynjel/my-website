$(document).ready(function () {
    $('.nav-btn').on('click', function () {
        $('.nav-btn').hide();
        $('.nav-btn-close').show();
        // from right to left
        $('.nav-list-mobile').animate({
            width: 'toggle',
            right: '0'
        }, 500, 'swing');
        
    });

    $('.nav-btn-close').on('click', function () {
        $('.nav-btn').show();
        $('.nav-btn-close').hide();
        // from left to right
        $('.nav-list-mobile').animate({
            width: 'toggle',
            right: '-100%'
        }, 500, 'swing');
    });
});