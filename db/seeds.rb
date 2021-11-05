# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'open-uri'

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

l1 = Listing.new(
  description: 'Wifi . Kitchen . Washer . Dryer',
  title: "Civic Center Views from a Contemporary City Pad and Parking",
  guests: 3,
  owner_Id: u1.id,
  latitude: 37.778685,
  bedroom: 1,
  bathroom: 1,
  city: "San Francisco",
  price: 76,
  longitude: -122.419562,
  location: "310 Van Ness Ave, San Francisco, CA 94102"
)

l1photo = open("https://atbnb-seed.s3.us-west-1.amazonaws.com/atbnbpics/sj1.jpeg")
l1.photo.attach(io: l1photo, filename: "list1")

l1.save

l2 = Listing.new(
  description: 'Wifi . Kitchen . Washer . Dryer',
  title: "Beautiful Victorian 2Bed 1 Bath with deck",
  owner_Id: u1.id,
  guests: 4,
  latitude: 37.786375,
  bedroom: 2,
  bathroom: 1,
  city: "San Francisco",
  price: 160,
  longitude: -122.391993,
  location: "401 Harrison St, San Francisco, CA 94105"
)

l2photo = open("https://atbnb-seed.s3.us-west-1.amazonaws.com/atbnbpics/sf2.jpeg")
l2.photo.attach(io: l2photo, filename: "list2")

l2.save


l9 = Listing.new(
  description: 'Wifi . Kitchen . Washer . Dryer',
  title: "Brand New Guest Suite + Full Kitchen + Parking",
  owner_Id: u2.id,
  guests: 2,
  latitude: 37.283802,
  bedroom: 1,
  bathroom: 1,
  city: "San Jose",
  price: 88,
  longitude: -121.913776,
  location: "1757 Miriam Ct, SAN JOSE, CA 95124"
)

l9photo = open("https://atbnb-seed.s3.us-west-1.amazonaws.com/atbnbpics/sj1.jpeg")
l9.photo.attach(io: l9photo, filename: "list9")

l9.save


l10 = Listing.new(
  description: 'Wifi . Kitchen . Washer . Dryer',
  title: "Silicon Valley Studio Apartment",
  owner_Id: u2.id,
  guests: 3,
  latitude: 37.242210,
  bedroom: 2,
  bathroom: 1,
  city: "San Jose",
  price: 100,
  longitude: -121.915243,
  location: "5293 Roxanne Dr, SAN JOSE, CA 95124"
)

l10photo = open("https://atbnb-seed.s3.us-west-1.amazonaws.com/atbnbpics/sj2.jpeg")
l10.photo.attach(io: l10photo, filename: "list10")

l10.save


l17 = Listing.new(
  description: 'Wifi . Kitchen . Washer . Dryer',
  title: "Private Casita with Stunning View",
  owner_Id: u3.id,
  guests: 2,
  latitude: 37.789375,
  bedroom: 1,
  bathroom: 1,
  city: "Oakland",
  price: 79,
  longitude: -122.201409,
  location: "3328 Over St, Oakland, CA 94619"
)

l17photo = open("https://atbnb-seed.s3.us-west-1.amazonaws.com/atbnbpics/oakland1.jpeg")
l17.photo.attach(io: l17photo, filename: "list17")

l17.save


l18 = Listing.new(
  description: 'Wifi . Kitchen . Washer . Dryer',
  title: "Private, Detached, Urban Creekside Studio.",
  owner_Id: u3.id,
  guests: 3,
  latitude: 37.726721,
  bedroom: 2,
  bathroom: 1,
  city: "Oakland",
  price: 72,
  longitude: -122.175470,
  location: "236 Bergedo Dr, Oakland, CA 94603"
)

l18photo = open("https://atbnb-seed.s3.us-west-1.amazonaws.com/atbnbpics/oakland2.jpeg")
l18.photo.attach(io: l18photo, filename: "list18")

l18.save



l25 = Listing.new(
  description: 'Wifi . Kitchen . Washer . Dryer',
  title: "Secluded Panoramic Coastal View",
  owner_Id: u4.id,
  guests: 3,
  latitude: 37.775416,
  bedroom: 2,
  bathroom: 1,
  city: "Santa Barbara",
  price: 72,
  longitude: -122.178652,
  location: "6307 Laird Ave, Oakland, CA 94605"
)

l25photo = open("https://atbnb-seed.s3.us-west-1.amazonaws.com/atbnbpics/sj2.jpeg")
l25.photo.attach(io: l25photo, filename: "list25")

l25.save


