class AddPriceToListings < ActiveRecord::Migration[5.2]
  def change
    add_column :listings, :price, :float, null: false
    add_column :listings, :title, :string, null: false
  end
end
