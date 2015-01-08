define(["jquery", "smoothscroll", "cycle", "marquee"], function($) {
	// var vid = document.getElementById("vd1");
	// var vid2 = document.getElementById("vd2");
	// vid.volume = 0;
	// vid.play();
	// vid2.volume = 0;
	// vid2.play();


	// $('#casa').hover(function(){
	// 	vid.volume = 0.05;
	// }, function(){
	// 	vid.volume = 0;
	// })
	
	// $('#escritorio').hover(function(){
	// 	vid2.volume = 0.05;

	// }, function(){
	// 	vid2.volume = 0;

	// })

	$('#destaque .container').cycle({
		pager: '#destaque .marquee'
	});


	$('#destaque .marquee a').html('<img src="img/img_mini_cadeira1.jpg" alt="">')


	var movementStrength = 15;

	var height = movementStrength / $(window).height();
	var width = movementStrength / $(window).width();

	$(".vd").mousemove(function(e){
		  var pageX = e.pageX - ($(window).width() / 10);
		  var pageY = e.pageY - ($(window).height() / 10);

		  var newvalueX = width * pageX * -5;
		  var newvalueY = height * pageY * -5;

		  $(this).css("background-position", newvalueX+"px "+newvalueY+"px"); 
	});


	$(window).on('scroll', function(){
		var h = $(this).scrollTop();

		// $('header, #search').fadeOut();
		$('#home video').css('opacity', 1 - h/300)
		$('#plx').css('top', h * - 1);

		// clearTimeout( $.data( this, "scrollCheck" ) );
		// $.data( this, "scrollCheck", setTimeout(function() {
		// 	$('header, #search').fadeIn();
		// }, 250) );

		if(h > 350){
			$('header > .image').fadeOut()
			$('header').find('ul').css({
				'marginTop':0,
				'width': '100%' 
			})
		}else{
			$('header > .image').fadeIn()
			$('header').find('ul').css({
				'marginTop':'35px',
				'width': '80%' 
			})
		}
	})

	(function(d, s, id) {
	  var js, fjs = d.getElementsByTagName(s)[0];
	  if (d.getElementById(id)) return;
	  js = d.createElement(s); js.id = id;
	  js.src = "//connect.facebook.net/pt_BR/sdk.js#xfbml=1&appId=555703807807250&version=v2.0";
	  fjs.parentNode.insertBefore(js, fjs);
	}(document, 'script', 'facebook-jssdk'));

});