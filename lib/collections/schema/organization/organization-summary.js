const mongoose = require('mongoose');

const OrganizationSummarySchema = new mongoose.Schema ({
	permalink : { type: String }, //unique identifier within Organization namespace 
	bizmod_path : { type: String }, // path within bizmod portal
	name : { type: String }, //user friendly name (as presented in bizmod)
	also_known_as : [ {type : String} ], // Array of aliases and previous names
	short_description : { type : String }, //Short description <= 140 characters
	category_code : { type: String }, //Define organization category
	email_address : { type : String },
	phone_number : { type : String },
	homepage_url : { type: String }, // fully qualified company Url
	facebook_url : { type: String }, //
	twitter_url : { type: String },
	linkedin_url : { type: String },
	city_name : { type : String }, //typically HQ
	region_name : { type : String }, //typically HQ
	country_code : { type : String }, //3 letter code
	created_at : { type : Date }, //timestamp created in bizmod
	updated_at : { type : Date } //timestamp updated in bizmod
});

const OrganizationSummary = mongoose.model('organizationSummary', OrganizationSummarySchema);

module.exports = OrganizationSummary;