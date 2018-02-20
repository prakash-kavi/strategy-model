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
    job_title : { 
		type: String,
		required: true,
		trim : true,
		minlength : 1,
		maxlength : 50, 
		validate : {
			validator: validator.isAlpha,
			message: '{VALUE} is not a valid name'
		}
	}, //job title as provided by user
	email_address : { 
		type: String,
		required: true,
		trim : true,
		minlength : 1,
		unique : true,
		validate : {
			validator: validator.isEmail,
			message: '{VALUE} is not a valid email'
		}
	},
	phone_number : { 
		type: String,
		required: true,
		trim : true,
		minlength : 1,
		unique : true,
		validate : {
			validator: validator.isMobilePhone,
			message: '{VALUE} is not a valid mobile phone number'
		}
	},
	twitter_url : { 
		type: String,
		trim : true,
		minlength : 1,
		unique : true,
		validate : {
			validator: validator.isUrl,
			message: '{VALUE} is not a valid url'
		}
	}, //user's twitter url
	linkedin_url : { 
		type: String,
		required: true,
		minlength : 1,
		unique : true,
		validate : {
			validator: validator.isUrl,
			message: '{VALUE} is not a valid url'
		}
	}, //user's linkedin url
    city_name : { 
		type: String,
		required: true,
		trim : true,
		minlength : 1,
		maxlength : 200, 
		validate : {
			validator: validator.isAlpha,
			message: '{VALUE} is not a valid city name'
		}
	}, //business address of primary city
    region_name : { 
		type: String,
		required: true,
		trim : true,
		minlength : 1,
		maxlength : 200, 
		validate : {
			validator: validator.isAlpha,
			message: '{VALUE} is not a valid name'
		}
	}, //business address of primary region address
    country_code : { 
		type: String,
		required: true,
		trim : true,
		minlength : 1,
		maxlength : 50, 
		validate : {
			validator: validator.isAlpha,
			message: '{VALUE} is not a valid name'
		}
	}, //3 letter code
    preferred_language : { 
		type: String,
		required: true,
		trim : true,
		minlength : 1,
		maxlength : 20, 
		validate : {
			validator: validator.isAlpha,
			message: '{VALUE} is not a valid name'
		}
	}, // language name as maintained in bizmod
    password :  { 
		type: String,
		required: true,
		trim : true,
		minlength : 6,
		maxlength : 20, 
		validate : {
			validator: validator.isAlpha, //needs to be improvized 
			message: '{VALUE} is not a valid name'
		}
	}, // username and password combination used for user authentication
	created_at : { 
		type : Date,
		required : true 
	}, //timestamp created in bizmod
	updated_at : { 
		type : Date,
		required : true
	 } //timestamp updated in bizmod});
});

const User = mongoose.model('user', UserSchema);

module.exports = User;