require './byebug'
require './ruby_petshop_queue'

petshop = "Please Select an Action:
  1. Dog Arrived
  2. Cat Arrived
  3. Animal Completed
  4. Quit"

queue = PetshopQueue.new

puts petshop
response = gets.strip.to_i

while response != 4 do
  if  response == 1
    queue.dog_arrived
    puts petshop
    response = gets.strip.to_i

  elsif response == 2
    queue.cat_arrived
    puts petshop
    response = gets.strip.to_i

  elsif response == 3
    if queue.empty?
      puts "~! Error: Please add some animals to the queue."
      puts petshop
      response = gets.strip.to_i

    else
    queue.completed
    puts petshop
    response = gets.strip.to_i

    end

  else
    p "~! Error: Please input a valid selection:"
    puts petshop
    response = gets.strip.to_i
  
  end
end

queue.quit