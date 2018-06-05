Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  # get '/cakes', to: 'cakes#index'
  # get '/cakes/new', to: 'cakes#new'
  # post '/cakes/create', to: 'cakes#create'
  # get '/cakes/edit:id', to: 'cakes#edit'
  # put '/cakes/edit/:id', to: 'cakes#update'
  # delete '/cakes/:id', to: 'cakes#destroy'

  resources :cakes
  resources :muffins
  
end
