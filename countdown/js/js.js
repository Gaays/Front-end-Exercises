let countDate = new Date('Jan 1,2020 00:00:00').getTime();

function newYear() {
	let now = new Date().getTime(),
		gap = countDate - now;
	let second = 1000;
	let minute = second * 60;
	let hour = minute * 60;
	let day = hour * 24;

	let d = Math.floor(gap / day);
	let h = Math.floor((gap % day)/hour);
	let m = Math.floor((gap % hour)/minute);
	let s = Math.floor((gap % minute)/second);
	$('#day').text(d);
	$('#hour').text(h);
	$('#minute').text(m);
	$('#second').text(s);

}
setInterval(function(){
	newYear();
},1000)
