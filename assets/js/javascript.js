
$(document).ready(function () {
    $('.special-offers_slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: true,
    });

    $('div.small').click(function() {
        var bigHtml = $('div.large').html();
        var smallHtml = $(this).html();

        $('div.large').html(smallHtml);
        $('div.small').html(bigHtml);
    });

});

function myFunction() {
    var x = document.getElementById("password");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}