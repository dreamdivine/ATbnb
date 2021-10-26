json.extract! reservation, :id, :check_in_date, :check_out_date, :guest_id, :number_of_guest, :listing_id
json.extract! reservation.listing, :title, :price

