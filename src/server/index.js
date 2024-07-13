const express = require('express');
const mongoose = require("mongoose")
const cors = require("cors");
//const bodyParser = require("body-parser");
const{check, validationResult}= require("express-validator");
const UsersModel = require("./models/Users")
const bcrypt = require("bcryptjs")


const app = express();
//const urlencodedParser = bodyParser.urlencoded({ extended: false });
const PORT = 3001;
app.use(cors({origin: "http://localhost:3000"}))
app.use(express.json());
mongoose.connect("mongodb://localhost:27017/User").then(res => {console.log("database connected successfully")})
app.post('/Register'
		// [
		// 	check('name', 'This name must me 3+ characters long and 50 characters max').notEmpty().exists().isLength({ max: 50, min: 3}),
	    //     check('password', 'Password must be at least 8 characters long').isLength({min: 8}).notEmpty(),
		// 	check('userName','username cant be empty').notEmpty(),
		// 	check('email', 'Email is not valid').isEmail().normalizeEmail().notEmpty()
		// ]
	,
	(req, res) => {
	console.log(req.body)
	const errors = validationResult(req);
		if(!errors.isEmpty()) {
			return res.status(400).json
		}
		else {
			const {password} = req.body;
			bcrypt.hash(password, 10)
				.then((hashedPassword) => {
					req.body.password = hashedPassword;
					UsersModel.create(req.body)
						.then(user => {
							//console.log(user);
							res.json(user)
						})
						.catch(err => res.json(err))
				})
		}
	// const {password} = req.body;
	// bcrypt.hash(password, 10)
	// 	.then((hashedPassword) => {
	// 		req.body.password = hashedPassword;
	// 		//console.log(req.body)
	// 		UsersModel.create(req.body)
	// 			.then(user => {
	// 				//console.log(user);
	// 				res.json(user)})
	// 			.catch(err => res.json(err))
	//	})
})
app.get('/Users', (req, res) => {
	UsersModel.find({}).then(function (users) {
		res.json(users);
	})
	.catch((error) => {
		console.log(error);
	})
})
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`)
})