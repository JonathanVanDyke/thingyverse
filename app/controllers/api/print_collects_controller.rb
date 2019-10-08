class Api::PrintCollectsController < ApplicationController
    before_action :find_collection, only: [:create]
  # before_action :find_collect_follow, only: [:destroy]

  def index
    @print_collects = PrintCollect.all
  end

  def create
    @print_collect = PrintCollect.new(print_collect_params)
    if @print_collect.save
      render :show
    else
      render json @print_collect.errors.full_messages
    end
  end

  def destroy
    @print_collect = PrintCollect.find(params[:id])
    if @print_collect.destroy
      render :show 
    else
      render json: @print_collect.errors.full_messages
    end
  end

  private

  def find_collection
    @collection = Collection.find(params[:collectionId])
  end

  def print_collect_params
    params.require(:print_collect).permit(:collection_id, :print_id)
  end

end