# debugger
#Doesn't like this...

# json.collections @collections
@collections.each do |collection|
  json.set! collection.id do
    json.extract! collection, :id, :author_id, :title
    
    #To be refactored this out
    json.print_collects collection.print_collects
    json.collect_follows collection.collect_follows
    #To be refactored this out

    json.collected_prints collection.print_ids
  end
end

#try2
# @collections.each do |collection|
#   json.set! collection.id do
#     json.partial! 'collection', collection: collection
#   end
# end


