class CakesController < ApplicationController
  def index
    @cakes = Cake.where(status: 1).order(:created_at)
    
  end

  def show
    @cake = Cake.find(params[:id])
  end

  def new
    @cake = Cake.new
  end

  def create
    Cake.create(cake_params)
    redirect_to cakes_path
  end

  def edit
    @cake = Cake.find(params[:id])
  end

  def update
    cake = Cake.find(params[:id])
    cake.update(cake_params)
    redirect_to cakes_path
  end
  
  def destroy
    Cake.destroy(params[:id])
    redirect_to cakes_path
  end

  def toggle_status
    cake = Cake.find(params[:id])
    if cake.status == 1
      cake.update(status: 0)
    else
      cake.update(status: 1)
    end
    redirect_to cakes_path
  end

  private
  
  def cake_params
    params.require(:cake).permit(:name, :description, :diameter, :price, :available_until, :status)
  end
end