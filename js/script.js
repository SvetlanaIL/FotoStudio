$('.portfolio__column').hover(
	function() {
		$(this).find('.photo__text').addClass('photo-active');
	},
	function() {
		$(this).find('.photo__text').removeClass('photo-active');
	}
);


$('.categories__item').click(function(event) {
		var i = $(this).data('filter');
	if (i == 1) {
		$('.portfolio__column').show();
	} else {
		$('.portfolio__column').hide();
		$('.portfolio__column.f_' + i).show();
	}
	$('.categories__item').removeClass('active');
	$(this).addClass('active');

	return false;
});

$('.blog__button').click(function(event) {
	$('.blog__three-column-2').css("display","flex");
	$('.blog__button').hide();


});