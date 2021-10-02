class MakeChangedToListings < ActiveRecord::Migration[5.2]
  def change
    remove_column :listings, :ownerId, :string
    add_column :listings, :owner_Id, :integer, null: false 
  end
end
