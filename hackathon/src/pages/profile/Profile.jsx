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
