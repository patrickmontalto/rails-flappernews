class CommentsController < ApplicationController
	# Require authentication to comment and upvote
	before_filter :authenticate_user!, only: [:create, :upvote]
	
	def show
		#...
	end

	def create
		post = Post.find(params[:post_id])
		comment = post.comments.create(comment_params.merge(user_id: current_user.id))

		# Respond with bost post and comments because we are using a nested resource.
		# Only last objcet is returned when responding to json
		respond_with post, comment 
	end

	def upvote
		post = Post.find(params[:post_id])
		comment = post.comments.find(params[:id])
		comment.increment!(:upvotes)

		respond_with post, comment
	end

	private

		def comment_params
			params.require(:comment).permit(:body)
		end
end
