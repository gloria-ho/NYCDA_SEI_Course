require 'sinatra'
require './Todo'
require 'mailgun'

current_todos = []
current_id = 1

get ('/') do
  @current_todos = current_todos
  erb(:index)
end

get ('/create_new') do
  erb(:create_new)
end

post ('/post_new') do
  # id = current_id,
  # new_post = Todo.new(params,id)
  new_post = {
    :id => current_id,
    :title => params[:item_title],
    :descr => params[:item_descr]
  }
  current_id += 1
  current_todos.push(new_post)

  # First, instantiate the Mailgun Client with your API key
  mg_client = Mailgun::Client.new (ENV['MAILGUN_API_KEY'])
    
  # Define your message parameters
  message_params =  { from: ENV['WDEMAIL'],
                      to:   ENV['WDEMAIL'],
                      subject: 'The Ruby SDK is awesome!',
                      text:    'It is really easy to send a message!'
                      # text:    erb(:mail_template)
                    }

  # Send your message through the client
  mg_client.send_message ENV['MAILGUN_API_DOMAIN'], message_params

  redirect '/'
end

get ('/edit/:current_id') do
  @target_todo = current_todos.detect{|item| item[:id] == params[:current_id].to_i}
  erb(:edit)
end

post ('/update_post/:current_id') do
  @target_todo = current_todos.detect{|item| item[:id] == params[:current_id].to_i}
  @target_todo[:title] = params[:item_title]
  @target_todo[:descr] = params[:item_descr]
  redirect '/'
end