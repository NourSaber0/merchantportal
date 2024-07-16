import React, { useState } from "react";
import {Container, DisplayCard, FormContainer, Input, SubmitButton} from "./common"
import axios from "axios";
import {useNavigate,} from "react-router-dom";

function Login() {
	const [email, setEmail] = useState()
	const [password, setPassword] = useState()
	const [errorMessage, setErrorMessage] = useState('')
	const navigate = useNavigate();
	const handleLogin = (e) => {
		e.preventDefault();
		axios.post('http://localhost:3001/Login', {email, password})
			.then((response) => {
				if (response.data.message === "User logged in") {
					navigate('/page3')
				}
				else{
					if(response.data.message === "User not found") {
						setErrorMessage("User not found")
					}
					else {
						setErrorMessage("Incorrect password")

					}
				}
			})
			.catch((error) => {
					console.log(error)
				}
			)
	}

	return(
		<Container>
				<FormContainer>
					<DisplayCard>
						{errorMessage}
					<label htmlFor="email"> <strong>Email</strong> </label>
					<Input type="text" value ={email} placeholder="Enter your email..." onChange={(e) => setEmail(e.target.value)} />
					<label htmlFor="password"> <strong>Password</strong> </label>
					<Input type="password" value={password} placeholder="Enter your password..." onChange={(e) => setPassword(e.target.value)} />
				<SubmitButton type="submit" onClick={handleLogin} >Login </SubmitButton>
				<SubmitButton type="submit">Create User</SubmitButton>
					</DisplayCard>
				</FormContainer>
			</Container>


	);
}
export default Login;