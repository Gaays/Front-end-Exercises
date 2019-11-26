window.onload = function() {
	let productCard = $(".product-card");
	let productImg = $(".product-img");
	let span = $(".product-color span");
	// console.log(span)
	span.click(function(){
		$(".product-color span").removeClass("active");
		$(this).addClass("active");
		$(".product-img").css("background-image",$(this).attr("data-url"))
		$("body").css("background",$(this).attr("data-color"));
		console.log($(this).data("url"));
	});

}
