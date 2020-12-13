//Changes bootstrap classes on main page so jumbotron doesn't jump over navbar on mobi
$(document).ready(function () {
	console.log($(this).width())
	if ($(this).width() < 900) {
		$('#moveme').removeClass('top-50').removeClass('start-50').removeClass('translate-middle').addClass("top-0").addClass("start-50").addClass("translate-middle-x")
	}
	else {
		$('#moveme').removeClass("top-0").removeClass("start-50").removeClass("translate-middle-x").addClass('top-50').addClass('start-50').addClass('translate-middle')
	}
})


//nodemailer function

$('.contactForm').on('submit', (e) => {
	e.preventDefault();
	const name = $("#name").val().trim();
	const email = $('#email').val().trim();
	const text = $('#message').val().trim();

	const data = {
		name,
		email,
		text
	};
	console.log(data);
	swal("Thank you for your message! I will get back to you ASAP!").then(okay => {
		if (okay) {
			window.location.reload();
		}
	});
	// alert("Thank you for your message, I will get back to you as soon as I am able!")
	$.post('/email', data, function () {
		console.log('Server recieved our data');
	})
});