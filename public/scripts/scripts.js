$(function () {

	$(window).bind("resize", function () {
		console.log($(this).width())
		if ($(this).width() < 900) {
			$('#jumbotron').removeClass('top-50').removeClass('start-50').removeClass('translate-middle').addClass("top-0").addClass("start-50").addClass("translate-middle-x")
		}
		else {
			$('#jumbotron').removeClass("top-0").removeClass("start-50").removeClass("translate-middle-x").addClass('top-50').addClass('start-50').addClass('translate-middle')
		}
	})
})