
let productData = '',
	productBox=document.querySelector('.productBox');

//ajax获取数据
let xhr = new XMLHttpRequest();
xhr.open('GET', 'json/product.json',false);
xhr.onreadystatechange = function() {
	if (xhr.readyState === 4 && xhr.status === 200) {
		// console.log(xhr.responseText);
		productData = JSON.parse(xhr.responseText);
	}

}
xhr.send(null);
console.log(productData)
//数据绑定
let str=``;
for(let i=0;i<productData.length;i++){
	let {img,title,price,time,hot}={...productData[i]}
	str+=`<li><a href="#">
            <img src="${img}" alt="">
            <p title="${title}">HUAWEI P10 Plus 6GB+128GB 全网通版（钻雕金）</p>
            <span>￥${price}</span>
            <span>时间：${time}</span>
            <span>热度：${hot}</span>
        </a></li>`;
}
console.log(str)
productBox.innerHTML=str;