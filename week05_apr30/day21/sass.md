# SASS: CSS Framework

## SASS
*Superset CSS*

CSS Preprocessor

`.scss` filename

## Variables

**Defining a variable**

`$`varName `:` value`;`

**scss**
```scss
$primary-color: blue;
$secondary-color: green;
$font-size-1: 16px;

.container {
	background: $primary-color;
}

.header {
	background: $secondary-color;
}

```
**css output:**
```css
.container {
	background: blue;
}

.header {
	background: green;
}
```

## Nesting

**scss**
```scss
.container {
	.blue-color {
	margin: 12px;
	padding: 12px;
		.capitalize {
			color: blue;
		}
	}
}
```
**css output:**
```css
.container .blue-color {
	margin: 12px;
	padding: 12px;
}
.container .blue-color .capitalize {
	color: blue;
}```

## Partials

*Allows you to split your code into different files*

```scss
@import 'variables';
@import 'mixins';
```

## Mixins

*Sass way to write a function*

`@mixin` varName `(`parameter`) { };`

**css**
```css
.class1 {
	border-top-right-radius: 4px;
	border-top-left-radius: 4px;
}

.class2 {
	border-top-right-radius: 8px;
	border-top-left-radius: 8px;
}
```

**scss**
```scss
@mixin border-radius($param) {
	border-top-right-radius: $param;
	border-top-left-radius: $param;
}

.class1 {
	@include border-radius(4px);
}

.class2 {
	@include border-radius(8px);
}

```

## Koala App

*Application demo*












