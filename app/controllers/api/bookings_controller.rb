class Api::BookingsController < ApplicationController

  def index
    @bookings = Booking.where(guest_id: current_user.id)
  end

  def create
    @booking = Booking.new(booking_params)
    @booking.guest_id = current_user.id
    if @booking.save
      # render 'api/bookings/index'
      render :index
    else
      render json: @booking.errors.full_messages, status: 422
    end
  end

  def destroy
    @booking = booking.find(params[:id])
    if @booking
      @booking.destroy
      render 'api/bookings/index'
    else
      render json: @booking.errors.full_messages, status: 422
    end
  end

  private

  def booking_params
    params.require(:booking).permit(:start_date, :end_date, :dwelling_id, :guest_number)
  end
end