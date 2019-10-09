class Api::CollectionsController < ApplicationController
  def index
    # debugger
    @collections = Collection.all
  end

  def show
    @collection = Collection.find(params[:id])
    # debugger
  end

  def create
    # debugger
    @collection = Collection.new(collection_params)
    @collection.author_id = current_user.id
    if @collection.save
      render :show
    else
      render json: @collection.errors.full_messages
    end
  end

  def update
    # debugger
    @collection = Collection.find(params[:id])
    if @collection.update(collection_params)
      render :show
    else
      render json: @collection.errors.full_messages, status: 422
    end
  end

  def destroy 
    @collection = Collection.find(params[:id])
    if @collection.destroy
      render :show
    else 
      render json: @collection.errors.full_messages, status: 422
    end
  end

  private

  def collection_params
    # debugger
    #changed :photo to :photoUrl
    params.require(:collection).permit(:title, :cover_url, :author_id)
  end

end