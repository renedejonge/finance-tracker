Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html


  #devise_for :users
  devise_for :users, :controllers => { :registrations => "user/registrations" }

  resources :users, only: [:show]
  resources :friendships

  resources :user_stocks, except: [:show, :edit, :update]


  root 'welcome#index'  
  get 'my_portfolio', to: 'users#my_portfolio'
  get 'search_stocks', to: "stocks#search"
  get 'my_friends', to: "users#my_friends"
  get 'search_friends', to: "users#search"
  post 'add_friend', to: "users#add_friend"


end
