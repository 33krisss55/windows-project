$('.menu-title').on('click', function() {
    $(this).parent('.menu-item').toggleClass('is-active');
    $(this).next('.menu-hidden-list').toggleClass('is-active');
});

$('.detail').on('click', function() {
    $(this).next('.catalog__slide-describe-hidden').toggleClass('is-active');
    $('.overlay').toggleClass('is-active');
});
$('.fas.fa-times').on('click', function() {
    $('.catalog__slide-describe-hidden').removeClass('is-active');
    $('.overlay').removeClass('is-active');
});

$('.catalog').owlCarousel({
    loop:true,
    margin:30,
    nav:true,
    navText:false,
    dots:true,
    responsive:{
        0:{
            items:3,
            nav:true
        },
        500:{
            items:3,
            nav:true
        },

        800:{
            items:3,
            nav:true
        },
        1200:{
            items:3,
            nav:true
        }
    }
});

$('.banner').owlCarousel({
    loop:true,
    items: 1,
    margin:0,
    nav:true,
    navText:false,
    dots:true
});