var nongli;

//ajax获取数据
let xhr = new XMLHttpRequest();
xhr.open('GET', 'nongli.json', false);
xhr.onreadystatechange = function() {
	if (xhr.readyState === 4 && xhr.status === 200) {
		// console.log(xhr.responseText);
		nongli = JSON.parse(xhr.responseText);
	}

}
xhr.send(null);
console.log(nongli)

function springFes() {
	let date = new Date();
	let nowYear = date.getFullYear();	
	let nextYear = nowYear + 1;
	let fesTxt='';
	// 农历新年对应公历日期
	for(let i =0;i<nongli.length;i++){
		if(nongli[i].year==nextYear){
			// 月份判断
			if(nongli[i].month==1)
				fesTxt="Jan "
			else
				fesTxt="Feb "
			// 农历新年日期拼接
			fesTxt=fesTxt+nongli[i].day+","+nextYear+" 00:00:00"
			break;
		}
	}
	let countDate = new Date(fesTxt).getTime();
	let now = new Date().getTime(),
		gap = countDate - now;
	let second = 1000;
	let minute = second * 60;
	let hour = minute * 60;
	let day = hour * 24;
	
	let d = Math.floor(gap / day);
	let h = Math.floor((gap % day) / hour);
	let m = Math.floor((gap % hour) / minute);
	let s = Math.floor((gap % minute) / second);
	$('#years').text(nextYear);
	$('#day').text(d);
	$('#hour').text(h);
	$('#minute').text(m);
	$('#second').text(s);
}

setInterval(function() {
	springFes();
}, 1000)
