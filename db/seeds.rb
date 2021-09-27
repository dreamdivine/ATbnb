# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.delete_all

u1 = User.create!(
  username: 'guest',
  password: 'password'
)

u2 = User.create!(
  username: 'username',
  password: 'password'
)

cotton = User.create({username: 'cotton', email:'cotton@gmail.com', password:'cotton', first_name: 'cotton', last_name: 'tuladhar'})