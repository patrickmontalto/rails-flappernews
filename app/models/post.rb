class Post < ActiveRecord::Base
	has_many :comments
	belongs_to :user

	# Overwrite as_json to always include post comments
	def as_json(options = {})
		super(options.merge(include: [:user, comments: {include: :user}]))
	end
end
