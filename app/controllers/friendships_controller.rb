class FriendshipsController < ApplicationController
  def destroy
    # only accessible with current_user
    # destroy friendship table entry
    # user object friend is passed, not the (id of) friendship object
    # first, find the friendship that needs to be destroyed
    @friendship = current_user.friendships.where(friend_id: params[:id]).first

    @friendship.destroy

    redirect_to my_friends_path, notice: "Friend was successfully removed"
    # respond_to do |format|
    #   format.html { redirect_to my_friends_path, notice: "Friend was successfully removed" }
    # end

  end
end