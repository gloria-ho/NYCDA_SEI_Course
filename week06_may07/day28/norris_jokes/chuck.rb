class ChuckJokes
  def help
    "Please enter 'random', joke ID number, or first and last name"
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
    p joke.id
    p joke.joke
    p joke.categories
  end
end