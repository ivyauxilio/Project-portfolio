

/*----- Owl Carousel Testimonials ----

$(function () {

    $("#customers-testimonials").owlCarousel({
        items:1,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true
        
    });

});

$(document).ready(function () {
  $(".navbar-nav li a").click(function(event) {
    $(".navbar-collapse").collapse('hide');
  });
});

$(function() {
    
    $(".navbar-nav li a").click(function(event) {
        $(".navbar-collapse").collapse('hide');
  });
    
});*/

$('.nav a').click(function(){
    $('.nav-collapse').collapse('hide');
});

/*----- footer section ----
//show and hide navigation 

$(function(){
    
    $(window).scroll(function(){
        
        if($(this).scrollTop() < 50 ){
           //hide
            $("nav").removeClass("seven-top-nav");    
           
        }else{
           //show
           $("nav").addClass("seven-top-nav");
        }
        
    });
    
    
});

*/



/*----- Smooth scrolling ----*/


$(function(){
    
   $("a.smooth-scroll").click(function(event){
       
       event.preventDefault();
       
       // get/return id like #about, #work etc.
       var section = $(this).attr("href");
       
       $('html, body').animate({
           
           scrollTop: $(section).offset().top
           
       }, 1250, "easeInOutExpo");
       
   }); 
    
});


/*----- nav opacity ----*/

$(function(){
    
    $(window).scroll(function(){
        
        if($(this).scrollTop() > 0 ){
           //hide
            $("nav").css('opacity', 0.8);    
           
        }else{
           //show
           $("nav").css('opacity', 1);
        }
        
    });
    
    
});











