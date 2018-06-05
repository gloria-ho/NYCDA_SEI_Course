class CakesController < ApplicationController
  def index
    @cakes = Cake.all
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

  private
  
  def cake_params
    params.require(:cake).permit(:name, :description, :diameter, :price, :available_until)
  end
end