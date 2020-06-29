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




$(".about-modal").click(function () {

    $(".about").fadeIn();
     $(".mainpage").fadeOut();






});


$("#close").click(function () {

    $(".about").fadeOut();
     $(".mainpage").fadeIn();






});

$(".about-modal").click(function () {

    $(".about1").fadeIn();
     $(".mainpage1").fadeOut();






});

$("#close").click(function () {

    $(".about1").fadeOut();
     $(".mainpage1").fadeIn();






});
