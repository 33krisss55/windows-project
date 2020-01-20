$('.menu-title').on('click', function() {
    $(this).parent('.menu-item').toggleClass('is-active');
    $(this).next('.menu-hidden-list').toggleClass('is-active');
});