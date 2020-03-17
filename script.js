var btn = $('#button');

$(window).scroll(function () {
    if ($(window).scrollTop() > 100) {
        btn.addClass('show');
    } else {
        btn.removeClass('show');
    }
});

btn.on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: 0
    }, '100');
});


$(".category").click(function () {

    $(".category").removeClass('active');
    $(this).addClass('active');


    var cat = $(this).attr('id');

         $( ".project-cards" ).fadeOut();
            $( "."+cat).parent().fadeIn();
         $( "div" ).filter( "."+cat).css("display","block");



});




//$(document).ready(function() {
//
//  // Check for click events on the navbar burger icon
//  $(".navbar-burger").click(function() {
//
//      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
//      $(".navbar-burger").toggleClass("is-active");
//      $(".navbar-menu").toggleClass("is-active");
//
//  });
//
//
//
//
//
//});
