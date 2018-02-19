const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const IndustrySubCategorySchema = new Schema ({
	permalink : { type: String }, //unique identifier within IndustryCategory namespace 
	bizmod_path : { type: String }, // path within bizmod portal
	industry_sub_category_name : { type: String }, //user friendly name (as presented in bizmod)
	also_known_as : [{ type : String }], // Array of aliases and previous names
	short_description : { type : String }, //Short description <= 140 characters
	description : { type: String }, // Long description
	industry_sub_category_code : { type: String }, //Define organization category
	created_at : { type : Date }, //timestamp created in bizmod
	updated_at : { type : Date } //timestamp updated in bizmod
});

const IndustryCategorySchema = new Schema ({
	permalink : { type: String }, //unique identifier within IndustryCategory namespace 
	bizmod_path : { type: String }, // path within bizmod portal
	industry_category_name : { type: String }, //user friendly name (as presented in bizmod)
	also_known_as : [{ type : String }], // Array of aliases and previous names
	short_description : { type : String }, //Short description <= 140 characters
	description : { type: String }, // Long description
	industry_category_code : { type: String }, //Define organization category
	industry_sub_category: [{ type : IndustrySubCategorySchema }], //Array of IndustrySubCategorySchema types
	created_at : { type : Date }, //timestamp created in bizmod
	updated_at : { type : Date } //timestamp updated in bizmod
});

const IndustrySubCategory = mongoose.model('industrySubCategory',IndustrySubCategorySchema);
const IndustryCategory = mongoose.model('industryCategory',IndustryCategorySchema);

module.exports = { IndustryCategory, IndustrySubCategory };