define(function(require, exports) {
	var $ = require("jquery");
	var validate=require('jquery.validate.min');
	var login=require("login");
	var style=require("style");
	
	function menu(){
		if($(".menu_zone").hasClass('top_to_down')){
			$(".menu_zone").removeClass('top_to_down');
			$(".menu_zone").addClass('down_to_top');
			$(".menu_zone").slideUp("fast");
			$(".cover").fadeOut("fast");
		}else if($(".menu_zone").hasClass('down_to_top')){
			$(".menu_zone").removeClass('down_to_top')
			$(".menu_zone").addClass('top_to_down');
			$(".menu_zone").slideDown("fast");
			$(".cover").fadeIn("slow");
		}else{
			$(".menu_zone").addClass('top_to_down');
			$(".menu_zone").slideDown("fast");
			$(".cover").fadeIn("fast");
		}
	}
	$(".menu_click").click(function(event) {
		menu()

	});
	$(document).bind("click",function(e){

        if($(e.target).closest(".menu_zone").length == 0&& $(e.target).closest(".menu_click").length == 0){

            if($(".menu_zone").hasClass('top_to_down')){
				$(".menu_zone").removeClass('top_to_down');
				$(".menu_zone").addClass('down_to_top');
				$(".menu_zone").slideUp("fast");
				$(".cover").fadeOut("fast");
			}
        }
    })
	var slick = require("slick");
    $(".slider").slick({
    	dots: true,
    	arrows:false
    });
});