const mongoose = require('mongoose');

const IndustryCategorySchema = new Schema ({
	permalink : { type: String }, //unique identifier within IndustryCategory namespace 
	bizmod_path : { type: String }, // path within bizmod portal
	category_industry_name : { type: String }, //user friendly name (as presented in bizmod)
	also_known_as : { type : String }, // Array of aliases and previous names
	short_description : { type : String }, //Short description <= 140 characters
	description : { type: String }, // Long description
	industry_category_code : { type: String }, //Define organization category
	created_at : { type : Date }, //timestamp created in bizmod
	updated_at : { type : Date } //timestamp updated in bizmod
});