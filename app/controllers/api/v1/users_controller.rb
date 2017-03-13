module Api::V1
  class UsersController < ApplicationController
    def index
      render json: '{"name": "kake"}'
    end
  end
end
