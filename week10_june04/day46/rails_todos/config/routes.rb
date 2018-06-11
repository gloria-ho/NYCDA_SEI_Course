Rails.application.routes.draw do
  devise_for :users, controllers: {
    registrations: 'users/registrations'
  }
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  # get '/todos', to: 'todos#index'
  # get '/todos/new', to: 'todos#new'
  # post '/todos/create', to: 'todos#create'
  # get '/todos/edit:id', to: 'todos#edit'
  # put '/todos/edit/:id', to: 'todos#update'
  # delete '/todos/:id', to: 'todos#destroy'

  root to: "home#index"
  resources :todos do
    resources :todo_comments, only: [:new, :create]

    # collection do
    #   get '/search', to: 'todos#search'
    #   get '/visible', to: 'todos#visible'
    #   get '/hidden', to: 'todos#hidden'
    #   post '/mark_as_read', to: 'todos#mark_as_read'
    # end

    # member do
    #   get '/mark_complete', to: 'todos#mark_complete'
    #   get '/hide', to: 'todos#hide'
    #   get '/share', to: 'todos#share'
    # end

  end
  
  # resources :todo_comments
end
