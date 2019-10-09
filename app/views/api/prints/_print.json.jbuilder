json.extract! print, :id, :title, :text
json.photoUrl url_for(print.photo)

json.author print.user.id

json.user_likes print.user_like_ids
json.user_like_profs print.user_likes.each do |user_like|
  json.extract! user_like, :id, :avatar, :username
end
