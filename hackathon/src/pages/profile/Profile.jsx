import React, { useState } from 'react';
import './css/profile.css'
import './css/menubox.css'
import './css/id.css'

const Profile_Block = () => {
    return (
        <div class="profile block">
            <a class="add-button" href="#28"><span class="icon entypo-plus scnd-font-color"></span></a>
            <div class="profile-picture big-profile-picture clear">
                {/* <img src={`data:image/png;base64,${pic}`} /> */}
            </div>
            <h1 class="user-name">Manav Shah</h1>
            <ul class="profile-options horizontal-list">
                <div class="display-content">
                    <div class="credentials">Room No : </div>
                    <div class="credentials">Balance : </div>
                    <div class="credentials">No. of guests : </div>
                    <div class="credentials">No. of Meal : </div>
                </div>
            </ul>
        </div>
    );
};

const Id = () => {
    return (
        <div className='id-body'>
            <div class="card">
                <div class="img-bx">
                    <img src="https://previews.123rf.com/images/triken/triken1608/triken160800029/61320775-male-avatar-profile-picture-default-user-avatar-guest-avatar-simply-human-head-vector-illustration-i.jpg" width="300" height="300" alt="img" />
                </div>
                <div class="content">
                    <div class="detail">
                        <h2>Manav Shah<br /></h2>
                        <ul class="sci">
                            <li class='credentials'>
                                Contact No.: 76832924
                            </li>
                            <li class='credentials'>
                                Room No.: 55
                            </li>
                            <li class='credentials'>
                                Branch: CE
                            </li>
                            <li class='credentials'>
                                Mess ID No: 66
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

const Profile = () => {
    return (
        <div className='main-container'>

            {/* <Header_Menu /> */}
            <div className='container3'>
                <Profile_Block />
                <Id />
            </div>
        </div>
    );
};
export default Profile;