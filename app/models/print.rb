class Print < ApplicationRecord
  validates :title, presence: true

  #! ACTIVE STORAGE GOODNESS
  has_one_attached :photo
  # belongs_to :user
end