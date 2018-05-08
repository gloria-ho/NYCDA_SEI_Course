## Ruby Class 

Ruby class names must start with a capital letter.
Anything that starts with a capital letter is a `constant`

**Define** a class:
```ruby
class Student
	def initialize(my_fname, my_lname)
		@fname = my_fname
		@lname = my_lname
		@ssn = 123456789
	end

	def fname
		@fname
	end

	def lname
		@lname
	end
end
```

Create a **new instance**:
```ruby
my_student = Student.new('George', 'Dagher')
```

**Reference** an attribute:
```ruby
p my_student.fname #'George'
p my_student.lname #'Dagher'
```

**Attribute reader** will control what has *read* access:
```ruby
class Student
	attr_reader :fname, :lname
	def initialize(my_fname, my_lname)
		@fname = my_fname
		@lname = my_lname
		@ssn = 123456789
	end
end
```

**Attribute writer** will control what has *write* access:
```ruby
class Student
	attr_writer :fname, :lname
	def initialize(my_fname, my_lname)
		@fname = my_fname
		@lname = my_lname
		@ssn = 123456789
	end
end
```

**Attribute accessor** will control what has *both read and write* access
```ruby
class Student
	attr_accessor :fname, :lname
	def initialize(my_fname, my_lname)
		@fname = my_fname
		@lname = my_lname
		@ssn = 123456789
	end
end
```