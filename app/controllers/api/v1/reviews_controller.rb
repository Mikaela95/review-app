module Api
	module V1
		class ReviewsController < ApplicationController

		def create
			review = Review.new(review_params)
			if user.valid?
		      render json: user, status: 201
		    else 
		      render json: { message: 'Unable to create review!'}, status: 500
		    end
		end

		def destroy
	    	Review.destroy(params[:id])
	    	render json: {message: 'Review has been deleted!'}
	  	end

		private
		def review_params
			params.require(:review).permit(:name, :description, :rating, :restaurant_id)
		end
		end
	end
end
