/*This is my JS file*/
//The code below is for parallax scrolling of background image

(function() {
    var myParallax = document.querySelectorAll(".bgImage"), speed = 0.3;
    
    window.onscroll=function(){
        myParallax.forEach(function(elP) {
            
            var windowYOffset = - window.pageYOffset, elPBackgroundPos = "50%" + (windowYOffset * speed) + "px";
            
            elP.style.backgroundPosition = elPBackgroundPos;
        });
    };
})();

//Thia code is for the top navigation bar to appear on scroll

$(window).scroll(function() {
   
    var wScroll = $(this).scrollTop();
    
    
    
    if (wScroll > $(".logoC").offset().top) {
        
        $(".navC").addClass("navShowing");
    } else if (wScroll < $(".logoC").offset().top) {
        $(".navC").removeClass("navShowing");
    }
    
    //To bring the images one by one with animation
if (wScroll > $(".productBox").offset().top - ($(window).height()/1.3)) {

    $(".productBox").each(function(i){
        
        setTimeout(function(){
            
            $(".productBox").eq(i).addClass("isShowing");
            
        }, 150 * (i+1));
        });
    }

    
    
    
});


/*
smooth scrolling
*/

$(function() {
    $('.navC a, .scrollDownC a').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop:
            $($anchor.attr('href')).offset().top - 100
        }, 1000);
        event.preventDefault();
        });
    });

/*Make nav fixed at top and highlight the current link or active link*/

$(function() {
    
    var section1C = $("#home").offset().top + 400;
    var section2C = $("#products").offset().top + 900;
    var section3C = $("#sales").offset().top + 600;
    var section4C = $("#about").offset().top + 200;
    var section5C = $("#contact").offset().top;
    
    var activeLink;
    $(document).on("scroll", function() {
        
        var scrollUp = $(document).scrollTop();
        
        var activeLink;
        
        if (scrollUp <= section1C){
            
            activeLink = $(".menu-items > li:nth-child(1)");
        
        } else if (scrollUp < section2C){
            
            activeLink = $(".menu-items > li:nth-child(2)");
        }  else if (scrollUp < section3C){
            
            activeLink = $(".menu-items > li:nth-child(5)");
        } else if (scrollUp < section4C){
            
            activeLink = $(".menu-items > li:nth-child(3)");
        } else if (scrollUp < section5C){
            
            activeLink = $(".menu-items > li:nth-child(4)");
        }
        
        activeLink.addClass("current");
        $(".menu-items > li").not(activeLink).removeClass("current");
    });
});
