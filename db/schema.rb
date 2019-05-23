# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_03_28_164440) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "icon", primary_key: "sastavnica", id: :text, force: :cascade do |t|
    t.text "boja"
    t.text "vidljivost"
  end

  create_table "icons", force: :cascade do |t|
    t.text "sastavnica"
    t.text "boja"
    t.text "vidljivost"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "marker", primary_key: "naziv", id: :text, force: :cascade do |t|
    t.text "latitude"
    t.text "longitude"
    t.text "sastavnica"
    t.text "adresa"
    t.text "web"
  end

  create_table "markers", force: :cascade do |t|
    t.text "latitude"
    t.text "longitude"
    t.text "sastavnica"
    t.text "naziv"
    t.text "adresa"
    t.text "web"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_foreign_key "marker", "icon", column: "sastavnica", primary_key: "sastavnica", name: "marker_sastavnica_fkey"
end
