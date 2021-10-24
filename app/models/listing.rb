class Listing < ApplicationRecord
    validates :description, :bedroom, :bathroom, :location, :owner_Id, :price, :guests, :title, :latitude, :longitude, :city, presence: true
    validate :ensure_photo

    has_many :reviews,
    foreign_key: :listing_id,
    class_name: :Listing

     has_many :reserve,
     foreign_key: :listing_id,
     class_name: :Reservation  
  
    # has_many :favorites
    # has_many :favorite_users,
    # through: :favorites,
    # source: :user
    
    belongs_to :user,
    foreign_key: :owner_Id,
    class_name: :User

    has_one_attached :photo

    def ensure_photo
        unless self.photo.attached? 
         errors[:photo] << "must be attached"   
        end
    end

    # def self.in_bounds(bounds)
    #     self.where("lat < ?", bounds[:northEast][:latitude])
    #         .where("lat > ?", bounds[:southWest][:latitude])
    #         .where("lng > ?", bounds[:southWest][:longitude])
    #         .where("lng < ?", bounds[:northEast][:longitude])
    # end


end
