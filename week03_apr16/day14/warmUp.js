imageToggler();

function imageToggler() {
	let button = document.querySelector('#button');
	let img = document.querySelector('img');
	let isHidden = false;

	button.addEventListener('click', function() {
		// img.classList.toggle('hidden');
		// if (this.innerText === 'Show image') this.innerText = 'Hide image';
		// else this.innerText = 'Show image';
		if (isHidden) {
			img.classList.remove('hidden');
			button.innerText = 'Hide image';
			isHidden = false;
		} else {
			img.classList.add('hidden');
			button.innerText = 'Show image';
			isHidden = true;
		}
	})
}
