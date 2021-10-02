class Listing < ApplicationRecord
    validates :description, :latitude, :longitude, :bedroom, :bathroom, :location, :price, :title, presence: true

    # has_many :reviews
    # has_many :favorites
    # has_many :favorite_users,
    # through: :favorites,
    # source: :user
    
    belongs_to :user,
    foreign_key: :owner_Id,
    class_name: :User


  # has_one_attached :photo

end
