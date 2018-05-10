require 'chuck_norris'
require 'rest-client'
require 'pry'

class ChuckJokes
  def help
    "Please enter 'random', joke ID number, or full name"
  end

  def get_joke_by_id(id)
    ChuckNorris::JokeFinder.find_joke(id).joke
  end

  def replace_name(fname, lname)
    joke = ChuckNorris::JokeFinder.get_joke(first_name: fname, last_name: lname)
    joke.joke
  end

  def random
    joke = ChuckNorris::JokeFinder.get_joke
    puts "Joke ID\#: #{joke.id}".blue.on_white
    puts joke.joke.blue.on_white
    puts "Joke Catagory: #{joke.categories}".blue.on_white
  end
end