class Listing < ApplicationRecord
    validates :description, :bedroom, :bathroom, :location, :owner_Id, :price, :guests, :title, :latitude, :longitude, presence: true

    has_many :reviews,
    foreign_key: :listing_id,
    class_name: :Listing
  
    # has_many :favorites
    # has_many :favorite_users,
    # through: :favorites,
    # source: :user
    
    belongs_to :user,
    foreign_key: :owner_Id,
    class_name: :User

    has_one_attached :photo

    #  def average_rating
    #    reviews.average(:rating)
    #  end


end
