let gifs = window.data.data;

let randomButton = document.querySelector('#randomButton');
let gifImg = document.querySelector('#gifImg');

randomButton.addEventListener('click', function() {
	let index = Math.floor(Math.random() * gifs.length);
	gifImg.src = gifs[index].images.original.url;
	gifs.splice(index, 1);
})