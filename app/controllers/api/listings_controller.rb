class Api::ListingsController < ApplicationController
     before_action :require_logged_in, only: [:create, :destroy, :update]

  def index
    #  listings = Listing.all

    #  if params[:minGuest] && params[:maxGuest]
    #    listings = listings.where(guest: guest_range)
    #  end

    # @listings = listings.includes(:reviews)
    @listings = Listing.all
     render :index
  end

  def show
    @listing = Listing.find(params[:id])
  end

  def create
   @listing = Listing.new(listing_params)
  
  if @listing.save!
    render :show
  else
    render json: @listing.errors.full_messages, status: 422
  end
   
  end

  def destroy
    @listing = Listing.find(params[:id])
    if @listing.destroy
      render :show
    else
      render json: @listing.errors.full_messages, status: 422
    end
  end

  def update
    @listing = Listing.find(params[:id])

    if @listing.update(listing_params)
      render :show
    else
      render json: @listing.errors.full_messages, status: 422
    end
  end

  private

  # def guests_range
  #   (params[:minGuest]..params[:maxGuest])
  # end

  def listing_params
    params.require(:listing).permit(
      :description,
      :location,
      :price,
      :bedroom,
      :bathroom,
      :title,
      :owner_Id,
      :guests,
      :latitude,
      :longitude,
      :photo,
      :city
    )
  end
  

  #  def bounds
  #    params[:bounds]
  #  end
end
