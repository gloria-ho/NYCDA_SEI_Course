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
    puts 'Thank you for visiting the Ruby Petshop. Goodbye.'
  end
end