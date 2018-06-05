class CreateCakes < ActiveRecord::Migration[5.2]
  def change
    create_table :cakes do |t|
      t.string :name
      t.text :description
      t.float :diameter
      t.float :price
      t.date :available_until

      t.timestamps
    end
  end
end
