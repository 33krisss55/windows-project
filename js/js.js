$('.menu-title').on('click', function() {
    $(this).next('.menu-hidden-list').toggleClass('is-active');
});