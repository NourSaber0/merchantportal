import React, { useState } from "react";
import {BoldLink, Container, FormContainer, MutedLink, SubmitButton, Input, DisplayCard} from "./common";
import "react-phone-input-2/lib/style.css";
import validator from 'validator'
import axios from 'axios'
import {Link, useNavigate,} from "react-router-dom";
function SignUp() {

	const [name, setName] = useState("")
	const [userName, setUserName] = useState("")
	const [phoneNumber, setPhoneNumber] = useState("")
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const [errorMessagePassword, setErrorMessagePassword] = useState("")
	const [errorMessagePhone, setErrorMessagePhone] = useState("")
	const [errorMessageName, setErrorMessageName] = useState("")
	const [backEndError, setBackEndError] = useState("")
	const navigate = useNavigate();

	const validatePassword = (value) => {
		if (validator.isStrongPassword(value, {
			minLength: 8, minLowercase: 1,
			minUppercase: 1, minNumbers: 1, minSymbols: 1
		})) {
			setErrorMessagePassword('Strong Password')
		} else {
			setErrorMessagePassword('Not Strong Password')
		}
	}

		const handlePhoneChange = (e) => {
			const value = e.target.value;
			const validPrefixes = ['010', '011', '012', '015'];
			const prefix = (value.toString()).substring(0, 3);
			const prefixMatch = validPrefixes.includes(prefix);
			setPhoneNumber(value);
			if (value.length === 11 && prefixMatch) {
				setErrorMessagePhone('');
			} else {
					setErrorMessagePhone('Phone number is not valid');
				}
		}
	const handleChange = (e) => {
		const value = e.target.value;
		const regMatch = /^[a-zA-Z\s]*$/.test(value);
		if (value.length > 50) {
			setErrorMessageName("Name cant exceed 50 characters");
		} else {
			setErrorMessageName('');
			if (regMatch) {
				setName(value);
			} else {
				setErrorMessageName("Name is not valid");
			}
		}
	}
	const handleSubmit = (e) => {
		e.preventDefault()
		axios.post('http://localhost:3001/Register', {name, userName, phoneNumber, email, password})
			.then((response) => {
				if (response.data.error) {
					setBackEndError(response.data.error);
				}
				else{
				console.log(response.data);
				navigate('/page3');
			}})
			.catch((error) => {console.log(error);
				setBackEndError("Error in backend")})
	}
	//linear-gradient( 90deg, #0C664A 10%, #043E2F 100%) center center
	return(
		<Container>
			<FormContainer>
				<DisplayCard>
					<p>{backEndError}</p>
				<label htmlFor="email"> Email</label>
				<Input value={email} type="text" placeholder="Enter your email..." onChange={(e) => setEmail(e.target.value)} />
				<label htmlFor="username"> Username </label>
				<Input value={userName} type="text" placeholder="Enter your username..." onChange={(e) => setUserName(e.target.value)} />
				<label htmlFor="name"> Full Name </label>
					<Input value={name} type="text" placeholder="Enter your name..." onChange={handleChange} />
					<span>{errorMessageName}</span>
				<label> Mobile Number</label>
				<Input type="text" placeholder="Enter your mobile number..." value={phoneNumber} onChange={handlePhoneChange} />
				<span>{errorMessagePhone}</span>
				<label htmlFor="password"> Password </label>
				<Input value={password} type="password" placeholder="Enter your password..." onChange={(e) => (setPassword(e.target.value),validatePassword(e.target.value))} />
				<span>{errorMessagePassword}</span>
					<SubmitButton type="submit" onClick={handleSubmit}> Sign Up</SubmitButton>
				</DisplayCard>
			</FormContainer>
		</Container>
	);
}
export default SignUp;