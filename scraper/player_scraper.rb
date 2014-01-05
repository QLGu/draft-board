require 'nokogiri'
require 'json'

players = []
file = File.open('./players.html')

doc = Nokogiri::HTML(file).css('tr:not(:first-child)').collect do |row|
  players << { 
    rank:     row.at('td[1]').content[/\d+/],
    name:     row.at('td[2]').content,
    pos:      row.at('td[3]').content,
    pos_rank: row.at('td[4]').content,
    school:   row.at('td[5]').content,
    year:     row.at('td[6]').content,
    height:   row.at('td[7]').content,
    weight:   row.at('td[8]').content
  }
end

File.open('players.json', 'w+') { |file| file.puts players.to_json }