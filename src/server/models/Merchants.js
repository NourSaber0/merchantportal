const mongoose = require("mongoose");
const MerchantsSchema = new mongoose.Schema({
	companyName: String,
	accountNumber: String,
	mobileNumber: String,
	balance: Number
})

const MerchantsModel = mongoose.model("Merchant", MerchantsSchema)

module.exports = MerchantsModel