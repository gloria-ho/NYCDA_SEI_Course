class HomeController < ApplicationController
  def index
    @cakes = Cake.all.limit(3).order(:created_at).reverse
    @muffins = Muffin.all.limit(3).order(:created_at).reverse
  end
end
