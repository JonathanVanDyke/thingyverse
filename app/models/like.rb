class Like < ApplicationRecord
  validates :user_id, uniqueness: { scope: :print_id }

  belongs_to :print
  belongs_to :user

end