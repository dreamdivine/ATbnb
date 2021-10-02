# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Review.destroy_all
Favorite.destroy_all
Listing.delete_all
User.delete_all


User.create!({username:"demoUser", email: "demo@user.com", password:"demoUser", first_name: 'demo', last_name: 'user'})

u1 = User.create!(
  username: 'guest',
  password: 'password',
  email: 'email1@gmail.com',
  first_name: "u1",
  last_name: "u1"
)

u2 = User.create!(
  username: 'username2',
  password: 'password',
  email: 'email2@gmail.com',
  first_name: 'u2',
  last_name: 'u2'
)

u3 = User.create!(
  username: 'username3',
  password: 'password',
  email: 'email3@gmail.com',
  first_name: 'u3',
  last_name: 'u3'
)


u4 = User.create!(
  username: 'username4',
  password: 'password',
  email: 'email4@gmail.com',
  first_name: "u4",
  last_name: "u4"
)

u5 = User.create!(
  username: 'username5',
  password: 'password',
  email: 'email5@gmail.com',
  first_name: 'u5',
  last_name: 'u5'
)

u6 = User.create!(
  username: 'username6',
  password: 'password',
  email: 'email6@gmail.com',
  first_name: 'u6',
  last_name: 'u6'
)

u7 = User.create!(
  username: 'username7',
  password: 'password',
  email: 'email7@gmail.com',
  first_name: 'u7',
  last_name: 'u7'
)

u8 = User.create!(
  username: 'username8',
  password: 'password',
  email: 'email8@gmail.com',
  first_name: "u8",
  last_name: "u8"
)

u9 = User.create!(
  username: 'username9',
  password: 'password',
  email: 'email9@gmail.com',
  first_name: 'u9',
  last_name: 'u9'
)

u10 = User.create!(
  username: 'username10',
  password: 'password',
  email: 'email10@gmail.com',
  first_name: 'u10',
  last_name: 'u10'
)

u11 = User.create!(
  username: 'username11',
  password: 'password',
  email: 'email11@gmail.com',
  first_name: 'u11',
  last_name: 'u11'
)

u12 = User.create!(
  username: 'username12',
  password: 'password',
  email: 'email12@gmail.com',
  first_name: 'u12',
  last_name: 'u12'
)


l1 = Listing.create!(
  description: 'my awesome home',
  title: "Welcome to my home",
  guests: 4,
  owner_Id: u1.id,
  latitude: 37.782415,
  bedroom: 2,
  bathroom: 1,
  price: 100,
  longitude: -122.442517,
  location: "1234 webster st, alameda, ca",
  picture_url: 'https://www.rocketmortgage.com/resources-cmsassets/RocketMortgage.com/Article_Images/Large_Images/TypesOfHomes/types-of-homes-hero.jpg'
)

l2 = Listing.create!(
  description: 'my awesome home for you to stay',
  title: "welcome to my home",
  owner_Id: u2.id,
  guests: 2,
  latitude: 37.754500,
  bedroom: 4,
  bathroom: 2,
  price: 200,
  longitude: -122.457967,
  location: "1234 webster st, alameda, ca",
  picture_url: 'https://images.adsttc.com/media/images/5e1d/02c3/3312/fd58/9c00/06e9/slideshow/NewHouse_SA_Photo_01.jpg?1578959519'
)


l3 = Listing.create!(
  description: 'my awesome home for you to stay',
  title: "welcome to my home",
  owner_Id: u3.id,
  guests: 2,
  latitude: 37.754500,
  bedroom: 4,
  bathroom: 2,
  price: 200,
  longitude: -122.457967,
  location: "1234 webster st, alameda, ca",
  picture_url: 'https://images.adsttc.com/media/images/5e1d/02c3/3312/fd58/9c00/06e9/slideshow/NewHouse_SA_Photo_01.jpg?1578959519'
)

# Favorite.create(user_id: u2.id, listing_id:  l1.id)
# Favorite.create(user_id: u3.id, listing_id:  l2.id)

# Review.create(author_id: u2.id, listing_id:  l1.id, body: "very good house", rating: 5)
# Review.create(author_id: u3.id, listing_id:  l2.id, body: "its okay house", rating: 3)