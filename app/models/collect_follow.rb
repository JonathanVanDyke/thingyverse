class CollectFollow < ApplicationRecord
  validates :collection_id, :follower_id, presence: true

  belongs_to :collection,
    foreign_key: :collection_id,
    class_name: :Collection

  belongs_to :follower,
    foreign_key: :follower_id,
    class_name: :User
end