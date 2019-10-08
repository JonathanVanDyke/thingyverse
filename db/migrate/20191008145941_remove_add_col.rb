class RemoveAddCol < ActiveRecord::Migration[5.2]
  def change
    remove_column :collections, :cover_url
    add_column :collections, :cover_url, :string
  end
end
