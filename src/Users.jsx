import React, {useEffect, useState} from "react";
import axios from "axios";
import styles from "./index.css"
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
	return (
		<>
			<HeaderContainer>
				<div >
					Users
				</div>
				<SubmitButton>+ Create new merchant</SubmitButton>
			</HeaderContainer>
			<div>
				<header>
					<div>
						{}
					</div>
					<button>+ Create new merchant</button>
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
						</tr>
					))}
					</tbody>
				</table>
			</div>
		</>
		);
	}
	export default Users;
