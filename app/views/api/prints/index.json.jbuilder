@prints.each do |print|
  json.set! print.id do
    json.partial! 'print', print: print
  end
end

