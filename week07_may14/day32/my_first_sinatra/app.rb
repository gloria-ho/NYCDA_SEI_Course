require 'sinatra'
require 'date'


# listen for the path
get('/') do 
  # return with message
  # "Hello World!"
  # using a symbol (:) call the erb file in the views folder
  erb(:index)
end

get('/contact_us') do
  erb(:contact)
end

get('/shop') do
  erb(:shop)
end

get('/order_form') do
  erb(:order_form)
end

post('/place-order') do
  puts params
  f_name = params[:first_name]
  # l_name = params[:last_name]
  redirect "/order-success/#{f_name}"

end

get('/about_us') do
  erb(:about_us)
end

get('/recommendations') do
  erb(:recommendations)
end

get('/hello/:name') do

  # "Hello #{params[:name].capitalize}, Welcome"

  @name_to_display = params[:name]
  # anything you wawnt to display in .erb file will be defined with the @ symbol
  # favorite_dog = params[:favorite_dog]
  # "Hello #{name_to_display.capitalize}. Welcome, your favorite dog is #{favorite_dog.capitalize}"

  @current_time = DateTime.now.strftime("%d/%m/%Y %H:%M")

  erb(:person_greeting)

end

#
# HOW TO RUN
#
# run in terminal: $ ruby app.rb
# local server starts
# check for local port #
# direct browser to localhost:PORT#