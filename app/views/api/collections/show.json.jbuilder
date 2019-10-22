# debugger
json.set! @collection.id do
  json.id @collection.id
  json.author_id @collection.author_id
  json.title @collection.title
  # json.print_collects @collection.print_collects
  json.collect_follows @collection.collect_follows
  json.collected_prints @collection.print_ids

end