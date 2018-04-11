function checkNum(num) {
	if (num > 10) {
		alert('Your variable is less than 10');
	}
	alert(`Your variable ${num} was not less than 10`);
}



function airConditioner(temp, acPwr) {
	acPwr = (acPwr === 'on') ? true : false;
	
	if (temp > 80 && !acPwr) {
		console.log('Turn the AC on!');
	} else if (temp < 80 && acPwr) {
		console.log('Brrr, turn this thing off.');
	} else if (temp < 80 && !acPwr) {
		console.log('Not worth the electricity, leave it off.');
	} else {
		console.log('Not defined.');
	}
}