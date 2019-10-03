@prints.each do |print|
  # debugger
  json.set! print.id do
    json.partial! 'print', print: print
  end
end
