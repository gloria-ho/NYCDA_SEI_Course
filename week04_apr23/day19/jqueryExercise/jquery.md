# jQuery & Bootstrap

# jQuery

## Page Load
```javascript
$(document).ready(function() {
	console.log('test');
});
```



## Syntax Differences

#### vanilla javascript
```javascript
document.getElementById('#myId');
document.getElementByClassName('.myClass');
document.getElementsByTagName('div');
document.querySelector('#myId');
document.querySelectorAll('div');
```

#### jQuery
```javascript
$('#myId');
$('.myClass');
#('div');
```



### What you get back is a jQuery object instead of an element or array
```javascript
let myElem = $('.myClass');
let myDiv = $('div');

```



## jQuery Objects

Acts like both elements and arrays

### Elements

#### vanilla javaScript
```javascript
let myElem = myElem.style.display = 'none';
let myElem = myElem.classList.add('myClass');
let myElem = myElem.classList.remove('myClass');
let myElem = myElem.appendChild('div');
let myElem = myElem.createElement('div');
let myElem = myElem.createTextNode('my text here');
let myElem = myElem.innerHTML  = '...';
let myElem = myElem.innerText = '...';
let myElem = myElem.src = '...';

```

#### jQuery
```javascript
myDiv.css('display','none');
myDiv.addClass('myClass');
myDiv.removeClass('myClass');
myDiv.toggleClass('myClass');
// checks and toggles class on an element
myDiv.append('div');
myDiv.createElement('div');
myDiv.createTextNode('my text here');
myDiv.html('<h1>Hello</h1>')
myDiv.text('my text here');

// to retrieve the HTML:
myDiv.html();

// to retrieve the text::
myDiv.text();

```

### Arrays
* loop through them using .length
```javascript
myDiv.length;
myElem.length;

```
* index into them
```javascript
myDiv[0];
// html element
myElem[2];
```



## Event Listeners

### vanilla javaScript
```javascript
myDiv.addEventLister('click', function {

	});
myDiv.addEventLister('keyup', function {

	});
myDiv.addEventLister('keydown', function {

	});
myDiv.addEventLister('mousedown', function {

	});
```

### jQuery
```javascript
myDiv.click(function() {

	});
myDiv.keyup(function() {

	});
myDiv.keydown(function() {

	});
myDiv.mousedown(function() {

	});
```

### Other jQuery examples
```javascript
$(.myClass).click(function(){

	});
```

```javascript
$('img').attr('src','newURL');
// to read the src
$('img').attr('src');
```



# Bootstrap

## Grid System

Bootstrap has 12 columns, `.col`

Size of each column is based on percentage, 6 of 12 means 50%.

```html
<div class="container"
	<div class="row">
		<div class="col-lg-6 col-sm-12">
		</div>
		<div class="col-lg-6 col-sm-12">
		</div>
	</div>
</div>
```


