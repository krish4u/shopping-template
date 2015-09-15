$(document).ready(function(){
	console.log("jQuery loaded successfully !!!");

	// Cart expand and collapse
	$('.header__cart').on('click',function(){
		$('.cart').addClass('cart-is-visible');
	});

	$('.cart__trigger').on('click',function(){
		$('.cart').removeClass('cart-is-visible');
	});


	// Add the kg with + and -

	$('.count').val(0);

	$('.item-increase').on('click',function(){
		var catchCounter = $(this).prev('.count').val();
		parseInt(catchCounter);
		++catchCounter;
		$(this).prev('.count').val(catchCounter);
	});

	$('.item-decrease').on('click',function(){
		var catchCounter = $(this).next('.count').val();
		parseInt(catchCounter);
		--catchCounter;
		$(this).next('.count').val(catchCounter);
	});

});