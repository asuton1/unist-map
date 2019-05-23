class CreateIcons < ActiveRecord::Migration[5.2]
  def change
    create_table :icons do |t|
      t.text :sastavnica
      t.text :boja
      t.text :vidljivost

      t.timestamps
    end
  end
end