l26 = Listing.new(
  description: 'Wifi . Kitchen . Washer . Dryer',
  title: "West Beach Oasis",
  owner_Id: u4.id,
  guests: 3,
  latitude: 34.427979,
  bedroom: 2,
  bathroom: 1,
  city: "Santa Barbara",
  price: 72,
  longitude: -119.802877,
  location: "5109 San Vicente Dr, Santa Barbara, CA 93111"
)

l26photo = open("https://atbnb-seed.s3.us-west-1.amazonaws.com/atbnbpics/sj2.jpeg")
l26.photo.attach(io: l26photo, filename: "list26")

l26.save

l33 = Listing.new(
  description: 'Wifi . Kitchen . Washer . Dryer',
  title: "Cozy 2bed in wooded area near beach!",
  owner_Id: u5.id,
  guests: 3,
  latitude: 38.698233,
  bedroom: 2,
  bathroom: 1,
  city: "Sacramento",
  price: 72,
  longitude: -121.348199,
  location: "7232 Old Nave Ct, Sacramento, CA 95842"
)

l33photo = open("https://atbnb-seed.s3.us-west-1.amazonaws.com/atbnbpics/sj2.jpeg")
l33.photo.attach(io: l33photo, filename: "list33")

l33.save


l34 = Listing.new(
  description: 'Wifi . Kitchen . Washer . Dryer',
  title: "Arden Home with Spa and Lap Pool!",
  owner_Id: u5.id,
  guests: 3,
  latitude: 38.478721,
  bedroom: 2,
  bathroom: 1,
  city: "Sacramento",
  price: 72,
  longitude: -121.454925,
  location: "7509 Sun Willow Ln, Sacramento, CA 95823"
)

l34photo = open("https://atbnb-seed.s3.us-west-1.amazonaws.com/atbnbpics/sj2.jpeg")
l34.photo.attach(io: l34photo, filename: "list34")

l34.save


l41 = Listing.new(
  description: 'Wifi . Kitchen . Washer . Dryer',
  title: "Mountain Shadows Home away from Home",
  owner_Id: u6.id,
  guests: 3,
  latitude: 37.641964,
  bedroom: 2,
  bathroom: 1,
  city: "Mammoth Lakes",
  price: 72,
  longitude: -118.976084,
  location: "450 Lupin St, Mammoth Lakes, CA 93546"
)

l41photo = open("https://atbnb-seed.s3.us-west-1.amazonaws.com/atbnbpics/sj2.jpeg")
l41.photo.attach(io: l41photo, filename: "list41")

l41.save


l42 = Listing.new(
  description: 'Wifi . Kitchen . Washer . Dryer',
  title: "Charming Village Studio Loft",
  owner_Id: u6.id,
  guests: 3,
  latitude: 37.654594,
  bedroom: 2,
  bathroom: 1,
  city: "Mammoth Lakes",
  price: 72,
  longitude: -118.983042,
  location: "246 Saint Anton Cir, Mammoth Lakes, CA 93546"
)

l42photo = open("https://atbnb-seed.s3.us-west-1.amazonaws.com/atbnbpics/sj2.jpeg")
l42.photo.attach(io: l42photo, filename: "list42")

l42.save


l49 = Listing.new(
  description: 'Wifi . Kitchen . Washer . Dryer',
  title: "Winterfell Tahoe",
  owner_Id: u7.id,
  guests: 3,
  latitude: 38.947305,
  bedroom: 2,
  bathroom: 1,
  city: "South Lake Tahoe",
  price: 72,
  longitude: -119.941100,
  location: "3525 Rocky Point Rd, South Lake Tahoe, CA 96150"
)

l49photo = open("https://atbnb-seed.s3.us-west-1.amazonaws.com/atbnbpics/sj2.jpeg")
l49.photo.attach(io: l49photo, filename: "list49")

l49.save


l50 = Listing.new(
  description: 'Wifi . Kitchen . Washer . Dryer',
  title: "Nice house. 5 minutes walk to the beach.",
  owner_Id: u7.id,
  guests: 3,
  latitude: 38.922494,
  bedroom: 2,
  bathroom: 1,
  city: "South Lake Tahoe",
  price: 72,
  longitude: -119.984509,
  location: "2525 Armstrong Ave, South Lake Tahoe, CA 96150"
)

l50photo = open("https://atbnb-seed.s3.us-west-1.amazonaws.com/atbnbpics/sj2.jpeg")
l50.photo.attach(io: l50photo, filename: "list50")

l50.save

l57 = Listing.new(
  description: 'Wifi . Kitchen . Washer . Dryer',
  title: "Secluded luxury cottage & hot tub",
  owner_Id: u8.id,
  guests: 3,
  latitude: 37.888568,
  bedroom: 2,
  bathroom: 1,
  city: "Berkeley",
  price: 72,
  longitude: -122.265455,
  location: "1127 Arch St, Berkeley, CA 94708"
)

