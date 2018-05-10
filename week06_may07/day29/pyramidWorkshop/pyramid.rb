p 'Please enter a number.'

response = gets.strip

if response.to_i.to_s == response
	num = response.to_i

	num.times do |n|
		n += 1
		p "*" * n
	end

	(num-1).times do |e|
		num -= 1
		p "*" * num
	end
	
else
	p 'Please try again with a valid number'
end