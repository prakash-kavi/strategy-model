const mongoose = require('mongoose');
const validator = require('validator');
const Schema = mongoose.Schema;

const UserSchema = new Schema ({
	name : { 
		type: String,
		required: true,
		trim : true,
		minlength : 1,
		maxlength : 200, 
		validate : {
			validator: validator.isAlpha,
			message: '{VALUE} is not a valid name'
		}
	}, //name of the user: First Middle Last name with salutation
	user_name : { 
		type: String,
		required: true,
		trim : true,
		minlength : 1,
		unique : true,
		validate : {
			validator: validator.isAlphanumeric,
			message: '{VALUE} is not a valid user name'
		}
	}, // unique user name in bizmod
	organization_name : { 
		type: String,
		required: true,
		trim : true,
		minlength : 1,
		unique : true,
		validate : {
			validator: validator.isAlphanumeric,
			message: '{VALUE} is not a valid organization name'
		}
	}, //unique organization name as maintained in bizmod
    organization_unit : { 
		type: String,
		required: true,
		trim : true,
		minlength : 1,
		unique : true,
		validate : {
			validator: validator.isAlphanumeric,
			message: '{VALUE} is not a valid organization name'
		}
	}, //organization unit name as maintained in bizmod
    job_title : { type: String }, //job title as maintained in bizmod
    also_known_as : [ { type: String } ], // array of aliases and similar names for job titles
	email_address : { type : String },
	phone_number : { type : String },
	twitter_url : { type: String },
	linkedin_url : { type: String },
    city_name : { type : String }, //office address 
    region_name : { type : String }, //office address
    country_code : { type : String }, //3 letter code
    preferred_language : { type : String }, // language name as maintained in bizmod
    password : { type : string }, // username and password combination used for user authentication
	created_at : { type : Date }, //timestamp created in bizmod
	updated_at : { type : Date } //timestamp updated in bizmod});
});

const User = mongoose.model('user', UserSchema);

module.exports = User;