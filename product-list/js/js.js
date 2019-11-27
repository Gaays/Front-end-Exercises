window.onload = function() {
	let productCard = $(".productCard");
	let productImg = $(".productImg");
	let span = $(".productColor span");
	// console.log(span)
	span.click(function() {
		let color = $(this).attr("data-color"),
			img = $(this).attr("data-url");
		console.log(color)
		$(".productColor span").removeClass("active");
		$(this).addClass("active");
		productImg.css("background-image", img);
		$("body").css("background", color);
		$(".cart").css("color", color);
		$(".colorfulBtn").css("color", color);
	});


}
