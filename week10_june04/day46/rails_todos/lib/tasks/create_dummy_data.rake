namespace :dummy do 
  task create_todos: :environment do
    10.times do |i|
      Todo.create(
        name: i.to_s * 4,
        description: "Dummy description: #{i}",
        priority: 'H'
        )
    end
  end

  # task create_comments: :environment do
  #   10.times do |c|
  #     Todo_comment.create(
  #       content: "Dummy comment"
  #     )
  #   end
  # end
end