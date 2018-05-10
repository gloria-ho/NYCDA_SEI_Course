require 'colorize'
require './chuck'

new_jokes = ChuckJokes.new 

if ARGV.length == 1
  if ARGV[0] == "random"
    new_jokes.random

  elsif ARGV[0].to_i.to_s == ARGV[0]
    puts new_jokes.get_joke_by_id(ARGV[0].to_i).black.on_magenta
  
  else
    puts "Please enter a valid command. Valid commands are: 'random', a joke ID number, or a full name. ".black.on_red
  end

elsif ARGV.length >= 2
  puts new_jokes.replace_name(ARGV[0], ARGV[-1]).green.on_black

else
  puts new_jokes.help.white.on_blue
end