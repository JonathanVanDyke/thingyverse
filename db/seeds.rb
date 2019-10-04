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

User.create(
  username: 'User', 
  password: 123456, 
)

Print.create(
  title: 'Hollow Knight',
  text: 'A figure of Hollow Knight, printed and painted. ' +
  'Printed with 20% infill at fine resolution and painted with acrylic piants. Happy Printing!',
  author_id: 10
).photo.attach(io: File.open(
  "/Users/jonathanvandyke/Documents/FullStack/thingyverse/app/assets/images/metabee.jpg"), 
  filename: "metabee.jpg"
)

Print.create(
  title: 'Gear Fidget Toy',
  text: 'Printed in one piece, the gears mesh. ' +
  'Recommended: No supports/using fine detail settings.',
  author_id: 111
).photo.attach(io: File.open(
  "/Users/jonathanvandyke/Documents/FullStack/thingyverse/app/assets/images/gears.jpg"), 
  filename: "gears.jpg"
)

Print.create(
  title: 'Benchy',
  text: 'A new take on the calibration standard, test to see if your printer can handle the overhangs. ' +
  'Recommended: No supports/infill at least 20%.',
  author_id: 12
).photo.attach(io: File.open(
  "/Users/jonathanvandyke/Documents/FullStack/thingyverse/app/assets/images/benchy.jpg"), 
  filename: "benchy.jpg"
)

Print.create(
  title: 'Hollow Knight',
  text: 'A figure of Hollow Knight, printed and painted. ' +
  'Printed with 20% infill at fine resolution and painted with acrylic piants. Happy Printing!',
  author_id: 13
).photo.attach(io: File.open(
  "/Users/jonathanvandyke/Documents/FullStack/thingyverse/app/assets/images/metabee.jpg"), 
  filename: "metabee.jpg"
)

Print.create(
  title: 'Gear Fidget Toy',
  text: 'Printed in one piece, the gears mesh. ' +
  'Recommended: No supports/using fine detail settings.',
  author_id: 14
).photo.attach(io: File.open(
  "/Users/jonathanvandyke/Documents/FullStack/thingyverse/app/assets/images/gears.jpg"), 
  filename: "gears.jpg"
)

Print.create(
  title: 'Benchy',
  text: 'A new take on the calibration standard, test to see if your printer can handle the overhangs. ' +
  'Recommended: No supports/infill at least 20%.',
  author_id: 15
).photo.attach(io: File.open(
  "/Users/jonathanvandyke/Documents/FullStack/thingyverse/app/assets/images/benchy.jpg"), 
  filename: "benchy.jpg"
)