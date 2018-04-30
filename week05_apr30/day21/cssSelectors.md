# CSS Selectors

selector `{`
	attribute: value;
`}`

## Selector Types

`div, h1`
`.class`
`#id` *do not use id's for CSS*

## Combined Selectors

*Find all elements that have **all** selectors on them. Order does not matter.*

selector1selector2selector3

`class1.class2.class3`
`div.class`
`p.class`

## Direct Child Selector

*Find the immediate child of selector that match the last/target selector.*

selector1 `>` selector2

`.class1 > .class2`
`div.class1 > div.class2`

## Child Selector

*Find any child of selector that match the last/target selector.*

`.class1 .class2`
`.class1 .class2 .class3`

## Multiple Selector

*Find all the elements that match the selectors*

`.class1, class2, class3`

## Next Sibling Selector

*Find only the elements that have the last selector that come after the first selector*

`.class1 + .class2`