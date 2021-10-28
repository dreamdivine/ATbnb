class Api::ReviewsController < ApplicationController
  before_action :require_logged_in, only: [:create, :destroy, :update]

  def index
    @reviews = Review.all
  end 

  def show
    @review = Review.find_by(id: params[:id])
  end

  def create
    @review = current_user.reviews.new(review_params)

    if @review.save
      render :show
    else
      render json: @review.errors.full_messages, status: :unprocessable_entity
    end
  end

  def update
    @review = Review.find_by(id: params[:id])
    if @review.update(review_params)
      render :show
    else
      render json: @review.errors.full_message, status: 422
    end
  end 

  def destroy
    @review = Review.find_by(id: params[:id])

    if @review.destroy
      render :show
    else
      render json: @review.errors.full_messages, status: 422
    end 

  end

  private

  def review_params
    params.require(:review).permit(:rating, :body, :listing_id)
  end
end
