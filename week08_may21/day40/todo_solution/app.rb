require 'sinatra'
require 'mailgun'
require './models'

get '/' do
	@todos = Todo.all
	erb :index
end

get '/todo/new' do
	erb :new
end

post '/todo/create' do
	Todo.create(name: params[:name], description: params[:description])

	# mg_client = Mailgun::Client.new(ENV['MAILGUN_API_KEY'], 'api.mailgun.net','v3',false,false)	

	# # Define your message parameters
	# message_params =  { 
	# 	from: 'my_email@nycda.com',
	# 	to: 'my_email@nycda.com',
	# 	subject: 'The Ruby SDK is awesome!',
	# 	html: erb(:my_mail_template)
	# }

	# # Send your message through the client
	# mg_client.send_message(ENV['MAILGUN_API_DOMAIN'], message_params)

	redirect '/'
end

get '/todo/edit/:id' do
	@todo = Todo.find(params[:id])

	erb :edit
end

get '/todo/delete/:id' do
	todo = Todo.find(params[:id])
	Todo.delete(todo)

	redirect '/'
end

post '/todo/update/:id' do
	todo = Todo.find(params[:id])
	todo.update(name: params[:name], description: params[:description])

	redirect '/'
end



