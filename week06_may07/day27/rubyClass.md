# Ruby Class 

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

**Template Literal**
```ruby
variable = 'This'
p "#{variable} will print." #"This will print."
```

**Instance Method**
```ruby
class Student
  attr_accessor :fname, :lname
  def initialize(my_fname, my_lname)
    @fname = my_fname
    @lname = my_lname
    @ssn = 123456789
  end

  def full_name
    "#{fname} #{lname}"
  end
end

my_student = Student.new('George', 'Dagher')

p my_student.full_name #"George Dagher"
```

**Class Method**
A property of the class itself
```ruby
class Student
  attr_accessor :fname, :lname
  def initialize(my_fname, my_lname)
    @fname = my_fname
    @lname = my_lname
    @ssn = 123456789
  end

  def self.possible_grades
    ['A', 'B', 'C', 'D', 'F']
  end
end

p Student.possible_grades #['A', 'B', 'C', 'D', 'F']
```

## Inheritance

Use `<` to inherit from a parent (base) class and use `super` to reference data in the child class
```ruby
class Student < Person
  attr_accessor :fname, :lname
  def initialize(my_fname, my_lname, age)
    super(my_fname, my_lname, age)
    @ssn = 123456789
    @grade_level = nil
  end

  def self.possible_grades
    ['A', 'B', 'C', 'D', 'F']
  end
end

class Person
  def initialize(fname, lname, age)
    @fname = fname
    @lname = lname
    @age = age
  end
end




```