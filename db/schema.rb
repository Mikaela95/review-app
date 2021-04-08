ActiveRecord::Schema.define(version: 2021_04_05_102303) do

  create_table "restaurants", force: :cascade do |t|
    t.string "name"
    t.string "image_url"
    t.string "delivery"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "reviews", force: :cascade do |t|
    t.string "name"
    t.string "description"
    t.string "rating"
    t.integer "restaurant_id",
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["restaurant_id"], name: "index_reviews_on_restaurant_id"
  end

  add_foreign_key "reviews", "restaurants"
end
