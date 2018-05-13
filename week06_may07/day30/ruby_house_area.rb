class House
  attr_accessor :room_areas, :rooms
  def initialize
    @num_of_rooms = 0
    @rooms = []
    @room_areas = []
    @house_area = 0
  end

  def calculate_house_area
    i = 0
    while i < @room_areas.length
      @house_area += @room_areas[i]
      i += 1
    end
    return "The total area of the house is #{@house_area}"
  end
end

class Room
  attr_accessor :house
  def initialize
    @height = 0
    @width = 0
    @rooms_hash = []
    @house = House.new
  end

  def ask_dims
    width_prompt = "Width: "
    height_prompt = "Height: "
    puts width_prompt
    @width = gets.strip.to_i
    puts height_prompt
    @height = gets.strip.to_i
    room_hash = {
      'height' => @height,
      'width' => @width
    }
    @rooms_hash.push(room_hash)
  end

  def add_rooms_to_house
    house.rooms.push(@rooms_hash)
  end

  def room_area
    room_area = @height * @width
    @house.room_areas.push(room_area)
  end
end

class HouseBuilder
  def initialize
    @total_rooms = 0
    @new_rooms = Room.new
  end

  def start
    house_prompt = "Please enter the number of rooms: "
    puts house_prompt
    response_rooms = gets.strip.to_i
    if response_rooms >= 1
    i = 0
    while response_rooms > i
      i += 1
      puts "Please enter the dimensions for room #{i}: "
      @new_rooms.ask_dims
      @new_rooms.room_area
    end
    @new_rooms.add_rooms_to_house
    puts @new_rooms.house.calculate_house_area
    else
      p "Please try again with a valid number of rooms"
    end
  end
end

start_new_house = HouseBuilder.new
start_new_house.start