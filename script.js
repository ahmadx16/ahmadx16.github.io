$(document).ready(function(){
    $("#navintro").click(function() {
        $('html, body').animate({
            scrollTop: $("#intro").offset().top
        }, 1000);
    });
    $("#naveducation").click(function() {
        $('html, body').animate({
            scrollTop: $("#education").offset().top
        }, 1000);
    });
    $("#navprojects").click(function() {
        $('html, body').animate({
            scrollTop: $("#projects").offset().top
        }, 1000);
    });
    $("#navexp").click(function() {
        $('html, body').animate({
            scrollTop: $("#exp").offset().top
        }, 1000);
    });
    $("#navaccomplishments").click(function() {
        $('html, body').animate({
            scrollTop: $("#accomplishments").offset().top
        }, 1000);
    });
    $("#navskillos").click(function() {
        $('html, body').animate({
            scrollTop: $("#skillos").offset().top
        }, 1000);
    });
    $("#navcontact").click(function() {
        $('html, body').animate({
            scrollTop: $("#contact").offset().top
        }, 1000);
    });
});
