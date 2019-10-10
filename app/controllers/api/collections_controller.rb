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
    if params[:collection][:title].length > 0
      # debugger
      title = collection_params["title"]
      author_id = collection_params["currentUserId"]
      @collection = Collection.new({title: title, author_id: author_id})
      if @collection.save
        @collection.prints << Print.find(params[:collection][:print_id].to_i)
        # debugger
        render :show
      else
        render json: @collection.errors.full_messages, status: 422
      end
    else
      @collection = Collection.find(params[:id])
      if @collection.prints << Print.find(params[:collection][:print_id].to_i)
        render :show
      else
        render json: @collection.errors.full_messages, status: 422
      end
    end
  end

  def destroy 
    @collection = Collection.find(params[:id])
    # if @collection.destroy
    # debugger
    printId = params[:collection][:print_id]
    if @collection.print_collects.find_by(print_id: printId).delete
      @collection.delete if @collection.print_collects.length === 0
      render :show
    else 
      render json: @collection.errors.full_messages, status: 422
    end
  end

  private

  def collection_params
    # debugger
    #changed :photo to :photoUrl
    params.require(:collection).permit(:title, :cover_url, :author_id, :selectedCollection, :collectFormShown, :bool, :currentUserId, :id, :print_id)
  end

end