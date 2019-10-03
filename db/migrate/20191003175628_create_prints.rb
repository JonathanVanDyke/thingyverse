class CreatePrints < ActiveRecord::Migration[5.2]
  def change
    create_table :prints do |t|
      t.string :text
      t.string :title, null: false
      t.integer :author_id, null: false

      t.timestamps
    end
    add_index :prints, :author_id
  end
end
