const secondHand = document.querySelector('.second-hand'),
			minHand 	 = document.querySelector('.min-hand'),
			hourHand   = document.querySelector('.hour-hand');
function setDate(){
	const now = new Date(),
				seconds = now.getSeconds(),
				mins = now.getMinutes(),
				hours = now.getHours(),
				secondsDegrees = ((seconds/60) * 360) + 90,
				minDegrees = ((mins/60) * 360) + 90,
				hourDegrees = ((hours - 12/60) * 360) + 90;

	hourHand.style.transform = `rotate(${hourDegrees}deg)`;
	minHand.style.transform = `rotate(${minDegrees}deg)`;
	secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
}

setInterval(setDate,1000);