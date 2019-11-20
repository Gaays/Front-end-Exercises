let productData = '',
	productBox = document.querySelector('.productBox'),
	headerBox = document.querySelector('.headerBox'),
	sortList = document.getElementsByTagName('a'),
	productList = productBox.getElementsByTagName('li');

//ajax获取数据
let xhr = new XMLHttpRequest();
xhr.open('GET', 'json/product.json', false);
xhr.onreadystatechange = function() {
	if (xhr.readyState === 4 && xhr.status === 200) {
		// console.log(xhr.responseText);
		productData = JSON.parse(xhr.responseText);
	}

}
xhr.send(null);
console.log(productData)
//数据绑定
let str = ``;
for (let i = 0; i < productData.length; i++) {
	let {
		img,
		title,
		price,
		time,
		hot
	} = productData[i]
	str +=
		`<li data-price="${price}" data-time="${time}" data-hot="${hot}"><a href="#" >
            <img src="${img}" alt="">
            <p title="${title}">HUAWEI P10 Plus 6GB+128GB 全网通版（钻雕金）</p>
            <span>￥${price}</span>
            <span>时间：${time}</span>
            <span>热度：${hot}</span>
        </a></li>`;
}
console.log(str)
productBox.innerHTML = str;

//handleClick
~ function() {
	let sortAry = ['data-time', 'data-price', 'data-hot'];

	for (let i = 0; i < sortList.length; i++) {
		let curLink = sortList[i];
		curLink.flag = -1;
		curLink.index = i;
		// console.log(sortList[i].flag)
		curLink.onclick = function() {
			this.flag *= -1
			sortFun.call(this)
		}
	};

	let sortFun = function() {
		let productAry = [].slice.call(productList);
		productAry.sort((pre, next) => {
			preIn = pre.getAttribute(sortAry[this.index]);
			nextIn = next.getAttribute(sortAry[this.index]);
			return ((preIn - nextIn) * this.flag)
		})
		// console.log(productAry)
		productAry.forEach((item, index) => {
			let nodo = productAry[index];
			productBox.appendChild(nodo);
		})
	}
}();
