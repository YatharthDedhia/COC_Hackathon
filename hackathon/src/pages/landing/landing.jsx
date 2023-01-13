// import React from "react";
// import { useState } from "react";
// import './css/landing.css';


// const signupButton = document.getElementById('signup-button'),
//   loginButton = document.getElementById('login-button'),
//   userForms = document.getElementById('user_options-forms')

// /**
//  * Add event listener to the "Sign Up" button
//  */
// // signupButton.addEventListener('click', () => {
// //   userForms.classList.remove('bounceRight')
// //   userForms.classList.add('bounceLeft')
// // }, false)



// /**
//  * Add event listener to the "Login" button
//  */

// // loginButton.addEventListener('click', () => {
// //   userForms.classList.remove('bounceLeft')
// //   userForms.classList.add('bounceRight')
// // }, false)
// // const handleClick = event => 
// // {
// //   event.target.classList.add('bounceRight');
// //   event.target.classList.remove('bounceLeft');
// // }
// // var Component = React.createClass({
// //   getInitialState: function() {
// //     return {
// //       clicked: false
// //     };
// //   },

// //   handleClick: function() {
// //     this.setState({clicked: true});
// //   },
// //   render: function() {
// //     var className = this.state.clicked ? 'bounceLeft' : 'bounceRight';
// //     return <div className={className} onClick={this.handleClick}>click here</div>;
// //   }
// // });

// // function changeSignup(){

// // }

// const Landing = () => {
//   const [isActive, setIsActive] = useState(false);

//   const handleClick = event => {
//     // 👇️ toggle isActive state on click
//     setIsActive(current => !current);
//   };
//   return (

//     <div>
//       <section class="user">
//         <div class="user_options-container">
//           <div class="user_options-text">
//             <div class="user_options-unregistered">
//               <h2 class="user_unregistered-title">Don't have an account?</h2>
//               <p class="user_unregistered-text">Banjo tote bag bicycle rights, High Life sartorial cray craft beer whatever street art fap.</p>
//               <button  onClick={handleClick} className="signup-button 'bounceRight'" id="signup-button">Sign up</button>
//             </div>
//             {/* isActive ? 'bounceLeft' :  */}
//             <div class="user_options-registered">
//               <h2 class="user_registered-title">Have an account?</h2>
//               <p class="user_registered-text">Banjo tote bag bicycle rights, High Life sartorial cray craft beer whatever street art fap.</p>
//               <button id="login-button" className={isActive ? 'bounceRight' : 'user_registered-login'} onClick={handleClick} >Login</button>
//             </div>
//           </div>

//           <div class="user_options-forms" id="user_options-forms">
//             <div class="user_forms-login">
//               <h2 class="forms_title">Login</h2>
//               <form class="forms_form">
//                 <fieldset class="forms_fieldset">
//                   <div class="forms_field">
//                     <input type="email" placeholder="Email" class="forms_field-input" required autofocus />
//                   </div>
//                   <div class="forms_field">
//                     <input type="password" placeholder="Password" class="forms_field-input" required />
//                   </div>
//                 </fieldset>
//                 <div class="forms_buttons">
//                   <button type="button" class="forms_buttons-forgot">Forgot password?</button>
//                   <input type="submit" value="Log In" class="forms_buttons-action" />
//                 </div>
//               </form>
//             </div>
//             <div class="user_forms-signup">
//               <h2 class="forms_title">Sign Up</h2>
//               <form class="forms_form">
//                 <fieldset class="forms_fieldset">
//                   <div class="forms_field">
//                     <input type="text" placeholder="Full Name" class="forms_field-input" required />
//                   </div>
//                   <div class="forms_field">
//                     <input type="email" placeholder="Email" class="forms_field-input" required />
//                   </div>
//                   <div class="forms_field">
//                     <input type="password" placeholder="Password" class="forms_field-input" required />
//                   </div>
//                 </fieldset>
//                 <div class="forms_buttons">
//                   <input type="submit" value="Sign up" class="forms_buttons-action" />
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );

// };
// export default Landing;
