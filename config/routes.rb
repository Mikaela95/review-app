Rails.application.routes.draw do
  get 'pages/categories'
  root 'pages#index'
  match '*path', to: 'pages#index', via: :all
end
