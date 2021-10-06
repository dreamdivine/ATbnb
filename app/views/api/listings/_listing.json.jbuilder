json.extract! listing, :id, :description, :guests, :bedroom, :bathroom, :owner_Id, :location, :price, :title, :latitude, :longitude
# json.photoUrl url_for(listing.photo)
# puts(listing.photoUrl)
# puts ("hello" listing)
# errorMessage = "atuladhar"
# if json.photoUrl != nil 
#    errorMessage += "photoUrl is " + json.photoUrl 
# end
# if listing.photo.attachment != nil
#    errorMessage += "photo attachment is " + listing.photo.attachment
# end
# raise errorMessage

if listing.photo.attachment == nil
   json.photoUrl = ""
else
   json.photoUrl url_for(listing.photo)
end

