/*

//practice code

for (let i=0; i<5; i++) {
	debug(i);
}

let i=0;
while(i<5) {
	debug(i);
	i++;
}

*/


alert('test');



function checkNum(num) {
	if (num > 10) {
		alert('Your variable is less than 10');
	}
	alert(`Your variable ${num} was not less than 10`);
}

function airConditioner(temp,acPwr) {
	if (temp > 80 && acPwr === 'off') {
		console.log('Turn the AC on!');
	} else if (temp < 80 && acPwr === 'on') {
		console.log('Brrr, turn this thing off.');
	} else if (temp < 80 && acPwr === 'off') {
		console.log('Not worth the electricity, leave it off.');
	} else {
		console.log('Not defined.')
	}
}

