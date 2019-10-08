# debugger
#Doesn't like this...

# json.collections @collections
@collections.each do |collection|
  json.set! collection.id do
    json.extract! collection, :id, :author_id, :title
  end
end

#try2
# @collections.each do |collection|
#   json.set! collection.id do
#     json.partial! 'collection', collection: collection
#   end
# end



