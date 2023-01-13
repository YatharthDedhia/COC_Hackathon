import React from 'react';
import './css/navbar.css';
// import './css/table.css';

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
const Table = () => {
    return (
        <div className="content">
            <p>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Time</th>
                            <th>Link</th>
                        </tr>
                    </thead>
                    {mockTests.map((test) => {
                        if (test.status == "unattempted") {
                            return <tbody>
                                <tr>

                                    <td>{test.name}</td>
                                    <td>{test.time}</td>
                                    <td>
                                        <a href={test.link}>{test.link}</a>
                                    </td>
                                </tr>
                            </tbody>
                        }
                    })}
                </table>
            </p>
        </div>
    )
}

const Admin = () => {
    return (
        <div>
            <Table/>
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
                        {/* <li class="nav-link decision"><a href="/guest">Decide Menu</a></li> */}
                        <li class="nav-link-admin"><a href="/leave">LogOut</a></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
export default Admin;