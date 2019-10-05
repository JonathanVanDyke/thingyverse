# debugger
json.extract! print, :id, :title, :text
json.photoUrl url_for(print.photo)
# json.extract! print.user, :id, :avatar

json.author do
  json.extract! print.user, :id, :username, :avatar
end
# may want to extract associations here