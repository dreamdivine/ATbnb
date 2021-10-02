class AddRoomsToListings < ActiveRecord::Migration[5.2]
  def change
    add_column :listings, :bedroom, :integer, null: false
    add_column :listings, :bathroom, :integer, null: false
    add_column :listings, :location, :string, null: false
    add_column :listings, :ownerId, :string, null: false
    add_index :listings, :ownerId
  end
end
