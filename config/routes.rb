Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show]
    resource :session, only: [:create, :destroy, :show]
    resources :prints
    resources :likes
    #probably want to nest under collection... then use collectionId from params in controllers
    resources :collections
    resources :collect_follows
    resources :print_collects
  end

  root "static_pages#root"
end