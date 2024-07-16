import React, {useEffect, useState} from "react";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import {DisplayCard, FormContainer, HeaderContainer, Input, SubmitButton, TableHeader, TableRow} from "./common";
import axios from "axios";
import {useNavigate} from "react-router-dom";

function CreateMerchant(){
	const [companyName, setCompanyName] = useState('');
	const[accountNumber, setAccountNumber] = useState('');
	const[mobileNumber, setMobileNumber] = useState('');
	const[balance, setBalance] = useState('');
	const[merchant, setMerchant] = useState([]);
	const [errorMessageName, setErrorMessageName] = useState('');
	const[backEndError, setBackEndError] = useState('');
	const navigate = useNavigate();
	const handleSubmit = (e) => {
		e.preventDefault()
		axios.post('http://localhost:3001/Merchant', {companyName, accountNumber, mobileNumber, balance})
			.then((response) => {
				if (response.data.error) {
					setBackEndError(response.data.error);
				}
				else{
					console.log(response.data);
					navigate('/page4');
				}})
			.catch((error) => {console.log(error);
				setBackEndError("Error in backend")})
	}
	const handleCancel = (e) => {
		e.preventDefault();
		navigate('/page4');

	}
	useEffect(()=>{
		axios.get('http://localhost:3001/Merchant')
			.then((merchant) => {setMerchant(merchant.data)})
			.catch((error) => {
				console.log(error)
			})
	}, [])
	const handleNameChange = (e) => {
		const value = e.target.value;
		const regMatch = /^[a-zA-Z\s]*$/.test(value);
		if (value.length > 50) {
			setErrorMessageName("Company name cant exceed 50 characters");
		} else {
			setErrorMessageName('');
			if (regMatch) {
				setCompanyName(value);
			} else {
				setErrorMessageName("Company name is not valid");
			}
		}
	}
	const handleAccountNumberChange = (e) => {
		const value = e.target.value;
		const regMatch = /^[a-zA-Z0-9]*$/.test(value);
		if (value.length > 29) {
			setErrorMessageName("Account number cant exceed 29 characters");
		} else {
			setErrorMessageName('');
			if (regMatch) {
				setAccountNumber(value);
			} else {
				setErrorMessageName("Account number is not valid");
			}
		}
	}
	const handleBalanceChange = (e) => {
		const value = e.target.value;
		setBalance(value);
		if(value===0){
			setErrorMessageName("Balance cant be zero");
		}
	}
	return(
		<>

	<HeaderContainer>
		<h1>
			Merchants
		</h1>
		<Popup trigger={<SubmitButton type="submit">+ Create new merchant</SubmitButton>} modal>
			<FormContainer>
				<DisplayCard>
					<p>{backEndError}</p>
					<label htmlFor="companyName"> Company Name</label>
					<Input value={companyName} type="text" placeholder='company name' onChange={(e)=>handleNameChange(e)} />
					<label htmlFor="accountNumber"> Account Number </label>
					<Input value={accountNumber} type="text" placeholder='account number' onChange={(e) => handleAccountNumberChange(e)} />
					<label htmlFor="mobileNumber"> Mobile Number </label>
					<Input value={mobileNumber} type="text" placeholder='mobile number' onChange={(e) => setMobileNumber(e.target.value)} />
					<label htmlFor="balance"> Balance </label>
					<Input type="text" placeholder='balance' value={balance} onChange={(e)=>handleBalanceChange(e)}/>
					<p> {errorMessageName}</p>
					<SubmitButton onClick={(e)=>handleSubmit(e)} type="submit">Save</SubmitButton>
				</DisplayCard>
			</FormContainer>
		</Popup>
	</HeaderContainer>
	<div>
		<header>
			<div>
				{}
			</div>
		</header>
		<hr/>
		<table>
			<TableHeader>
				<TableRow>
					<th>ID</th>
					<th>Company Name</th>
					<th>Account Number</th>
					<th>Balance</th>
				</TableRow>
			</TableHeader>
			<tbody>
			{merchant.map((merchant) => (
				<tr key={merchant._id}>
					<td> {merchant._id}</td>
					<td>{merchant.companyName}</td>
					<td>{merchant.accountNumber}</td>
					<td>{merchant.balance}</td>
				</tr>
			))}
			</tbody>
		</table>
	</div>
	</>
	)
}
export default CreateMerchant;