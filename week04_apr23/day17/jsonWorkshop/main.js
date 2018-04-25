let myPromise = axios.get('https://www.redbullshopus.com/products.json')
.then(function(myResponse) {
	// console.log(myResponse.data.products);

	for (let i = 0; i < myResponse.data.products.length; i++) {
		// make a new div with 3 children
		let newDiv = document.createElement('div');
		let newTitle = document.createElement('p');
		let newBody = document.createElement('p');
		let newImg = document.createElement('img');
		// nest the children within the new div
		newDiv.append(newTitle, newBody, newImg);
		// set the existing div
		let currentDiv = document.querySelector('#emptyDiv');
		// insert the new div
		document.body.insertBefore(newDiv, currentDiv);
		// inner.text title text
		newTitle.innerText = myResponse.data.products[i].title;
		// inner.html body description html
		newBody.innerHTML = myResponse.data.products[i].body_html;
		// insert src image, need a loop for more than 1 img?? [i]..+1 
		newImg.src = myResponse.data.products[i].images[0].src;
	}
})