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
my_name = 'George'
my_age = 12
```


## Console Logging

javascript
```javascript
console.log('hello world')
```
ruby
`print` -  displays everything on one line, will not add a new line
`puts` - will add the new line, calls the .to_s method and converts to string
`p` - will add the new line, displays the raw data, will not convert to string
```ruby
puts "hello world"
p "hello world"
print "hellow world"
```


## Built in Methods
**Float**
* Google ruby float class [ruby-doc](https://ruby-doc.org/core-2.5.0/Float.html)

**String**
Google ruby string class [ruby-doc](https://ruby-doc.org/core-2.4.1/String.html)

**TrueClass**
Google ruby boolean class [ruby-doc](https://ruby-doc.org/core-2.3.0/TrueClass.html)

**NilClass**
Google ruby nil class [ruby-doc](https://ruby-doc.org/core-2.3.0/NilClass.html)

The `nil` keyword in ruby is the equivilent of *undefined* in javascript.
`myCar = nil`
A value that represents nothing.

**Symbol Class**
[ruby-doc](https://ruby-doc.org/core-2.5.0/Symbol.html)
```ruby
my_sym = :some_symbol
my_sym2 = :some_symbol
my_sym3 = :some_symbol
your_symbol = :myToken
```

## Exclamation mark
Methods that end in ! indicate that the method will **modify the object it's called on.** Ruby calls these as **"dangerous methods"** because they change state that someone else might have a reference to. 
```ruby
my_name = 'george'
your_name = my_name.capitalize
puts my_name #'george'
puts your_name #'George'
```

```ruby
my_name = 'george'
your_name = my_name.capitalize!
puts my_name #'George'
puts your_name #'George'
```

## Arrays
Adding and removing values from arrays
```ruby
my_arr = [2, 4, 6]
my_arr.push(8) # adds to the end of the array
my_arr << 8 # adds to the end of the array
my_arr.pop # removes the last item in the array
my_arr.delete(4) # finds and removes the value from the array
my_arr.delete_at(2) # removes the index value from the array
my_arr.slice!(1,2) # starting from the index, removes this many values from the array
my_arr.slice!(2) # removes index from the array
```

Negative index will run in reverse
```ruby
my_arr = [2, 4, 6]
p my_arr[-1] #6
p my_arr[-2] #4
p my_arr[-3] #2
```

## Hash Rocket
`=>`

## Hash Instance
Previous syntax:
```ruby
my_dog = {
  :name => 'Buzzie',
  :age => 3
}

p my_dog[:name] #'Buzzie'
my_dog[:color] = 'white'
```
New syntax:
```ruby
my_dog = {
  name: 'Buzzie',
  age: 3;
}

p my_dog[:name] #'Buzzie'
my_dog[:color] = 'white'
}
```

## If Statements
javascript
```javascript
if (condition) {
  doThisThing;
};
```

```javascript
if (condition1) {
  doThisThing;
} else if (condition2) {
  do ThisOtherThing;
};
```

```javascript
if (condition) {
  doThisThing;
} else {
  do ThisOtherThing;
};

```

ruby
```ruby
if condition
  do_this_thing
end
```

```ruby
if condition1
  do_this_thing
elsif condition2
  do_this_other_thing
end
```

```ruby
if condition
  do_this_thing
else
  do_this_other_thing
end
```

## Ruby Operators
`||` or  (`or` is a keyword, avoid using)
`&&` and (`and` is a keyword, avoid using)

## Loops
While statement in javascript:
```javascript
while (condition) {
  doThisThing;
};
```
While statement in ruby:
```ruby
while condition
  do_this_thing
end
```

If statement in javascript:
```javascript
if (i < 0) {
  console.log(i);
};
```
If statement in ruby:
```ruby
if i < 0
  p i
  i += 1
end
```

For statment in javascript:
```javascript
a = [2, 4, 6]
for (let i = 0; i < 0; i++) {
  console.log(a[i] * 10);
};
```
For statment in ruby:
```ruby
a = [2, 4, 6]
for num in a
  p num * 10
end
```

## Integer Class Method: times
Keywords:
* `.times`
* `do`

Starting at 0, stopping once you hit the number:
```ruby
10.times do |i|
  p i
end
```

```ruby
dogs = [{name:'buzze'}, {name:'max'},{name:'harry'}]
dogs.each do |doggy|
  p doggy[:name]
end
```

## Functions
In ruby, **the last thing to be computed is automatically returned**

Functions in javascript:
```javascript
function myFunction(parameter1, parameter2) {
  doThisThing;
  return parameter1 + parameter2
};
myFunction(7,10)
```
Functions in ruby:
```ruby
def my_function(parameter1, parameter2)
  do_this_thing
  parameter1 + parameter2
end
myFunction(7,10) #or myFunction 7,10
```