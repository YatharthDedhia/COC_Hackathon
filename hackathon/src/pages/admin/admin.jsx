import React from 'react';
import './css/navbar.css';
const Admin = () => {
    return (
        <div>
            <nav class="nav">
                <div class="nav-main">
                    <div class="logo">Hostel<span>Mess</span></div>
                    <ul class="nav-links">
                        <li class="nav-link dropdown"><a href="" class="dropdown">Decide Menu</a>
                            <ul class="dropdown-list">
                                <li class="nav-link"><a href="">Breakfast</a>
                                    <li class="nav-link">
                                        <a href="">Lunch</a>
                                    </li>
                                    <li class="nav-link">
                                        <a href="">Dinner</a>
                                    </li>
                                </li>
                            </ul>
                        </li>
                        {/* <li class="nav-link decision"><a href="/guest">Decide Menu</a></li> */}
                        <li class="nav-link"><a href="/leave">LogOut</a></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
export default Admin;