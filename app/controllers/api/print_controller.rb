class Api::PrintsController < ApplicationController
  def show
    @print = Print.find(params[:id])
  end

  def create
    @print = Print.new(print_params)
    if @print.save
      login(@print)
      render "api/prints/show"
    else
      render json: @print.errors.full_messages, status: 422
    end
  end

  private

  def print_params
    params.require(:print).permit(:title, :text)
  end
end