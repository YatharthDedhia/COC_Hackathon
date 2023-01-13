import React from 'react';
import './css/navbar.css';
const Admin = () => {
    return (
        <div>
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