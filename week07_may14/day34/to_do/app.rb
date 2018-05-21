require 'sinatra'
require './Todo'

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
  redirect "/"
end

get ('/edit/:current_id') do
  @target_todo = current_todos.detect{|item| item[:id] == params[:current_id].to_i}
  erb(:edit)
end

post ('/update_post/:current_id') do
  @target_todo = current_todos.detect{|item| item[:id] == params[:current_id].to_i}
  @target_todo[:title] = params[:item_title]
  @target_todo[:descr] = params[:item_descr]
  redirect "/"
end
