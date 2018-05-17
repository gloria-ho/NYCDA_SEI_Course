require "sinatra"
require "googlebooks"

get('/') do
  erb(:index)
end

post('/search') do
  pathname = CGI::escape(params[:user_input])
  redirect "/results/#{pathname}"
end

get('/results/') do
  erb(:try_again)
end

get('/results/:encoded_input') do

  def titleize(str)
    str.split(/ |\_/).map(&:capitalize).join(" ")
  end

  @decoded_input = titleize(CGI::unescape(params[:encoded_input]))
  books = GoogleBooks.search(@decoded_input)
  @b_title = books.first.title
  @b_author = books.first.authors
  @b_img_link = books.first.image_link
  
  erb(:results)
end