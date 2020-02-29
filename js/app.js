$(document).ready(function(){
    $(".mobile_menu").on("click", function(){
        $(this).toggleClass("clicked");
    }); 
    $(".mobile_menu").on("click", function(){
        $(".menu").slideToggle();  
    });
	 $('.slider').slick({
		autoplay: true,
        arrows: true
    });
	   $(window).scroll(function(){
        if($(window).scrollTop()>100){
            $(".strelica").show();
        }else{
            $(".strelica").hide();
        }
    }); 
});