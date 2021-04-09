module Api
	module V1
		class RestaurantsController < ApplicationController
			protect_from_forgery with: :null_session
			# skip_before_action :verify_authenticity_token
			def index
				restaurant = Restaurant.all

				render json: restaurant.to_json(include: [:reviews])

			end

			def show
				restaurant = Restaurant.find(params[:id])
				# puts params[:id]
    			render json: restaurant.to_json(include: [:reviews])
			end

			def create
				restaurant = Restaurant.new(name: params[:name], image_url: params[:image_url], delivery: params[:delivery])
			    
			    if restaurant.save
			      render json: {message: 'Successfully created a restaurant!'}, status: 200
			    else
			      render json: {message: 'Unable to create a restaurant'}, status: 400
			    end
			end

			def update
				restaurant = Restaurant.find(params[:id])
    			restaurant.update(name: params[:name], image_url: params[:image_url], delivery: params[:delivery])
    			render json: {type: 'Successfully updated entry!'}
			end

			def destroy
				restaurant = Restaurant.find(params[:id])
				restaurant.destroy
    			render json: {message: 'ENTRY HAS BEEN DELETED!!!!!'}
			end
		end
	end
end
