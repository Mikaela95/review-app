Rails.application.routes.draw do
  get 'pages/about'
  root 'pages#index'
  match '*path', to: 'pages#index', via: :all
end
