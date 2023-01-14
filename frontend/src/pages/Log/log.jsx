import './log.css'
import { useState } from 'react';
import axios from 'axios';

const url = "https://viveksem3apiv4.azurewebsites.net/api/studentmeal"

const Log = () => {
	
	// States for registration
	const [name, setName] = useState('');
	const [date, setDate] = useState('');
	const [day, setDay] = useState('');
	const [mealtype, setMealtype] = useState('');
	const [mealprice, setMealPrice] = useState(0);

	// Handling the name change
	const handleName = (e) => {
		setName(e.target.value);
	};

	// Handling the email change
	const handleDate = (e) => {
		setDate(e.target.value);
	};

	// Handling the password change
	const handleDay = (e) => {
		setDay(e.target.value);
	};

	const handleMealType = (e) => {
		setMealtype(e.target.value);
	};

	const handleMealPrice = (e) => {
		setMealPrice(e.target.value);
	};

	// // Handling the form submission
	const handleSubmit = (e) => {
		e.preventDefault();
		const sendData = {
			"StudentId":{name},
			"Date":{date},
			"Day":{day},
			"MealType":{mealtype},
			"MealPrice":{mealprice},
		}
		axios.post(url, sendData).then(result => { console.log(result.data) });
	};

	return (
		<div className="form">
			<div>
				<h1>Add Log</h1>
			</div>

			<form>
				<label className="label">StudentID</label>
				<input onChange={handleName} className="input"
					value={name} type="text" />

				<label className="label">Date</label>
				<input onChange={handleDate} className="input"
					value={date} type="text" />

				<label className="label">Day</label>
				<input onChange={handleDay} className="input"
					value={day} type="text" />

				<label className="label">MealType</label>
				<input onChange={handleMealType} className="input"
					value={mealtype} type="text" />
				
				<label className="label">MealPrice</label>
				<input onChange={handleMealPrice} className="input"
					value={mealprice} type="number" />

				<button onClick={handleSubmit} className="btn" type="submit">
					Add a Guest
				</button>
			</form>
		</div>
	);
}
export default Log;
