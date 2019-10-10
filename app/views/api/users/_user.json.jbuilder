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
json.collections user.collections
json.collect_follows user.collect_follows

json.owned_collections user.collection_ids

collected_prints = []
user.collections.each do |collection|
  # json.extract! collection, :collected_prints
  # debugger
  collected_prints << collection.print_ids
end

user.collections[0].print_ids if user.collections[0]


json.first_collection_prints user.collections[0].print_ids if user.collections[0]