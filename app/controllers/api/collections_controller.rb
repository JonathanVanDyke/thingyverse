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
    @collection = Print.new(collection)
    @collection.author_id = current_user.id
    if @collection.save
      render :show
    else
      render json: @print.errors.full_messages
    end
  end

  def update
    # debugger
    @collection = Print.find(params[:id])
    if @collection.update(collection)
      render :show
    else
      render json: @collection.errors.full_messages, status: 422
    end
  end

  def destroy 
    @collection = Print.find(params[:id])
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