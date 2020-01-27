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
    $("#navcertifications").click(function() {
        $('html, body').animate({
            scrollTop: $("#certifications").offset().top
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
    $('.con1').waypoint(function(direction){
        $('.con1').addClass('animated fadeInDown fast');
    },{
        offset:"200px"
    });

    $('.con2').waypoint(function(direction){
        $('.con2').addClass('animated fadeInDown faster');
    },{
        offset:"500px"
    });
    
    
    

});
