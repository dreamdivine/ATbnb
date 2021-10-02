class CreateListings < ActiveRecord::Migration[5.2]
  def change
    create_table :listings do |t|
      t.string :description
      t.float :latitude
      t.float :longitude
      t.integer :seating, default: 2, null: false
      t.string :picture_url

      t.timestamps
    end
  end
end
