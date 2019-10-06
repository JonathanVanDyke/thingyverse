class Print < ApplicationRecord
  validates :title, presence: true

  has_one_attached :photo

  belongs_to :user,
    foreign_key: :author_id,
    class_name: :User

  has_many :likes, dependent: :destroy
  has_many :user_likes,
    through: :likes,
    source: :user
# rails g model Like post:references user:references
end