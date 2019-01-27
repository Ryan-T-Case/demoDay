// OK
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const Schema = mongoose.Schema;


const UserSchema = new Schema({
  userName: { type: String, required: true },
  company: { type: String, required: true },
  phoneNumber: { type: String, required: false },
  password: { type: String, required: true },
  isDeleted:  { type: Boolean, default: false }
});


UserSchema.methods.generateHash = (password) => {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8));
};


UserSchema.methods.validPassword = (password, storedPW) => {
  return bcrypt.compareSync(password, storedPW);
};


module.exports = mongoose.model("User", UserSchema);
