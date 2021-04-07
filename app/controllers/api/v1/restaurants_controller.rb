module Api
	module V1
		class RestaurantsController < ApplicationController
			def index
				render json: Restaurant.all
			end

			def show
				puts params[:id]
    			render json: Restaurant.find(params[:id])
			end

			def create
				restaurant = Restaurant.create(name: params[:name], image_url: params[:image_url], delivery: params[:delivery])
			    restaurant_valid = restaurant.valid?
			    p restaurant
			    p restaurant_valid
			    if restaurant_valid
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
				Restaurant.destroy(params[:id])
    			render json: {message: 'ENTRY HAS BEEN DELETED!!!!!'}
			end
		end
	end
end
