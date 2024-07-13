const mongoose = require("mongoose");
const UsersSchema = new mongoose.Schema({
	email:String,
	userName:String,
	name:String,
	phoneNumber:String,
	password:String
})

const UsersModel = mongoose.model("User", UsersSchema)

module.exports = UsersModel