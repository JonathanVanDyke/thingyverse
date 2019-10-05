class Api::PrintsController < ApplicationController
  def index
    # debugger
    @prints = Print.all
  end

  def show
    @print = Print.find(params[:id])
    # debugger
  end

  def create
    @print = Print.new(print_params)
    @print.author_id = current_user.id
    if @print.save
      # render "api/prints/show"
      render :show
    else
      render json: @print.errors.full_messages#, status: 422
    end
  end

  private

  def print_params
    params.require(:print).permit(:title, :text, :photo)
  end
end