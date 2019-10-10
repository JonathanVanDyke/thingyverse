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
      # debugger
      @collection.prints << Print.find(params[:collection][:print_id].to_i)
      # debugger
      #put association push here
      render :show
    else
      render json: @collection.errors.full_messages
    end
  end

  def update
    # debugger
    @collection = Collection.find(params[:id])
    if @collection.prints << Print.find(params[:collection][:print_id].to_i)
      render :show
    else
      render json: @collection.errors.full_messages, status: 422
    end
  end

  def destroy 
    debugger
    @collection = Collection.find(params[:id])
    # if @collection.destroy
    debugger
    printId = params[:collection][:print_id]
    if @collection.print_collects.find_by(print_id: printId).delete
      debugger
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