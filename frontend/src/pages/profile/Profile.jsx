// export default ProfileView;
import React, { useContext, useEffect, useState } from "react";
import {
    BoldLink,
    BoxContainer,
    FormContainer,
    Input,
    MutedLink,
    SubmitButton,
} from "../landing/accountBox/common";
import { Marginer } from "../landing/marginer";
import { AccountContext } from "../landing/accountBox/accountContext";
import axios from 'axios';
import './css/profile.css'
import './css/menubox.css'
import './css/id.css'

const Profile_Block = () => {
    const [ID, setID] = useState('');
    const [password, setPassword] = useState('');
    const [balance, setBalance] = useState(0);
    const [block, setBlock] = useState('');
	const [room, setRoom] = useState('');
    const [guest, setGuest] = useState('');
    const [noofMeals, setnoofMeals] = useState('');
    const [contact, setContact] = useState('');
	const [branch, setBranch] = useState('');
    const [messID, setmessID] = useState('');
    
    const url = "http://viveksem3apiv4.azurewebsites.net/api/studentsinfo";
    useEffect(() => {
        axios
            .get(url)
            .then((response) => {
                console.log(response.data[0][1].RoomNo);
                setRoom(response.data[0][1].RoomNo);
                setBalance(response.data[0][1].Balance);
                setGuest(response.data[0][1].NumberOfGuestVisits);
                setnoofMeals(response.data[0][1].TotalNoOfMeals);
            })
            .catch((err) => {
                console.log(err);
            });
    });

    return (
        <div class="profile block">
            <a class="add-button" href="#28"><span class="icon entypo-plus scnd-font-color"></span></a>
            <div class="profile-picture big-profile-picture clear">
                {/* <img src={`data:image/png;base64,${pic}`} /> */}
                <img src= {stru} width="300" height="300" alt="img" />
            </div>
            <h1 class="user-name">Manav Shah</h1>
            <ul class="profile-options horizontal-list">
                <div class="display-content">
                    <div class="credentials" onChange={(e) => setRoom(e.target.value) }>Room No : {room} </div>
                    <div class="credentials" onChange={(e) => setBalance(e.target.value) }>Balance : {balance}</div>
                    <div class="credentials" onChange={(e) => setGuest(e.target.value) }>Guests : {guest}</div>
                    <div class="credentials" onChange={(e) => setnoofMeals(e.target.value) }>No.of Meals : {noofMeals}</div>
                </div>
            </ul>
        </div>
    );
};

const stru = "data:image/png;base64,"+"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"

const Id = () => {
    const [ID, setID] = useState('');
    const [password, setPassword] = useState('');
    const [balance, setBalance] = useState(0);
    const [block, setBlock] = useState('');
	const [room, setRoom] = useState('');
    const [guest, setGuest] = useState('');
    const [noofMeals, setnoofMeals] = useState('');
    const [contact, setContact] = useState('');
	const [branch, setBranch] = useState('');
    const [messID, setmessID] = useState('');

    const url = "http://viveksem3apiv4.azurewebsites.net/api/studentsinfo";
    useEffect(() => {
        axios
            .get(url)
            .then((response) => {
                // console.log(response.data[0][1].RoomNo);
                setRoom(response.data[0][1].RoomNo);
                setContact(response.data[0][1].MobileNo);
                setBranch(response.data[0][1].Branch);
                setmessID(response.data[0][1].StudentId);
            })
            .catch((err) => {
                console.log(err);
            });
    });

    return (
        <div className='id-body'>
            <div class="card">
                <div class="img-bx">
                    <img src= {stru} width="300" height="300" alt="img" />
                </div>
                <div class="content">
                    <div class="detail">
                        <h2>Manav Shah<br /></h2>
                        <ul class="sci">
                            <li class='credentials'onChange={(e) => setContact(e.target.value) } >Contact No : {contact} 
                            </li>
                            <li class='credentials'onChange={(e) => setRoom(e.target.value) } >Room No : {room} 
                                
                            </li>
                            <li class='credentials'onChange={(e) => setBranch(e.target.value) } >Branch : {branch}
                            </li>
                            <li class='credentials'onChange={(e) => setmessID(e.target.value) } >Mess Id No : {messID}
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
