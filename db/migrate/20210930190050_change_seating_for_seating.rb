class ChangeSeatingForSeating < ActiveRecord::Migration[5.2]
  def change
    rename_column :listings, :seating, :guests
  end
end
