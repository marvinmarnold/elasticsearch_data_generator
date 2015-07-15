require 'json'
### Set these ###
index = ARGV[0]
type = ARGV[1]
################

file_name = index + ".json"
file = File.read(file_name)
consultations_hash = JSON.parse(file)

puts "POST /_bulk"
create = {create: {_index: index, _type: type}}
consultations_hash.each do |i|
  puts create.to_json
  puts i.to_json
end

