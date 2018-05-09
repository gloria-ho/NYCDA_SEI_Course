require 'colorize'
require 'chuck_norris'
require 'rest-client'
require 'pry'

require './chuck'

new_jokes = ChuckJokes.new

if ARGV.length == 1
  if ARGV[0] == "random"
    new_jokes.random
  else
    id = ARGV[0].to_i
    p new_jokes.get_joke_by_id(ARGV[0].to_i)
  end
elsif ARGV.length == 2
  p new_jokes.replace_name(ARGV[0], ARGV[1])
else
  p new_jokes.help
end