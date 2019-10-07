# debugger
json.extract! print, :id, :title, :text
json.photoUrl url_for(print.photo)
# json.extract! print.user, :id, :avatar

json.author print.user.id

json.user_likes print.user_like_ids
# may want to extract associations here