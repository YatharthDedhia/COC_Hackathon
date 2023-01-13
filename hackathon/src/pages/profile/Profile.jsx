import React, { useState } from 'react';
import './css/profile.css'
import './css/menubox.css'



const Header_Menu = () => {
    return (
        <header class="block">
            <ul class="header-menu horizontal-list">
                <li>
                    <a class="header-menu-tab" href="#1"><span class="icon entypo-cog scnd-font-color"></span>Settings</a>
                </li>
                <li>
                    <a class="header-menu-tab" href="#2"><span class="icon fontawesome-user scnd-font-color"></span>Account</a>
                </li>
                <li>
                    <a class="header-menu-tab" href="#3"><span class="icon fontawesome-envelope scnd-font-color"></span>Questions</a>
                    <a class="header-menu-number" href="#4">5</a>
                </li>
                <li>
                    <a class="header-menu-tab" href="#5"><span class="icon fontawesome-star-empty scnd-font-color"></span>Solutions</a>
                </li>
            </ul>
            <div class="profile-menu">
                <p>Me <a href="#26"><span class="entypo-down-open scnd-font-color"></span></a></p>
                <div class="profile-picture small-profile-picture">
                    {/* <img src={`data:image/png;base64,${pic}`} /> */}
                </div>
            </div>
        </header>

    );
};

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
                <div class="credentials">No of Meal : </div>
                </div>
            </ul>
        </div>
    );
};

// const Line_Graph = () => {
//     return (
//         <div class="line-chart-block block clear">
//             {/* <!-- LINE CHART BLOCK (LEFT-CONTAINER) --> */}
//             <div class="line-chart">
//                 {/* <!-- LINE-CHART by @kseso https://codepen.io/Kseso/pen/phiyL --> */}
//                 <div class='grafico'>
//                     <ul class='eje-y'>
//                         <li data-ejeY='30'></li>
//                         <li data-ejeY='20'></li>
//                         <li data-ejeY='10'></li>
//                         <li data-ejeY='0'></li>
//                     </ul>
//                     <ul class='eje-x'>
//                         <li>Apr</li>
//                         <li>May</li>
//                         <li>Jun</li>
//                     </ul>
//                     <span data-valor='25'>
//                         <span data-valor='8'>
//                             <span data-valor='13'>
//                                 <span data-valor='5'>
//                                     <span data-valor='23'>
//                                         <span data-valor='12'>
//                                             <span data-valor='15'>
//                                             </span></span></span></span></span></span></span>
//                 </div>
//                 {/* <!-- END LINE-CHART by @kseso https://codepen.io/Kseso/pen/phiyL --> */}
//                 <ul class="time-lenght horizontal-list">
//                     <li><a class="time-lenght-btn" href="#14">Week</a></li>
//                     <li><a class="time-lenght-btn" href="#15">Month</a></li>
//                     <li><a class="time-lenght-btn" href="#16">Year</a></li>
//                 </ul>
//                 <ul class="month-data clear">
//                     <li>
//                         <p>APR<span class="scnd-font-color"> 2013</span></p>
//                         <p><span class="entypo-plus increment"> </span>21<sup>%</sup></p>
//                     </li>
//                     <li>
//                         <p>MAY<span class="scnd-font-color"> 2013</span></p>
//                         <p><span class="entypo-plus increment"> </span>48<sup>%</sup></p>
//                     </li>
//                     <li>
//                         <p>JUN<span class="scnd-font-color"> 2013</span></p>
//                         <p><span class="entypo-plus increment"> </span>35<sup>%</sup></p>
//                     </li>
//                 </ul>
//             </div>
//         </div>
//     );
// };

const Profile = () => {
    return (
        <div className='main-container'>

            <Header_Menu />
            <div className='container3'>
                <Profile_Block />
                {/* <Line_Graph /> */}
            </div>
        </div>
    );
};
export default Profile;