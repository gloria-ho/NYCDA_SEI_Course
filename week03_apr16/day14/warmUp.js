let button = document.querySelector('#button');
let img = document.querySelector('img');

button.addEventListener('click', function() {
	img.classList.toggle('hidden');
	if (this.innerText === 'Show image') this.innerText = 'Hide image';
	else this.innerText = 'Show image';
})
