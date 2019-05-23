class MapController < ApplicationController

	http_basic_authenticate_with name: "unist", password: "admin", except: [:index]

	def index
		@markeri = Icon.joins(:marker).select("icon.*, marker.*")
		@info = Icon.select("sastavnica, boja")
	end
	
	def admin
    	@tablica = Marker.order("sastavnica, naziv").select("sastavnica, naziv, latitude, longitude, adresa, web")
    end

	def new
		@info = Icon.select("sastavnica")
    	@marker = Marker.new
	end

	def create
		@marker = Marker.new
		add_params.each do |key, value|
			@marker[key] = value
		end
 		if @marker.save
    		redirect_to "/admin"
 		else
   			render 'new'
 		end
 	end

 	def destroy
   		@marker = Marker.find(params[:id])
   		@marker.destroy	
   		redirect_to "/admin"
 	end

    private def add_params
    	params.require(:marker).permit(:latitude, :longitude, :sastavnica, :naziv, :adresa, :web).to_h
    end
    
end