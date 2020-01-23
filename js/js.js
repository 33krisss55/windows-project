$('.menu-item').on('click', function() {
    $(this).children('.menu-item').toggleClass('is-active');
    $(this).children('.menu-hidden-list').toggleClass('is-active');
});

$('.detail').on('click', function() {
    $(this).next('.catalog__slide-describe-hidden').toggleClass('is-active');
    $('.overlay').toggleClass('is-active');
});
$('.fas.fa-times').on('click', function() {
    $('.catalog__slide-describe-hidden').removeClass('is-active');
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
