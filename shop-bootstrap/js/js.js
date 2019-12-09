window.onload = function() {
	
	//ajax获取数据
	let xhr = new XMLHttpRequest();
	xhr.open('GET', 'json/data.json', false);
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4 && xhr.status === 200) {
			// console.log(xhr.responseText);
			productData = JSON.parse(xhr.responseText);
		}
	
	}
	xhr.send(null);
	console.log(productData);
	
	
	
	
}
