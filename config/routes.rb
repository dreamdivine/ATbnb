Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resources :users
    resource :session, only: [:create, :destroy]
    resources :listings, only: [:index, :show, :create, :destroy, :update]
    resources :reservations, only: [:index, :show, :create, :destroy, :update]
    resources :reviews, only: [:index, :create, :destroy, :update, :show]
    resource :favorites, only: [:create, :destroy]
  end
end