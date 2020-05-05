let workTime = document.getElementById('work-time');
let time = new Date();
let min = time.getMinutes();
let sec = time.getSeconds();

function timer() {
	let intervalId = setInterval(() => {
		time.setSeconds(time.getSeconds() - 1);
		workTime.textContent = `${min} ${time.getSeconds()}`;
	}, 1000);
}


console.log(time);

