setInterval(function () {
	$('.slide_wrap ul').animate(
		{
			left: '-0px',
		},
		function () {
			$('.slide_wrap ul li').eq(0).appendTo('.slide_wrap ul');
			$('.slide_wrap ul').css({ left: 0 });
		}
	);
}, 3000);
