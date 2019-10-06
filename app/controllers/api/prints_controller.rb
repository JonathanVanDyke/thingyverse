class Api::PrintsController < ApplicationController
  def index
    prints = Print.all

    @prints = prints.includes(:user_likes)
  end

  def show
    @print = Print.find(params[:id])
    # debugger
  end

  def create
    # debugger
    @print = Print.new(print_params)
    @print.author_id = current_user.id
    if @print.save
      render :show
    else
      render json: @print.errors.full_messages
    end
  end

  def update
    # debugger
    @print = Print.find(params[:id])
    if @print.update(print_params)
      render :show
    else
      render json: @print.errors.full_messages, status: 422
    end
  end

  def destroy 
    @print = Print.find(params[:id])
    if @print.destroy
      render :show
    else 
      render json: @post.errors.full_messages, status: 422
    end
  end

  private

  def print_params
    # debugger
    #changed :photo to :photoUrl
    params.require(:print).permit(:title, :text, :photo)
  end
end