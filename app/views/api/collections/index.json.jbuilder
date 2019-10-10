# debugger
#Doesn't like this...

# json.collections @collections
@collections.each do |collection|
  json.set! collection.id do
    json.extract! collection, :id, :author_id, :title
    json.print_collects collection.print_collects
    # json.print_collects collection.print_ids
    json.collect_follows collection.collect_follows
  end
end

#try2
# @collections.each do |collection|
#   json.set! collection.id do
#     json.partial! 'collection', collection: collection
#   end
# end



