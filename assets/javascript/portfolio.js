$(document).ready(function () {
    $("#portfolio-page").hide();
    $("#contact-page").hide();


    $("#portfolio").on("click", function () {
        $("#contact-page").hide();
        $("#about-page").hide();
        $("#portfolio-page").show();
    });

    $("#contact").on("click", function () {
        $("#about-page").hide();
        $("#portfolio-page").hide();
        $("#contact-page").show();
    });

    $("#about").on("click", function () {
        $("#portfolio-page").hide();
        $("#contact-page").hide();
        $("#about-page").show();
    });
});