class Listing < ApplicationRecord
    validates :description, :bedroom, :bathroom, :location, :owner_Id, :price, :guests, :title, :latitude, :longitude, presence: true

    # has_many :reviews
    # has_many :favorites
    # has_many :favorite_users,
    # through: :favorites,
    # source: :user
    
    belongs_to :user,
    foreign_key: :owner_Id,
    class_name: :User


end
