
## Dom

### Foundations of a website:

**HTML** - Foundation / Skeleton

**CSS** - Design / Decoration

**JavaScript** - Electricity


### Document Object Model

```javascript
{
	key: value;
	key: value;
}
```

**Global Variable:** document

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
