class Marker < ApplicationRecord
	self.table_name = "marker"
	self.primary_key = "naziv"
	attr_accessor :latitude, :longitude, :sastavnica, :naziv, :adresa, :web
end
