json.extract! user, :id, :username
# json.favorite_listings user.favorite_listings.pluck(:id)

json.reservations do 
    user.reservations.each do |reservation| 
        json.set! reservation.id do
            json.extract! reservation,
            :id,
            :check_in_date, 
            :check_out_date, 
            :number_of_guest,
            :guest_id,
            :listing_id
            json.extract! reservation.listing,
            :title,
            :price    
        end
    end
end
