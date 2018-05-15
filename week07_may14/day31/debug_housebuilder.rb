require 'byebug'

class Room

  def initialize(j)
    room = {}
    puts "    Please Enter the dimensions for room #{j + 1}"
    set_w(room)
    set_h(room)
    set_d room
  end

  def area
    @x * @y
  end

  def set_w(room)
    print "         width: "
    room[:w] = gets.strip.to_i
  end

  def set_h(room)
    print "         height: "
    room[:h] = gets.strip.to_i
  end

  def set_d(d)
    @x = d[:w]
    @y = d[:h]
  end

end

class House

  def initialize(nm_rs)
    @rooms = []
    @ask_h = nm_rs
  end

  def add_room(x)
    @rooms << x
  end

  def total_area
    sum = 0
    @rooms.each do |room|
      sum += room.area
    end

    sum
  end

  def ask_h(num_rooms)
    @ask_h.times do |i|
      room = Room.new(i)
      add_room(room)
    end
  end

end

class HouseBuilder

  def initialize
    print 'Please Enter The Number of Rooms: '
    @num_rooms = gets.strip.to_i
    @house = House.new(@num_rooms)
  end

  def run
    @house.ask_h(@num_rooms)
    display_total_area
  end


  def display_total_area
    puts "The total area of the house is: #{@house.total_area}"
  end
end

builder = HouseBuilder.new
builder.run