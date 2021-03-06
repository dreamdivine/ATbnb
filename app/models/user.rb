class User < ApplicationRecord
  validates :username, :password_digest, :session_token, presence: true
  validates :username, uniqueness: true
  validates :email, uniqueness: true, presence: true
  validates :first_name, :last_name, presence: true
  validates :password, length: { minimum: 6 }, allow_nil: true

  attr_reader :password
  after_initialize :ensure_session_token

  has_many :listings,
    foreign_key: :owner_Id,
    class_name: :Listing

  has_many :reservations,
    foreign_key: :guest_id,
    class_name: :Reservation

  has_many :reviews,
  foreign_key: :author_id,
  class_name: :Review

  # has_many :favorites
  # has_many :favorite_listings,
  #   through: :favorites,
  #   source: :listing


  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    return nil unless user
    user.is_password?(password) ? user : nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64
    self.save
    self.session_token
  end
end
