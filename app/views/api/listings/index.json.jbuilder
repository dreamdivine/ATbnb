
    @listings.each do |listing|
   json.set! listing.id do
     json.partial! "listing", listing: listing
  end
end
  
  # json.array! @listings do |listing|
  #   json.extract! listing, :id, :title
  # end



 


