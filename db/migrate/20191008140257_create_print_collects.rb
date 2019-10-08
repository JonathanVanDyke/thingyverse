class CreatePrintCollects < ActiveRecord::Migration[5.2]
  def change
    create_table :print_collects do |t|
      t.integer :collection_id, null: false
      t.integer :print_id, null: false
      
      t.timestamps
    end
    add_index :print_collects, :collection_id
    add_index :print_collects, :print_id
  end
end
