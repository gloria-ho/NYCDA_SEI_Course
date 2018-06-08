class CakesController < ApplicationController
  

  def index
    if params[:status] == '0'
      @cakes = Cake.where(status: 0).order(:created_at)
      # change hide link to show
      @status = 'hidden'
      # change view hidden link to back
    else
      @cakes = Cake.where(status: 1).order(:created_at)
      @status = 'visible'
    end
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