class Todo
  attr_reader  :id, :title, :descr
  def initialize(data, id)
    @id = id
    @title = data[:item_title]
    @descr = data[:item_descr]
  end
end