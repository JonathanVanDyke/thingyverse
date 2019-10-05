class RemoveIndex < ActiveRecord::Migration[5.2]
  def change
    remove_index :prints, :author_id
  end
end
