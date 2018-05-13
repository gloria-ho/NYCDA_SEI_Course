# Define a function in Ruby that takes in a string and returns the character count of each character(case sensitive)

def count_char(str)
  count = {}
  arr = str.delete(" ").downcase.split("")
  for x in arr
    if count.has_key?(x)
      count[x] += 1
    else
      count[x] = 1
    end
  end
  count
end

#  def count_char(str)
#   count = {}
#   arr = str.downcase.split("")
#   for x in arr
#     arr.each_char do |char|
#       if x == char
#         count[x] += 1
#       else
#         count[x] = 1 unless x == " "
#       end
#     end
#   end
#   count
# end

# def count_char(str)
#   count = {}
#   str.delete(" ").downcase.each_char do |char|
#     count[char] = 0 if count[char] == nil
#     count[char] += 1
#   end
#   count
# end

result = count_char("heLlo world")

puts result