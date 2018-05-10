class Queue
  def initialize
    @queue = []
  end

  def peek
  # returns the next element but doesn't remove it
    @queue[0]
  end

  def enqueue(num)
  # adds an element to the queue
    @queue.push(num)    
  end

  def dequeue
  # removes the next element
    @queue.shift
  end

  def empty
  # returns true if the queue is empty and false otherwise
    @queue.empty?
  end

end

my_queue = Queue.new

p my_queue.empty

my_queue.enqueue(10)
my_queue.enqueue(20)
my_queue.enqueue(30)

puts my_queue.dequeue()

puts my_queue.peek