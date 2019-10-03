# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create(
  username: 'batman', 
  password: 123456, 
  avatar: 'https://yt3.ggpht.com/a-/AN66SAyW7_G88470M3EXPWYumvllhUGNIXCcbwY4_w=s900-mo-c-c0xffffffff-rj-k-no',
  bio: 'NaNaNaNaNaanaanaaNanA batman... 
  NaNaNaNaNaanaanaaNanA batman... 
  NaNaNaNaNaanaanaaNanA batman... 
  NaNaNaNaNaanaanaaNanA batman... 
  NaNaNaNaNaanaanaaNanA batman... 
  NaNaNaNaNaanaanaaNanA batman... 
  NaNaNaNaNaanaanaaNanA batman... 
  NaNaNaNaNaanaanaaNanA batman... 
  NaNaNaNaNaanaanaaNanA batman  ')

Print.create(
  text: 'This is a print This is a print
  This is a print This is a print
  This is a print This is a print
  This is a print This is a print
  This is a print This is a print',
  tite: 'Brass Ring',
  author_id: 1
)