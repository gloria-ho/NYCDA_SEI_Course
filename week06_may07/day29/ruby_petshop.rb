class PetshopQueue
  attr_reader :queue
  def initialize
    @queue = []
    @tickets = 0
  end

  def dog_arrived
    @tickets += 1
    my_hash = {
      'animal' => 'dog',
      'ticket' => @tickets
    }
    @queue.push(my_hash)
    puts "Your dog is queued with ticket\#: #{@tickets}"
  end

  def cat_arrived
    @tickets += 1
    my_hash = {
      'animal' => 'cat',
      'ticket' => @tickets
    }
    @queue.push(my_hash)
    puts "Your cat is queued with ticket\#: #{@tickets}"
  end

  def completed
    puts "Your #{@queue[0]['animal']} with ticket number #{@queue[0]['ticket']} has now been served"
    @queue.shift
  end

  def quit
    puts 'Goodbye.'
  end
end

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
    if queue.queue.length == 0
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