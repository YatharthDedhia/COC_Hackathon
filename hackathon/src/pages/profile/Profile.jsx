<<<<<<< HEAD
// import React, { useState, useEffect } from "react";
// import { Form, Button, Row, Col } from "react-bootstrap";
// import { useDispatch, useSelector } from "react-redux";
// import Message from "../components/message";
// import Loader from "../components/loader";
// import { getUserDetails, updateUserProfile } from "../actions/userActions";
// import { USER_UPDATE_PROFILE_RESET } from "../constants/userConstants";

// const ProfileView = ({ history }) => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [message, setMessage] = useState(null);

//   const dispatch = useDispatch();

//   const userDetails = useSelector((state) => state.userDetails);
//   const { loading, error, user } = userDetails;

//   const userLogin = useSelector((state) => state.userLogin);
//   const { userInfo } = userLogin;

//   const userUpdateProfile = useSelector((state) => state.userUpdateProfile);
//   const { success } = userUpdateProfile;
//   useEffect(() => {
//     if (!userInfo) {
//       history.push("/login");
//     } else {
//       if (!user || !user.name || success) {
//         dispatch({ type: USER_UPDATE_PROFILE_RESET });
//         dispatch(getUserDetails("profile"));
//       } else {
//         setName(user.name);
//         setEmail(user.email);
//       }
//     }
//   }, [dispatch, history, userInfo, user, success]);

//   const submitHandler = (e) => {
//     e.preventDefault();
//     if (password !== confirmPassword) {
//       setMessage("Passwords do not match");
//     } else {
//       dispatch(updateUserProfile({ id: user._id, name, email, password }));
//     }
//   };

//   return (
//     <Row>
//       <Col md={3}>
//         <h2>Profile</h2>
//         {message && <Message variant="danger">{message}</Message>}

//         {success && <Message variant="success">Profile Updated</Message>}
//         {loading ? (
//           <Loader />
//         ) : error ? (
//           <Message variant="danger">{error}</Message>
//         ) : (
//           <Form onSubmit={submitHandler}>
//             <Form.Group controlId="name">
//               <Form.Label>Name</Form.Label>
//               <Form.Control
//                 type="name"
//                 placeholder="Enter name"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//               ></Form.Control>
//             </Form.Group>

//             <Form.Group controlId="email">
//               <Form.Label>Email Address</Form.Label>
//               <Form.Control
//                 type="email"
//                 placeholder="Enter email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//               ></Form.Control>
//             </Form.Group>

//             <Form.Group controlId="password">
//               <Form.Label>Password</Form.Label>
//               <Form.Control
//                 type="password"
//                 placeholder="Enter password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//               ></Form.Control>
//             </Form.Group>

//             <Form.Group controlId="confirmPassword">
//               <Form.Label>Confirm Password</Form.Label>
//               <Form.Control
//                 type="password"
//                 placeholder="Confirm password"
//                 value={confirmPassword}
//                 onChange={(e) => setConfirmPassword(e.target.value)}
//               ></Form.Control>
//             </Form.Group>

//             <Button type="submit" variant="primary">
//               Update
//             </Button>
//           </Form>
//         )}
//       </Col>
      
//     </Row>
//   );
// };

// export default ProfileView;
=======
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
>>>>>>> 7c3afb8a0b094ed1794be33923d55624515806fd
