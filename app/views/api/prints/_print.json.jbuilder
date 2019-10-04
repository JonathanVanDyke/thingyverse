json.extract! print, :id, :title, :text
json.photoUrl url_for(print.photo)
# may want to extract associations here