# Dom Manipulations

* Get a handle on the element

*(save it in a variable)*

`.getElementById`
`.getElementsByClassName`

* Make the needed changes

Change some attribute

Add event listener

### Foundations of a website:

* **HTML** - Foundation / Skeleton
* **CSS** - Design / Decoration
* **JavaScript** - Electricity



## Dom

### Document Object Model

```javascript
{
	key: value;
	key: value;
}
```

**Global Variable:** `document`

**Document:** gateway to the HTML page

### DOM Tree

	HTML *node/element*
		head *child of html element*
			title
			meta

	body *child of html element*
		div
			div
		p
			span
			strong
		script
		h1,h2

### Syntax Translations:

`css: font-size;`
translates into javaScript as:
`javaScript: fontSize;`

### Selecting Elements:

`.document.getElementById('...');`
*returns one item*

`document.getElementsByClass('...');`
*returns a node list (like an array) of items*

**New syntax**

`document.querySelector('...');`
*returns one item*

`document.querySelectorAll('...');`
*returns a node list (like an array) of items*



## Event Listeners

*Asynchronous events*

[MDN Web Docs Event Reference](https://developer.mozilla.org/en-US/docs/Web/Events "MDN Web Docs Event Reference")

* **Element:** Which element?

* **Event:** Which event?

* **Callback:** What to do when the event happens? *(this is called a **callback** - passing a function into another function)*

```javascript
let myDiv = document.getElementById('intro');

myDiv.addEventListener('click', function() {
	alert('you clicked on the intro div');
})

```

```javascript
myDiv.addEventListener('click', function() {
	myDiv.style.display = 'none';
})
```

```javascript
myDiv.addEventListener('click', function() {
	myDiv.classList.add('hidden')
})
```



## HTML Elements

* style attribute
* change innerText
* change innerHTML
* add eventListener
* add/remove classes
* value of a form field



## HTML Form Fields

**Input types:**
```html
<input type="test">

<input type="email">

<input type="date">

<input tupe="number">

```

**Dropdown menues:**
```html
<select>
	<option>NY</option>
	<option>FL</option>
	<option>CA</option>
</select>
```

**Radio button:** *user can only select one at a time*
```html
<input type="radio" name="color" value="blue">Blue
<input type="radio" name="color" value="green">Green
<input type="radio" name="color" value="yellow">Yellow
```

**Checkbox**
```html
<input type="checkbox">Newsletter
```

**Text Area**
```html
<textarea>
</textarea>
```







