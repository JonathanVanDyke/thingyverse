# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
# require 'open-uri'

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

User.create(
  username: 'User', 
  password: 123456, 
)

print1 = Print.create(
  id: 1,
  title: 'Gear Fidget Toy',
  text: 'Printed in one piece, the gears mesh. Recommended: No supports/using fine detail settings.',
  author_id: 1
)

print1.photo.attach(io: File.open(
  "/Users/jonathanvandyke/Documents/FullStack/thingyverse/app/assets/images/gears.jpg"), 
  filename: "gears.jpg"
)

print2 = Print.create(
  id: 2,
  title: 'Benchy',
  text: 'A new take on the calibration standard, test to see if your printer can handle the overhangs. ' +
  'Recommended: No supports/infill at least 20%.',
  author_id: 1
)

print2.photo.attach(io: File.open(
  "/Users/jonathanvandyke/Documents/FullStack/thingyverse/app/assets/images/benchy.jpg"), 
  filename: "benchy.jpg"
)

print3 = Print.create(
  id: 3,
  title: 'Hollow Knight',
  text: 'A figure of Hollow Knight, printed and painted. ' +
  'Printed with 20% infill at fine resolution and painted with acrylic piants. Happy Printing!',
  author_id: 1
)

print3.photo.attach(io: File.open(
  "/Users/jonathanvandyke/Documents/FullStack/thingyverse/app/assets/images/metabee.jpg"), 
  filename: "metabee.jpg"
)
print4 = Print.create(
  id: 4,
  title: 'Gear Fidget Toy',
  text: 'Printed in one piece, the gears mesh. ' +
  'Recommended: No supports/using fine detail settings.',
  author_id: 1
)

print4.photo.attach(io: File.open(
  "/Users/jonathanvandyke/Documents/FullStack/thingyverse/app/assets/images/gears.jpg"), 
  filename: "gears.jpg"
)

print5 = Print.create(
  id: 5,
  title: 'Benchy',
  text: 'A new take on the calibration standard, test to see if your printer can handle the overhangs. ' +
  'Recommended: No supports/infill at least 20%.',
  author_id: 1
)

print5.photo.attach(io: File.open(
  "/Users/jonathanvandyke/Documents/FullStack/thingyverse/app/assets/images/benchy.jpg"), 
  filename: "benchy.jpg"
)

print6 = Print.create(
  id: 6,
  title: 'Hollow Knight',
  text: 'A figure of Hollow Knight, printed and painted. ' +
  'Printed with 20% infill at fine resolution and painted with acrylic piants. Happy Printing!',
  author_id: 1
)

print6.photo.attach(io: File.open(
  "/Users/jonathanvandyke/Documents/FullStack/thingyverse/app/assets/images/metabee.jpg"), 
  filename: "metabee.jpg"
)