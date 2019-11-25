let productData = '',
	productBox = document.querySelector('.productBox'),
	headerBox = document.querySelector('.headerBox'),
	sortList = headerBox.getElementsByTagName('a'),
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
            <p title="${title}">${title}</p>
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
		curLink.onclick = function() {
			for (let j = 0; j < sortList.length; j++) {
				console.log(this!=sortList[j]);
				console.log(sortList[j])
				if (this != sortList[j])
					sortList[j].flag = -1;
			}
			this.flag *= -1
			sortFun.call(this)
		}
	};
	//排序
	let sortFun = function() {
		let _this = this;
		let productAry = [].slice.call(productList);
		productAry.sort((pre, next) => {
			//判断时间排序
			if (this.index === 0) {
				preIn = pre.getAttribute(sortAry[_this.index]).replace(/-/g, '');
				nextIn = next.getAttribute(sortAry[_this.index]).replace(/-/g, '');
			} else {
				preIn = pre.getAttribute(sortAry[_this.index]);
				nextIn = next.getAttribute(sortAry[_this.index]);
			}
			return ((preIn - nextIn) * _this.flag)
		})
		productAry.forEach((item, index) => {
			let nodo = productAry[index];
			productBox.appendChild(nodo);
		})
	}
}();
