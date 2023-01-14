// import './Guest.css'
import { useState } from 'react';
import axios from 'axios';

const url = "https://viveksem3apiv4.azurewebsites.net/api/guestinfo"

const Guest = () => {

	// States for registration
	const [firstname, setFirstName] = useState('');
	const [lastname, setLastName] = useState('');
	const [age, setAge] = useState(0);
	const [id, setId] = useState('');
	const [mobile, setMobileNo] = useState('');

	// Handling the name change
	const handleFirstName = (e) => {
		setFirstName(e.target.value);
	};

	// Handling the email change
	const handleLastName = (e) => {
		setLastName(e.target.value);
	};

	// Handling the password change
	const handleAge = (e) => {
		setAge(e.target.value);
	};

	const handleMobile = (e) => {
		setMobileNo(e.target.value);
	};

	const handleStudentId = (e) => {
		setId(e.target.value);
	};

	// // Handling the form submission
	const handleSubmit = (e) => {
		e.preventDefault();
		const sendData = {
			"StudentId": String({ id }),
			"GuestFirstName": String({ firstname }),
			"GuestLastName": String({ lastname }),
			"Age": { age },
			"MobileNo": { mobile },
		}
		axios.post(url, sendData).then(result => { console.log(result.data) });
	};

	return (
		<div className="form">
			<div>
				<h1>Add Guest</h1>
			</div>

			<form>
				<label className="label">StudentID</label>
				<input onChange={handleStudentId} className="input"
					value={id} type="number" />

				<label className="label">First Name</label>
				<input onChange={handleFirstName} className="input"
					value={firstname} type="text" />

				<label className="label">Last Name</label>
				<input onChange={handleLastName} className="input"
					value={lastname} type="text" />

				<label className="label">Age</label>
				<input onChange={handleAge} className="input"
					value={age} type="number" />

				<label className="label">Mobile No</label>
				<input onChange={handleMobile} className="input"
					value={mobile} type="number" />

				<button onClick={handleSubmit} className="btn" type="submit">
					Add a Guest
				</button>
			</form>
		</div>
	);
}
export default Guest;