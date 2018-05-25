require 'sinatra/activerecord'

class Student < ActiveRecord::Base
  has_one :laptop
  has_many :submissions
  has_many :student_classroom_seats
  has_many :classroom_seats, through: :student_classroom_seats
end

class StudentClassroomSeat < ActiveRecord::Base
  belongs_to :student
  belongs_to :classroom_seat
end

class ClassroomSeat < ActiveRecord::Base
  has_many :student_classroom_seats
  has_many :students, through: :student_classroom_seats
end

class Laptop < ActiveRecord::Base
  belongs_to :student
end

class Submission < ActiveRecord::Base
  belongs_to :student
end