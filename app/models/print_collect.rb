class PrintCollect < ApplicationRecord
  validates :collection_id, presence: true 

  belongs_to :print,
    foreign_key: :print_id,
    class_name: :Print

  belongs_to :collection,
    foreign_key: :collection_id,
    class_name: :Collection

end