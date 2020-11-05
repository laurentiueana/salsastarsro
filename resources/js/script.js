
// Set the date we're counting down to
var countDownDate = new Date("Oct 24, 2020 16:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

    // Get todays date and time
    var now = new Date().getTime();

    // Find the distance between now an the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Output the result in an element with id="data"
    document.getElementById("data").innerHTML = days + " zile " + hours + " ore "
    + minutes + " min. " + seconds + " s   ";

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("data").innerHTML = "Event ended ";
    }
}, 1000);

$(document).ready(function() {
     /* Mobile navigation */
    $('.js--nav-icon').click(function() {
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon i');

        nav.slideToggle(200);

        if (icon.hasClass('ion-navicon-round')) {
            icon.addClass('ion-close-round');
            icon.removeClass('ion-navicon-round');
        } else {
            icon.addClass('ion-navicon-round');
            icon.removeClass('ion-close-round');
        }
    });

    $('.card__side--front').on('click', function() {
        $(this).fadeOut(700);
    });

    $('.card__side--back').on('click', function() {
        $('.card__side--front').fadeIn(700);
    });

    $('.lang').on('click', function(){
        $.ajax('details_en.html')
        .done(function(response){
            $('#details').html(response);
        });

        $.ajax('menu_en.html')
        .done(function(response){
            $('#menu').html(response);
        });

        $.ajax('artists_en.html')
        .done(function(response){
            $('#artists').html(response);
        });

        $.ajax('program_en.html')
        .done(function(response){
            $('#program').html(response);
        });

        // $.ajax('contact_en.html')
        // .done(function(response){
        //     $('#contact').html(response);
        // });
    })
})

