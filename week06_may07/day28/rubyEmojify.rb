# InstructionsPart 1 - 
# Build it up 
#  ●First off create a class with four empty methods: sad, happy, laughing, and angry.
# ●The constructor should take in one argument: str. (for "string") This should be saved for internal use of the class
# .●Now each method should return the string that was stored with an appropriate emoji. That emoji would of course match the method name.
# ●Lastly the class should also have a method called original that returns the original string with new emoji at the end.
# ●Usage would look something like the following:


class Emojify
	def initialize(str)
		@str = str
	end
	
	def sad
		@str + '😞'
	end
	
	def happy
		@str + '🙂'
	end
	
	def laughing
		@str + '😄'
	end
	
	def angry
		@str + '😠'
	end
	
	def original
		@str
	end
end

str_1 = Emojify.new('Today is a good day')

p str_1.happy

str_2 = Emojify.new('Today is a crappy day')

p str_2.sad