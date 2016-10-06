function service_w() {
	//Offers size
	var count_li = jQuery('.offers_line1 li').length;
	
	var nav_w = jQuery('.offers_line1 ul').width();
	var nav_w_li = nav_w/(count_li);
	
	jQuery('.offers_line1 li').css('width', nav_w_li + 'px');
	
	//Offers size2
	var count_li = jQuery('.offers_line2 li').length;
	
	var nav_w = jQuery('.offers_line2 ul').width();
	var nav_w_li = nav_w/(count_li);
	
	jQuery('.offers_line2 li').css('width', nav_w_li + 'px');
}


jQuery(window).bind('resize',function() {
	
	//Offers size
	service_w();
	
});

$(document).ready(function(){
	//Offers size
	service_w();
	
	
	//build dropdown
	$("<select />").appendTo("nav#main_menu div");
	
	// Create default option "Go to..."
	$("<option />", {
	   "selected": "selected",
	   "value"   : "",
	   "text"    : "Please choose page"
	}).appendTo("nav#main_menu select");	
	
	// Populate dropdowns with the first menu items
	$("nav#main_menu li a").each(function() {
	 	var el = $(this);
	 	$("<option />", {
	     	"value"   : el.attr("href"),
	    	"text"    : el.text()
	 	}).appendTo("nav#main_menu select");
	});
	
	//make responsive dropdown menu actually work			
  	$("nav#main_menu select").change(function() {
    	window.location = $(this).find("option:selected").val();
  	});
	
	//Iframe transparent
	$("iframe").each(function(){
		var ifr_source = $(this).attr('src');
		var wmode = "wmode=transparent";
		if(ifr_source.indexOf('?') != -1) {
		var getQString = ifr_source.split('?');
		var oldString = getQString[1];
		var newString = getQString[0];
		$(this).attr('src',newString+'?'+wmode+'&'+oldString);
		}
		else $(this).attr('src',ifr_source+'?'+wmode);
	});
			
	//Twitter Setup
	$('.tweet_module').tweet({
		modpath: 'twitter/',
		count: 2,
		username : 'your_name'
	 });
	
	//PrettyPhoto
	$("a[rel^='prettyPhoto']").prettyPhoto();
	
	//Image hover
	$(".recent_gal_block li, .video_in, .post_img, .post").live('mouseover',function(){
			var info=$(this).find("img");
			info.stop().animate({opacity:0.5},100);
			$(".preloader").css({'background':'none'});
		}
	);
	$(".recent_gal_block li, .video_in, .post_img, .post").live('mouseout',function(){
			var info=$(this).find("img");
			info.stop().animate({opacity:1},100);
			$(".preloader").css({'background':'none'});
		}
	);
	
	
	//Planning effect
	$(".planning a").hover(
		function () {
			$(this).addClass("serv_block_in_hover");
		}
	);
	$(".planning a").hover(
		function () {
			$('.planning a').removeClass("serv_block_in_hover");
				$(this).addClass("serv_block_in_hover");
			}
	);
	
	
							
});





