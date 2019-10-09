class CreateCollectFollows < ActiveRecord::Migration[5.2]
  def change
    create_table :collect_follows do |t|
      t.integer :collection_id
      t.integer :follower_id

      t.timestamps
    end
    add_index :collect_follows, :collection_id
    add_index :collect_follows, :follower_id
  end
end
