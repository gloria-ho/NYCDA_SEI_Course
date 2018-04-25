/* 
 *  personal horiscope section
 */

// define dropdown and display id's
let dropDown = document.querySelector('#personalSign');
let horoscopeElement = document.querySelector('#horoscopeElement');
let date = document.querySelector('#date');
let sign = document.querySelector('#sign');
let horoscope = document.querySelector('#horoscope');
let img = document.querySelector('#userSignImg');
// check dropdown for change
dropDown.onchange = function() {
	// define user selection
	let userSign = dropDown.value;
	// get api for the selected sign
	axios.get('http://node-horoscopes.herokuapp.com/api/horoscopes/today/' + userSign)
	// once loaded, then
	.then(function(response) {
		// update displays with data gathered from api   
		date.innerText = response.data.date;
		sign.innerText = response.data.sign;
		horoscope.innerText = response.data.horoscope;
		// update img src with zodiac img
		img.src = 'http://courtneysgamecoderocks.com/ZodiacProject/img/' + userSign.toLowerCase() + 'Sign.png';
		// unhide display
		horoscopeElement.classList.remove('hidden');
	});
};


/*
 *  dating compatibility  section
 */

// define dropdowns and display id's
let datingSign1 = document.querySelector('#datingSign1');
let datingSign2 = document.querySelector('#datingSign2');
let compatibility = document.querySelector('#compatibility');
let compatibilityElement = document.querySelector('#compatibilityElement');
let datingSign1Img = document.querySelector('#datingSign1Img');
let datingSign2Img = document.querySelector('#datingSign2Img');
// create function to load and assign data
function loadCompatiblity() {
	// check if both dropdowns have values
	if (datingSign1.value && datingSign2.value) {
		// define user selections
		let sign1 = datingSign1.value;
		let sign2 = datingSign2.value;
		// load cute imgs
		datingSign1Img.src = 'https://www.astrology.com/images-US/games/icon-compat-zodiac-' + sign1.toLowerCase() + '.png';
		datingSign2Img.src = 'https://www.astrology.com/images-US/games/icon-compat-zodiac-' + sign2.toLowerCase() + '.png';
		// get api data for the selected signs combination
		axios.get('http://node-horoscopes.herokuapp.com/api/horoscopes/dating/' + sign1 +'/' + sign2)
		// once loaded then display data from api
		.then(function(response) {
			compatibility.innerText = response.data.text;
		});
		// unhide display
		compatibilityElement.classList.remove('hidden');
	};
	
};
// check compatibility dropdown1 for change
datingSign1.onchange  = function() {
	// call function to load data
	loadCompatiblity();
};
// check compatibility dropdown2 for change
datingSign2.onchange = function() {
	// call function to load data
	loadCompatiblity();
};


/*
 *  celebrity match section
 */

// define dropdown and display id's
let celebrityUserSign = document.querySelector('#celebrityUserSign');
let celebritySign = document.querySelector('#celebritySign');
let celebrityElement = document.querySelector('#celebrityElement');
let celebrityName = document.querySelector('#celebrityName');
let celebrityAge = document.querySelector('#celebrityAge');
let celebrityImg = document.querySelector('#celebrityImg');
// check celebrity match dropdown for change
celebrityUserSign.onchange = function() {
	// get api data for the selected sign
	axios.get('http://node-horoscopes.herokuapp.com/api/horoscopes/celebrities/' + celebrityUserSign.value)
	 // once loaded then
	.then(function(response) {
		celebritySign.innerText = response.data.sign;
		// define a random variable i on every click
		let i = Math.floor(Math.random() * response.data.actors.length);
		// using random variable as index to display celebrity data
		celebrityName.innerText = response.data.actors[i].name;
		celebrityAge.innerText = response.data.actors[i].age;
		celebrityImg.src = response.data.actors[i].imageUrl;
	});
	// unhide display
	celebrityElement.classList.remove('hidden');
};