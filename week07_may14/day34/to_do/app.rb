require 'sinatra'

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
  new_post = {
    :id => current_id,
    :title => params[:item_title],
    :descr => params[:to_do_descr]
  }
  
  current_id += 1
  puts new_post
  current_todos.push(new_post)
  redirect "/"
end

get ('/edit/:id') do
  @target_todo =  

  erb(:edit)
end

post ('/update_post/:id') do
  @current_todos = current_todos
  @ind = (params[:id].to_i)

  @current_todos[@ind][:title] = params[:item_title]
  @current_todos[@ind][:descr] = params[:to_do_descr]

  redirect "/"
end
