Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  # get '/todos', to: 'todos#index'
  # get '/todos/new', to: 'todos#new'
  # post '/todos/create', to: 'todos#create'
  # get '/todos/edit:id', to: 'todos#edit'
  # put '/todos/edit/:id', to: 'todos#update'
  # delete '/todos/:id', to: 'todos#destroy'

  resources :todos
  
end