l57photo = open("https://atbnb-seed.s3.us-west-1.amazonaws.com/atbnbpics/sj2.jpeg")
l57.photo.attach(io: l57photo, filename: "list57")

l57.save

l58 = Listing.new(
  description: 'Wifi . Kitchen . Washer . Dryer',
  title: "North Berkeley Backyard Cottage",
  owner_Id: u8.id,
  guests: 3,
  latitude: 37.874549,
  bedroom: 2,
  bathroom: 1,
  city: "Berkeley",
  price: 72,
  longitude: -122.289130,
  location: "1633 Belvedere Ave, Berkeley, CA 94702"
)

l58photo = open("https://atbnb-seed.s3.us-west-1.amazonaws.com/atbnbpics/sj2.jpeg")
l58.photo.attach(io: l58photo, filename: "list58")

l58.save


 r1 = Review.create(author_id: u1.id, listing_id:  l1.id, body: "The host is incredibly accomodating. The location is great and close to the center of the town. The rooms were clean, comfortable and has everything you need to stay a night or longer. Beautiful and private outdoor space to enjoy anytime of the day. Parking is easy and available right in front of the place. Really enjoyed our time here and absolutely plan to return. Thank you again for greate AT bnb experience", rating: 5)
 r2 = Review.create(author_id: u2.id, listing_id:  l2.id, body: "It was short visit for us but very convenient to have a clean comfortable quiet and nice place to stay in. The only issue we had was that the parking was under a huge tree that had a lot of sap dripping. My car got very dirty after just a week. There is also not much privacy since the windows faces the street. We had to close our windows the entire time we were there. Laundry is shared and is in their garage, so you'll need to message the host to arrange time to gain access.", rating: 3)
 r3 = Review.create(author_id: u3.id, listing_id:  l9.id, body: "The place is sparkling clean. It had full facilities and is only 10 minutes away from downtown. There were a lot of restaurants close by so we got to try a lot of yummy food. The neighborhood is safe. We highly recommend this place.", rating: 4)
 r4 = Review.create(author_id: u4.id, listing_id:  l10.id, body: "Highly recommended place to stay for your vacation! Quiet and safe neighborhood, a friendly host, and a super relaxing room. The bathroom is so much bigger than what is shown in the picture too. I would stay again !", rating: 4)
 r5 = Review.create(author_id: u5.id, listing_id:  l17.id, body: "The host is incredibly accomodating. The location is great and close to the center of the town. The rooms were clean, comfortable and has everything you need to stay a night or longer. Beautiful and private outdoor space to enjoy anytime of the day. Parking is easy and available right in front of the place. Really enjoyed our time here and absolutely plan to return. Thank you again for greate AT bnb experience", rating: 5)
 r6 = Review.create(author_id: u6.id, listing_id:  l18.id, body: "It was short visit for us but very convenient to have a clean comfortable quiet and nice place to stay in. The only issue we had was that the parking was under a huge tree that had a lot of sap dripping. My car got very dirty after just a week. There is also not much privacy since the windows faces the street. We had to close our windows the entire time we were there. Laundry is shared and is in their garage, so you'll need to message the host to arrange time to gain access.", rating: 3)
 r7 = Review.create(author_id: u7.id, listing_id:  l25.id, body: "The place is sparkling clean. It had full facilities and is only 10 minutes away from downtown. There were a lot of restaurants close by so we got to try a lot of yummy food. The neighborhood is safe. We highly recommend this place.", rating: 4)
 r8 = Review.create(author_id: u8.id, listing_id:  l26.id, body: "Highly recommended place to stay for your vacation! Quiet and safe neighborhood, a friendly host, and a super relaxing room. The bathroom is so much bigger than what is shown in the picture too. I would stay again !", rating: 4)
 r9 = Review.create(author_id: u9.id, listing_id:  l33.id, body: "The host is incredibly accomodating. The location is great and close to the center of the town. The rooms were clean, comfortable and has everything you need to stay a night or longer. Beautiful and private outdoor space to enjoy anytime of the day. Parking is easy and available right in front of the place. Really enjoyed our time here and absolutely plan to return. Thank you again for greate AT bnb experience", rating: 5)
 r10 = Review.create(author_id: u10.id, listing_id:  l34.id, body: "It was short visit for us but very convenient to have a clean comfortable quiet and nice place to stay in. The only issue we had was that the parking was under a huge tree that had a lot of sap dripping. My car got very dirty after just a week. There is also not much privacy since the windows faces the street. We had to close our windows the entire time we were there. Laundry is shared and is in their garage, so you'll need to message the host to arrange time to gain access.", rating: 3)
 r11 = Review.create(author_id: u11.id, listing_id:  l41.id, body: "The place is sparkling clean. It had full facilities and is only 10 minutes away from downtown. There were a lot of restaurants close by so we got to try a lot of yummy food. The neighborhood is safe. We highly recommend this place.", rating: 4)
 r12 = Review.create(author_id: u12.id, listing_id:  l42.id, body: "Highly recommended place to stay for your vacation! Quiet and safe neighborhood, a friendly host, and a super relaxing room. The bathroom is so much bigger than what is shown in the picture too. I would stay again !", rating: 4)
 r13 = Review.create(author_id: u1.id, listing_id:  l49.id, body: "The host is incredibly accomodating. The location is great and close to the center of the town. The rooms were clean, comfortable and has everything you need to stay a night or longer. Beautiful and private outdoor space to enjoy anytime of the day. Parking is easy and available right in front of the place. Really enjoyed our time here and absolutely plan to return. Thank you again for greate AT bnb experience", rating: 5)
 r14 = Review.create(author_id: u2.id, listing_id:  l50.id, body: "It was short visit for us but very convenient to have a clean comfortable quiet and nice place to stay in. The only issue we had was that the parking was under a huge tree that had a lot of sap dripping. My car got very dirty after just a week. There is also not much privacy since the windows faces the street. We had to close our windows the entire time we were there. Laundry is shared and is in their garage, so you'll need to message the host to arrange time to gain access.", rating: 3)
 r15 = Review.create(author_id: u3.id, listing_id:  l57.id, body: "The place is sparkling clean. It had full facilities and is only 10 minutes away from downtown. There were a lot of restaurants close by so we got to try a lot of yummy food. The neighborhood is safe. We highly recommend this place.", rating: 4)
 r16 = Review.create(author_id: u4.id, listing_id:  l58.id, body: "Highly recommended place to stay for your vacation! Quiet and safe neighborhood, a friendly host, and a super relaxing room. The bathroom is so much bigger than what is shown in the picture too. I would stay again !", rating: 4)
 

 rs1 = Reservation.create(guest_id: u1.id, listing_id: l1.id, check_in_date: "30-10-2021", check_out_date: "12-01-2022", number_of_guest: 1)

 rs2 = Reservation.create(guest_id: u2.id, listing_id: l2.id, check_in_date: "11-12-2021", check_out_date: "13-01-2022", number_of_guest: 2)
 rs3 = Reservation.create(guest_id: u3.id, listing_id: l9.id, check_in_date: "27-10-2021", check_out_date: "30-12-2022", number_of_guest: 3)

 rs4 = Reservation.create(guest_id: u4.id, listing_id: l10.id, check_in_date: "30-10-2021", check_out_date: "12-01-2022", number_of_guest: 1)

 rs5 = Reservation.create(guest_id: u5.id, listing_id: l17.id, check_in_date: "11-12-2021", check_out_date: "13-01-2022", number_of_guest: 2)
 rs6 = Reservation.create(guest_id: u6.id, listing_id: l18.id, check_in_date: "27-10-2021", check_out_date: "30-12-2022", number_of_guest: 3)

 rs7 = Reservation.create(guest_id: u7.id, listing_id: l25.id, check_in_date: "30-10-2021", check_out_date: "12-01-2022", number_of_guest: 1)

 rs8 = Reservation.create(guest_id: u8.id, listing_id: l26.id, check_in_date: "11-12-2021", check_out_date: "13-01-2022", number_of_guest: 2)
 rs9 = Reservation.create(guest_id: u9.id, listing_id: l33.id, check_in_date: "27-10-2021", check_out_date: "30-12-2022", number_of_guest: 3)

 rs10 = Reservation.create(guest_id: u10.id, listing_id: l34.id, check_in_date: "30-10-2021", check_out_date: "12-01-2022", number_of_guest: 1)

 rs11 = Reservation.create(guest_id: u11.id, listing_id: l41.id, check_in_date: "11-12-2021", check_out_date: "13-01-2022", number_of_guest: 2)
 rs12 = Reservation.create(guest_id: u12.id, listing_id: l42.id, check_in_date: "27-10-2021", check_out_date: "30-12-2022", number_of_guest: 3)

 rs13 = Reservation.create(guest_id: u9.id, listing_id: l49.id, check_in_date: "30-02-2022", check_out_date: "12-03-2022", number_of_guest: 1)

 rs14 = Reservation.create(guest_id: u1.id, listing_id: l50.id, check_in_date: "11-01-2022", check_out_date: "13-01-2022", number_of_guest: 2)
 rs15 = Reservation.create(guest_id: u2.id, listing_id: l57.id, check_in_date: "27-01-2022", check_out_date: "30-01-2022", number_of_guest: 3)
