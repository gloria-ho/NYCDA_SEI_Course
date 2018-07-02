require 'test_helper'

class TodoTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
  test "todos without prioritiy should fail" do
    my_todo = Todo.create(name: "123345", description: "dedbawbdl")

    assert_not(my_todo.persisted?)
  end

  test "todos with invalid prioritiy should fail" do
    my_todo = Todo.create(name: "123345", description: "dedbawbdl", priority: "W")

    assert_not(my_todo.persisted?)
  end
end
