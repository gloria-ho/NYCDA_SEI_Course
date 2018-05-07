# Ruby
*A dynamic, open source programming language with a focus on simplicity and productivity. It has an elegant syntax that is natural to read and easy to write.*

## Defining a Variable

javascript
```javascript
let myName = 'George';
let myAge = 12;
```
java/c++
```java
string myName = 'George'
int myAge = 12
```
ruby
```ruby
myName = 'George'
myAge = 12
```


## Console Logging

javascript
```javascript
console.log('hello world')
```
ruby
```ruby
puts 'hello world'
p 'hello world'
```


## Built in Methods
**Float**
* Google ruby float class [ruby-doc](https://ruby-doc.org/core-2.2.3/Float.html)
**String**
Google ruby string class [ruby-doc](https://ruby-doc.org/core-2.3.0/String.html)
**TrueClass**
Google ruby boolean class [ruby-doc](https://ruby-doc.org/core-2.2.0/TrueClass.html)
**NilClass**
Google ruby nil class [ruby-doc](https://ruby-doc.org/core-2.2.0/NilClass.html)

The `nil` keyword in ruby is the equivilent of *undefined* in javascript.
`myCar = nil`
A value that represents nothing.


## Exclamation mark
Methods that end in ! indicate that the method will **modify the object it's called on.** Ruby calls these as **"dangerous methods"** because they change state that someone else might have a reference to. 
```ruby
myName = 'george'
yourName = myName.capitalize
puts myName #'george'
puts yourName #'George'
```

```ruby
myName = 'george'
yourName = myName.capitalize!
puts myName #'George'
puts yourName #'George'
```