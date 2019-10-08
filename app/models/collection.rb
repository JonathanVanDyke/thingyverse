class Collection < ApplicationRecord
  validates :title, :author_id, presence: true

  has_many :collect_follows,
    foreign_key: :collection_id,
    class_name: :CollectionFollow

  has_many :print_collects,
    foreign_key: :collection_id,
    class_name: :PrintCollect
end