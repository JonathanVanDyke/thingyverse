json.extract! user, :id, :username, :avatar, :bio
# may want to extract associations here
debugger
user.prints.each do |print|
  json.extract! print, :id, :title, :text
  json.photoUrl url_for(print.photo)
end