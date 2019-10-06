class Api::LikesController < ApplicationController
  before_action :find_print
  before_action :find_like, only: [:destroy]

  def create
    if @print.likes.create(user_id: current_user.id)
      render :show
    else
      render json: @print.errors.full_messages
    end
  end

  def destroy
    # debugger
    if !(@like)
      flash[:notice] = "Cannot unlike"
    else
      @like.destroy
    end
    render :show
  end

  private

  def find_print
    @print = Print.find(params[:print_id])
  end

  def find_like
    # debugger
    # @like = @print.likes.find(params[:id])
    @like = @print.likes.find_by(print_id: params[:print_id].to_i)
  end

end
