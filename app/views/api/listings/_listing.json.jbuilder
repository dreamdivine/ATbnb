json.extract! listing, :id, :description, :guests, :bedroom, :bathroom, :owner_Id, :location, :price, :title, :latitude, :longitude
json.photoUrl url_for(listing.photo)