module Api
	module V1
		class ReviewsController < ApplicationController

			protect_from_forgery with: :null_session
			def create
				review = Review.new(review_params)
				if review.save
			      render json: review, status: 201
			    else 
			      render json: { message: 'Unable to create review!'}, status: 500
			    end
			end

			def destroy
		    	review = Review.find(params[:id])
		    	if review.destroy
		    		render json: {message: 'Review has been deleted!'}
		    	else
		    		render json: {error: review.errors.messages}, status: 500
		    	end
		  	end

			private
			def review_params
				params.require(:review).permit(:name, :description, :rating, :restaurant_id)
			end
		end
	end
end
