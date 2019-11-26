window.onload = function() {
	let productCard = $(".product-card");
	let productImg = $(".product-img");
	let span = $(".product-color span");
	// console.log(span)
	span.click(function() {
		let color = $(this).attr("data-color"),
			img = $(this).attr("data-url");
		$(".product-color span").removeClass("active");
		$(this).addClass("active");
		productImg.css("background-image", img);
		$("body").css("background", color);
		$(".cart").css("color", color);

		console.log($(this).data("url"));
	});

}
