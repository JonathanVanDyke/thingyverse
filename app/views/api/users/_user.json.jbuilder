json.extract! user, :id, :username, :avatar, :bio
# may want to extract associations here
# debugger

#not quite right...
# user.prints.each do |print|
#   json.extract! print, :id, :title, :text
#   json.photoUrl url_for(print.photo)
# end

#how about... is this n+1?
json.designs user.prints#.pluck(:id)
json.liked_prints user.liked_prints