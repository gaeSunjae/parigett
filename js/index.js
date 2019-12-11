$(function () {
	var w = $(window).width();
	$(window).resize(function () {
		w = $(window).width();
		if (w > 767) {
			$(".headBottom").css("right", 0);
		} else {
			$(".headBottom").css("right", "-100%");
		}
	})



	$(".hamBtn").click(function () {
		$(".headBottom").stop().animate({
			"right": 0
		}, 1000)
	})
	$(".closeBtn").click(function () {
		$(".headBottom").stop().animate({
			"right": "-100%"
		}, 1000)
	})

	/*$("#nav>li").click(function () {
		$(this).children(".sub").stop().slideToggle(500);
		$(this).siblings().children(".sub").stop().slideUp(500);

		$(this).toggleClass("active").siblings().removeClass("active");
	})*/
	
})
