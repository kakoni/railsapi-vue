Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      get '/users', to: 'users#index'
    end
  end
end
