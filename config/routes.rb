Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resource :user, only: [:create, :show]
    resource :session, only: [:create, :destroy, :show]
    resources :prints, only: [:create, :show, :destroy]
  end

  root "static_pages#root"
end