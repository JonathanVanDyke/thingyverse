json.array! @collect_follows do |collect_follow|
    json.partial! 'collect_follow', collect_follow: collect_follow
end

