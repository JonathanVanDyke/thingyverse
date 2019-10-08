class Api::CollectFollowsController < ApplicationController
  before_action :find_collection, only: [:create]
  # before_action :find_collect_follow, only: [:destroy]

  def index
    @collect_follows = CollectFollow.all
  end

  def create
    @collect_follow = CollectFollow.new(follower_id: current_user.id, collection_id: @collection.id)
    if @collect_follow.save
      render :show
    else
      render json @collect_follow.errors.full_messages
    end
  end

  def destroy
    @collect_follow = CollectFollow.find(params[:id])
    if @collect_follow.destroy
      render :show 
    else
      render json: @collect_follow.errors.full_messages
    end
  end

  private

  def find_collection
    @collection = Collection.find(params[:collectionId])
  end

  def collect_follow_params
    params.require(:collect_follow).permit(:collection_id, :follower_id)
  end

end