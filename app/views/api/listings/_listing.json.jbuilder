json.extract! listing, :id, :description, :guests, :bedroom, :bathroom, :owner_Id, :location, :price, :title, :latitude, :longitude
# json.photoUrl url_for(listing.photo)

if listing.photo.attachment == nil
   json.photoUrl = ''
else
   json.photoUrl url_for(listing.photo)
end