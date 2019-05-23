class Icon < ApplicationRecord
	self.table_name = "icon"
	self.primary_key = "sastavnica"
	has_many :marker, :foreign_key => "sastavnica"
	attr_accessor :sastavnica, :boja, :vidljivost
end
