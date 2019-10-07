json.extract! user, :id, :username, :avatar, :bio
# may want to extract associations here
# debugger

#not quite right...
# user.prints.each do |print|
#   json.extract! print, :id, :title, :text
#   json.photoUrl url_for(print.photo)
# end

#THIS WORKS
# json.designs user.prints#.pluck(:id)
# json.liked_prints user.liked_prints

#TRY FOR PHOTOURL
# debugger

#How to limit user info shared via association?
# json.designs do
#   json.array! user.prints.each do |print|
#     json.extract! print, :id, :title, :text, :likes, :user
#     json.photoUrl url_for(print.photo)
#   end
# end

json.designs user.print_ids

json.liked_prints user.liked_print_ids