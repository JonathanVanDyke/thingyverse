class Print < ApplicationRecord
  validates :title, presence: true

  has_one_attached :photo

  belongs_to :user,
    foreign_key: :author_id,
    class_name: :User

end