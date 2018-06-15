class TodosController < ApplicationController
  before_action :authenticate_user!
  skip_before_action :verify_authenticity_token, only: [:destroy]

  def index
    @user = current_user
    @todos = Todo.all.order(:created_at)
  end

  def show
    @todo = Todo.find(params[:id])
  end

  def new
    @todo = Todo.new
  end

  def create
    @todo = Todo.create(todo_params)
    if @todo.valid? 
      flash[:success] = "Your todo has been successfully created."
      redirect_to todos_path
    else
      flash[:error] = "Please enter a name."
      render :new
    end
  end

  def edit
    @todo = Todo.find(params[:id])
  end

  def update
    todo = Todo.find(params[:id])
    todo.update(todo_params)
    redirect_to todos_path
  end

  def destroy
    Todo.destroy(params[:id])

    render json: {status: 'boom success', message: 'to-do was successfully deleted'}
  end

  private

  def todo_params
    # will return something that looks like this
    # {name: '...', description: '...'}
    params.require(:todo).permit(:name, :description, :priority)
  end

end
