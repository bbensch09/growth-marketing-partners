class CreateArticles < ActiveRecord::Migration[5.0]
  def change
    create_table :articles do |t|
      t.string :title
      t.string :url
      t.text :snippet
      t.date :published

      t.timestamps
    end
  end
end
