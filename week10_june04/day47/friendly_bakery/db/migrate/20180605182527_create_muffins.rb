class CreateMuffins < ActiveRecord::Migration[5.2]
  def change
    create_table :muffins do |t|
      t.string :name
      t.text :description
      t.string :category
      t.float :price
      t.date :available_until

      t.timestamps
    end
  end
end
