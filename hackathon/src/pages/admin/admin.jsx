import React, { useState, useEffect } from 'react';
import date from 'date-and-time';
import './css/navbar.css';
import './css/table.css';
import './css/admin.css';

import axios from 'axios';

const mockTests = [
    {
        name: 'Periodic Test - DBMS',
        link: 'asd-qwvs-dfs',
        time: '26/11/2022 20:30',
        status: "unattempted"
    },
    {
        name: 'Periodic Test - OSLT',
        link: 'pbl-dfse-phd',
        time: '21/11/2022 17:30',
        status: "unattempted"
    },
    {
        name: 'Periodic Test - SPCC',
        link: 'fhh-dfgg-aee',
        time: '22/11/2022 17:30',
        status: 'attempted'
    }
];

const url = "https://viveksem3apiv4.azurewebsites.net/api/meal";
const url1 = "https://viveksem3apiv4.azurewebsites.net/api/deductbalancelog";
const url2 = "https://viveksem3apiv4.azurewebsites.net/api/changebalance";
const url3 = "https://viveksem3apiv4.azurewebsites.net/api/deduct";

const Table = () => {
    const [studentId, setstudentId] = useState('');
    const [studentFirstName, setstudentFirstName] = useState('');
    const [studentLastName, setstudentLastName] = useState('');
    const [date, setdate] = useState('');
    const [mealType, setmealType] = useState('');
    const [mealPrice, setmealPrice] = useState('');

    useEffect(() => {
        axios
            .get(url)
            .then((response) => {
                console.log(response.data[0][0])
                // response.data[0];
                // response.data[1];
                setmealPrice(response.data[0][0].MealPrice)
                setmealType(response.data[0][0].MealType)
                setstudentFirstName(response.data[0][0].StudentFirstName)
                setstudentLastName(response.data[0][0].StudentLastName)
                setdate(response.data[0][0].Date.slice(0, 10))
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <div className="content">
            <p>
                <table className='Admintable'>
                    <thead>
                        <tr>
                            <th>Student</th>
                            <th>Date</th>
                            <th>Meal Type</th>
                            <th>Meal Price</th>
                        </tr>
                    </thead>
                    {/* {mockTests.map((test) => {
                        if (test.status == "unattempted") {
                            return */}
                    <tbody>
                        <tr>

                            <td>{studentFirstName + " " + studentLastName}</td>
                            <td>{date}</td>
                            <td>
                                {mealType}
                            </td>
                            <td>{mealPrice}</td>
                        </tr>
                    </tbody>
                    {/* } */}
                    {/* // })} */}
                </table>
            </p>
        </div>
    )
}

const Table1 = () => {
    const [studentId, setstudentId] = useState('');
    const [GuestFirstName, setstudentFirstName] = useState('');
    const [GuestLastName, setstudentLastName] = useState('');
    const [date, setdate] = useState('');
    const [mealType, setmealType] = useState('');
    const [mealPrice, setmealPrice] = useState('');

    useEffect(() => {
        axios
            .get(url)
            .then((response) => {
                console.log(response.data[1][0])
                // response.data[0];
                // response.data[1];
                setmealPrice(response.data[1][0].MealPrice)
                setmealType(response.data[1][0].MealType)
                setstudentFirstName(response.data[1][0].GuestFirstName)
                setstudentLastName(response.data[1][0].GuestLastName)
                setdate(response.data[1][0].Date.slice(0, 10))
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <div className="content">
            <p>
                <table className='Admintable1'>
                    <thead>
                        <tr>
                            <th>Student</th>
                            <th>Date</th>
                            <th>Meal Type</th>
                            <th>Meal Price</th>
                        </tr>
                    </thead>
                    {/* {mockTests.map((test) => {
                        if (test.status == "unattempted") {
                            return */}
                    <tbody>
                        <tr>

                            <td>{GuestFirstName + " " + GuestLastName}</td>
                            <td>{date}</td>
                            <td>
                                {mealType}
                            </td>
                            <td>{mealPrice}</td>
                        </tr>
                    </tbody>
                    {/* } */}
                    {/* // })} */}
                </table>
            </p>
        </div>
    )
}

function Deduct() {
    const [Bool, setBool] = useState(0)
    // let newDate = new Date();
    let date = "14";;
    let month = "01";
    let year = "2023";
    console.log(date)
    const sendData = {
        "Date": year.toString() + "-" + month.toString() + "-" + date.toString()
    }
    console.log(sendData);
    axios.post(url1, sendData).then(result => { setBool(result.data) });

    if (Bool == 1) {
        axios
            .get(url2)
            .then((response) => {
                console.log(response.data)
            })
            .catch((err) => {
                console.log(err);
            });
        axios.post(url3, sendData).then(result => { console.log(result.data) });
    }
}

const Admin = () => {
    return (
        <div>
            {/* <h1>Student</h1> */}
            <Table />
            {/* <h1>Guest</h1> */}
            <Table1 />

            <nav class="nav-admin">

                <div class="nav-main-admin">
                    <div class="logo-admin">Hostel<span>Mess</span></div>
                    <ul class="nav-links-admin">
                        <li class="nav-link dropdown-admin"><a href="" class="dropdown-admin">Decide Menu</a>
                            <ul class="dropdown-list-admin">
                                <li class="nav-link-admin"><a href="/breakfast">Breakfast</a>
                                    <li class="nav-link-admin">
                                        <a href="/lunch">Lunch</a>
                                    </li>
                                    <li class="nav-link-admin">
                                        <a href="/dinner">Dinner</a>
                                    </li>
                                </li>
                            </ul>
                        </li>
                        <button className='deduct' onClick={Deduct}>test</button>

                        {/* <li class="nav-link decision"><a href="/guest">Decide Menu</a></li> */}
                        <li class="nav-link-admin"><a href="/leave">LogOut</a></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
export default Admin;