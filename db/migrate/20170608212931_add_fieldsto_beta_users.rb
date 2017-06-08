class AddFieldstoBetaUsers < ActiveRecord::Migration[5.0]
  def change
  	    add_column :beta_users, :first_name, :string
  	    add_column :beta_users, :last_name, :string
  	    add_column :beta_users, :company, :string
  	    add_column :beta_users, :comments, :text
  	    add_column :beta_users, :service_category, :string
  	    add_column :beta_users, :audit_request, :boolean
  	    add_column :beta_users, :company_category, :string

  end
end
