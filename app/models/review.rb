class Review < ApplicationRecord
  validates :rating, inclusion: { in: (1..5) }

  belongs_to :listing,
  foreign_key: :listing_id,
  class_name: :Listing
  

  belongs_to :author,
  foreign_key: :author_id,
  class_name: :User
end
