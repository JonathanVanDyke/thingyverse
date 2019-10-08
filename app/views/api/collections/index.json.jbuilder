json.array! @collections do |collection|
    json.partial! 'collection', collection: collection
end

