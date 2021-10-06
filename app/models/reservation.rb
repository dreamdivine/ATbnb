class Reservation < ApplicationRecord
    validates :number_of_guest, :guest_id, :listing_id, :check_in_date, :check_out_date, presence: true

    belongs_to :guest,
        foreign_key: :guest_id,
        class_name: :User

    belongs_to :listing,
        foreign_key: :listing_id,
        class_name: :Listing
end