import React, {useEffect, useState} from "react";
import axios from "axios";
import styles from "./index.css"
import {FaTrash} from 'react-icons/fa'
import {HeaderContainer, SubmitButton, TableHeader, TableRow} from "./common";



function Users() {
	const[users, setUsers] = useState([]);
	useEffect(()=>{
		axios.get('http://localhost:3001/Users')
			.then((users) => {setUsers(users.data)})
			.catch((error) => {
				console.log(error)
			})
	}, [])
	const myFunction = (id) => {
		console.log('delete button clicked')
		axios.post('http://localhost:3001/Delete', {id})
			.then((response) => {
				console.log(response.data)
				setUsers(users.filter((user) => user._id !== id))
			})
			.catch((error) => {
				console.log(error)
			})
	}
	return (
		<>
			<HeaderContainer>
				<h1>
					Users
				</h1>
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
						<th>Username</th>
						<th>Email</th>
						<th>Full Name</th>
						<th>Mobile Number</th>
					</TableRow>
					</TableHeader>
					<tbody>
					{users.map((user) => (
						<tr key={user._id}>
							<td> {user._id}</td>
							<td>{user.userName}</td>
							<td>{user.email}</td>
							<td>{user.name}</td>
							<td>{user.phoneNumber}</td>
							<td> <FaTrash onClick={()=> myFunction(user._id)}/> </td>
						</tr>
					))}
					</tbody>
				</table>
			</div>
		</>
		);
	}
	export default Users;
