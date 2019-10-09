class Collection < ApplicationRecord
  validates :title, :author_id, presence: true

  belongs_to :author,
    foreign_key: :author_id,
    class_name: :User
    
  has_many :collect_follows,
    foreign_key: :collection_id,
    class_name: :CollectFollow

  has_many :print_collects,
    foreign_key: :collection_id,
    class_name: :PrintCollect

  has_many :prints,
    through: :print_collects,
    source: :print
end