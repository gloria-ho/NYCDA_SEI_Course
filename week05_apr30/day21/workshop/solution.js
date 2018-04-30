let themeSelect = $('#theme-choice');

themeSelect.change = function() {
	document.body.classList.remote('morning', 'afternoon', 'night');
	console.log(themeSelect.value);
	console.log('test')
};