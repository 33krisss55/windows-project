$('.menu-item').on('click', function() {
    $(this).children('.menu-item').toggleClass('is-active');
    $(this).children('.menu-hidden-list').toggleClass('is-active');
});

$('.catalog__btn .button').on('click', function() {
    $('.catalog-order').toggleClass('is-active');
    $('.overlay').toggleClass('is-active');
});
$('.fas.fa-times').on('click', function() {
    $('.catalog-order').removeClass('is-active');
    $('.overlay').removeClass('is-active');
});
$('.overlay').on('click', function() {
    $('.catalog-order').removeClass('is-active');
    $('.overlay').removeClass('is-active');
});

$('.banner').owlCarousel({
    loop:true,
    items: 1,
    margin:0,
    nav:true,
    navText:false,
    dots:true
});

// Открытие меню
$('.header__burger').on('click', function() {
    $('.menu').toggleClass('is-active');
});


$(document).ready(function() {
    $(".fancybox").fancybox();
});