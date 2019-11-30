window.onload = function() {
	let productImg = $(".productImg"),
		span = $(".productColor span"),
		nextBtn = $(".nextBtn"),
		beforeBtn = $(".beforeBtn"),
		submitBtn = $(".submitBtn"),
		productPrice = $(".productPrice"),
		nextFlag = 1;

	// console.log(span)
	span.click(function() {
		let color = $(this).attr("data-color"),
			img = $(this).attr("data-url");
		console.log(color)
		$(".productColor span").removeClass("active");
		$(this).addClass("active");
		productImg.css("background-image", img);
		$("body").css("background", color);
		nextBtn.css("color", color);
		$(".next").css("color", color);
		$(".colorfulBtn").css("color", color);
	});
}
