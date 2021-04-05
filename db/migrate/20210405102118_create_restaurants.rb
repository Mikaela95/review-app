class CreateRestaurants < ActiveRecord::Migration[6.1]
  def change
    create_table :restaurants do |t|
      t.string :name
      t.string :image_url
      t.string :delivery

      t.timestamps
    end
  end
end
