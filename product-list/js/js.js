window.onload = function() {
	let productCard = $(".productCard"),
		productImg = $(".productImg"),
		span = $(".productColor span"),
		nextBtn = $(".nextBtn"),
		beforeBtn = $(".beforeBtn"),
		submitBtn = $(".submitBtn"),
		productPrice = $(".productPrice"),
		productSize = $(".productSize"),
		productInfo = $(".productInfo"),
		nextFlag = 1;

	// productImg.offset();
	console.log(productImg.offset(), productImg.width(), productImg.height())
	sizeTop = productImg.offset().top;
	sizeLeft = productImg.offset().left + 270;
	console.log(sizeLeft, sizeTop);
	productSize.css({
		top: sizeTop,
		left: sizeLeft
	})

	// productSize.offset(sizeTop+productImg.width(),sizeLeft+productImg.height())
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
			productPrice.removeClass("active");
			nextBtn.removeClass("active");
			productSize.addClass("active");
			beforeBtn.addClass("active");
			submitBtn.addClass("active");
			
			productSize.css({left:sizeLeft-500})
			nextFlag = 0;
		}

	});
	beforeBtn.click(function() {
		submitBtn.removeClass("active");
		beforeBtn.removeClass("active");
		nextBtn.addClass("active");
		productPrice.addClass("active");
		nextFlag = 1;
	});
}
