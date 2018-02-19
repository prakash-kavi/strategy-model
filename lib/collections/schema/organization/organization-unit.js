const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OrganizationUnitSchema = new Schema ({
	permalink : { type: String }, //unique identifier within OrganizationUnit namespace 
	bizmod_path : { type: String }, // path within bizmod portal
	organization_unit_name : { type: String }, //user friendly name (as presented in bizmod)
	also_known_as : [{ type : String }], // Array of aliases and previous names
	short_description : { type : String }, //Short description <= 140 characters
	description : { type: String }, // Long description
	organization_unit_code : { type: String }, //Define organization unit category
	created_at : { type : Date }, //timestamp created in bizmod
	updated_at : { type : Date } //timestamp updated in bizmod
});

const OrganizationUnit = mongoose.model('organizationUnit',OrganizationUnitSchema);

module.exports = OrganizationUnit;