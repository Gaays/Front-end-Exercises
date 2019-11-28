window.onload = function() {
	let productCard = $(".productCard"),
		productImg = $(".productImg"),
		span = $(".productColor span"),
		nextBtn = $(".nextBtn"),
		beforeBtn = $(".beforeBtn"),
		submitBtn=$(".submitBtn"),
		productPrice=$(".productPrice"),
		productSize = $(".productSize"),
		productInfo = $(".productInfo"),
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
		// $(".cart").css("color", color);
		$(".next").css("color", color);
		$(".colorfulBtn").css("color", color);
	});
	nextBtn.click(function() {
		if (nextFlag) {
			productSize.css("transform", "translate(-50%, -50%) perspective(600px) rotateY(0deg)");
			productImg.css("transform", "translate(-50%, -50%) perspective(600px) rotateY(-180deg)");
			productPrice.removeClass("active");
			nextBtn.removeClass("active");
			beforeBtn.addClass("active");
			submitBtn.addClass("active");
			nextFlag = 0;
		}

	});
	beforeBtn.click(function() {
		submitBtn.removeClass("active");
		beforeBtn.removeClass("active");
		nextBtn.addClass("active");
		productPrice.addClass("active");
		productSize.css("transform", "perspective(600px) rotateY(180deg)");
		productImg.css("transform", " perspective(600px) rotateY(0deg)");
		nextFlag = 1;
	});
}
