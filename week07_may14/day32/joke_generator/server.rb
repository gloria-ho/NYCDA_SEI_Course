require 'sinatra'
require 'unirest'
require 'rubyjokes'

joke = RubyJoke.new

get('/') do
  @type_of_joke = "home page with no type of"
  erb(:index)  
end

get('/surprise') do
  @type_of_joke = 'surprise'
  @surprise = joke.get_single_joke
  erb(:surprise)
end

get('/:type_of_joke') do
  @type_of_joke = params[:type_of_joke]
  @nerdy = joke.get_joke({limitTo: ['nerdy']})
  @safe = joke.get_joke({exclude: ['explicit']})
  @nsfw = joke.get_joke({limitTo: ['explicit']})

  if @type_of_joke == 'nerdy'
    erb(:nerdy)
  elsif @type_of_joke == 'nsfw'
    erb(:nsfw)
  elsif @type_of_joke == 'safe'
    erb(:safe)
  else
    erb(:index)
  end

end
