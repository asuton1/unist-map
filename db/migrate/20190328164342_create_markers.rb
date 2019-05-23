class CreateMarkers < ActiveRecord::Migration[5.2]
  def change
    create_table :markers do |t|
      t.text :latitude
      t.text :longitude
      t.text :sastavnica
      t.text :naziv
      t.text :adresa
      t.text :web

      t.timestamps
    end
  end
end
