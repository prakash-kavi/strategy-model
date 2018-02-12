const SimpleSchema = require('mongoose');

const UserSchema = new Schema({
  name: {
    type: String,
    max: 40,
  },
  age: {
    type: SimpleSchema.Integer,
    optional: true,
  },
  registered: {
    type: Boolean,
    defaultValue: false,
  },
});

