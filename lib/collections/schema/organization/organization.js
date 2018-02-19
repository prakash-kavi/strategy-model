const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OrganizationSchema = new mongoose ({
	permalink : { type: String }, //unique identifier within Organization namespace 
	bizmod_path : { type: String }, // path within bizmod portal
	name : { type: String }, //user friendly name (as presented in bizmod)
	also_known_as : [{ type : String }], // Array of aliases and previous names
	short_description : { type : String }, //Short description <= 140 characters
	description : { type: String }, // Long description
	category_code : { type: String }, //Define organization category
	number_of_employees : { type: Number },
	founded_on : { type: Date }, // YYYY-MM-DD
	is_closed : { type: Boolean }, //default: true
	closed_on : { type: Date }, //YYYY-MM-DD
	email_address : { type : String },
	phone_number : { type : String },
	homepage_url : { type: String }, // fully qualified company Url
	created_at : { type : Date }, //timestamp created in bizmod
	updated_at : { type : Date } //timestamp updated in bizmod
});

const Organization = mongoose.model('organization', OrganizationSchema);

module.exports = Organization;