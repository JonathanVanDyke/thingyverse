class Api::LikesController < ApplicationController
  before_action :find_print, only: [:create]
  before_action :find_like, only: [:destroy]

  def index
    # debugger
    @likes = Like.all
  end

  def create
    debugger
    @like = Like.create(user_id: current_user.id, print_id: @print.id)
    if @like
      render :show
    else
      render json: @print.errors.full_messages
    end
  end

  def destroy
    # debugger
    if (@like && @like.user_id == current_user.id)
      @like.destroy
    else
      render json: @user.errors.full_messages, status: 422
    end
    render :show
  end

  private

  def find_print
    debugger
    @print = Print.find(params[:printId])
  end

  def find_like
    # debugger
    # @like = @print.likes.find(params[:id])
    @like = @print.likes.find_by(user_id: current_user.id)
  end

end
