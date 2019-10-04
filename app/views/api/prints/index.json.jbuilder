@prints.each do |print|
  # debugger
  json.set! print.id do
    json.partial! 'print', print: print
  end
end

# json.array! @prints do |print|
#   json.extract! print, :id, :title
#   json.photoUrl url_for(print.photo)
# end