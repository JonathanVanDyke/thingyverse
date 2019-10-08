# debugger
json.extract! print, :id, :title, :text
json.photoUrl url_for(print.photo)
# json.extract! print.user, :id, :avatar

json.author print.user.id

# json.user_likes do
#   json.extract! print.user, :id, :avatar, :username
# end
json.user_likes print.user_like_ids
json.user_like_profs print.user_likes.each do |user_like|
  json.extract! user_like, :id, :avatar, :username
end

#haha... who even knew
# json.user_like_profs [{
#   avatar: print.user_likes.avatar, 
#   userId: print.user_likes.id,
#   username: print.user_likes.username,
#   }]

# json.user_avatars print.user_avatars

