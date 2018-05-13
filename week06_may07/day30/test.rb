class House
  attr_accessor :num_of_rooms, :rooms
  def initialize
    @num_of_rooms = num_of_rooms
    @rooms = []
    @house_area = 0
  end
  def area_of_house
    i = 0
    puts @rooms
    while i < @rooms.length
      @house_area += @rooms[i]
      i += 1
    end
    return "The total area of the house is #{@house_area}"
  end
end

class Room
  def initialize
    @width = 0
    @height = 0
    @house = House.new
  end

  def ask_dims()
    width_prompt = "Width: "
    height_prompt = "Height: "
    puts width_prompt
    @width = gets.strip.to_i
    puts height_prompt
    @height = gets.strip.to_i
  end

  def room_area
    @house.rooms.push(@width * @height)
  end

  def area_of_house
    @house.area_of_house
  end

end


class HouseBuilder
  def initialize
    @total_rooms = total_rooms
  end

end



house_prompt = "Please enter the number of rooms: "

new_house = Room.new

puts house_prompt
response_rooms = gets.strip.to_i


if response_rooms >= 1
  i = 0
  while response_rooms > i
    i += 1
    puts "Please enter the dimensions for room #{i}: "
    new_house.ask_dims
    new_house.room_area
  end
  puts new_house.area_of_house
else
  p "Please enter a valid number of rooms"
  puts house_prompt
  response_rooms = gets.strip.to_i
end
