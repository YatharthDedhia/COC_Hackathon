import React from "react";
import { useState } from "react";
import './css/landing.css';


const signupButton = document.getElementById('signup-button'),
    loginButton = document.getElementById('login-button'),
    userForms = document.getElementById('user_options-forms')
    
/**
 * Add event listener to the "Sign Up" button
 */
// signupButton.addEventListener('click', () => {
//   userForms.classList.remove('bounceRight')
//   userForms.classList.add('bounceLeft')
//   classNames('bounce', { Left: true }); 
// classNames('bounce', { Right: false });
// }, false)



/**
 * Add event listener to the "Login" button
 */

// loginButton.addEventListener('click', () => {
//   userForms.classList.remove('bounceLeft')
//   userForms.classList.add('bounceRight')
//   userForms.classNames('bounce', { Right: true }); 
// userForms.classNames('bounce', { Left: false });
// }, false)
// const handleClick = event => {
  
//   setIsActive(current => !current);
// };
const Landing=()=>{
  
//   const [isActive, setIsActive] = useState(false);
    return(
      
      <div>
        <section class="user">
  <div class="user_options-container">
    <div class="user_options-text">
      <div class="user_options-unregistered">
        <h2 class="user_unregistered-title">Don't have an account?</h2>
        <p class="user_unregistered-text">Banjo tote bag bicycle rights, High Life sartorial cray craft beer whatever street art fap.</p>
        <button  class="user_unregistered-signup" id="signup-button">Sign up</button>
      </div>

      <div class="user_options-registered">
        <h2 class="user_registered-title">Have an account?</h2>
        <p class="user_registered-text">Banjo tote bag bicycle rights, High Life sartorial cray craft beer whatever street art fap.</p>
        <button class="user_registered-login" id="login-button">Login</button>
      </div>
    </div>
    
    <div class="user_options-forms" id="user_options-forms">
      <div class="user_forms-login">
        <h2 class="forms_title">Login</h2>
        <form class="forms_form">
          <fieldset class="forms_fieldset">
            <div class="forms_field">
              <input type="email" placeholder="Email" class="forms_field-input" required autofocus />
            </div>
            <div class="forms_field">
              <input type="password" placeholder="Password" class="forms_field-input" required />
            </div>
          </fieldset>
          <div class="forms_buttons">
            <button type="button" class="forms_buttons-forgot">Forgot password?</button>
            <input type="submit" value="Log In" class="forms_buttons-action"/>
          </div>
        </form>
      </div>
      <div class="user_forms-signup">
        <h2 class="forms_title">Sign Up</h2>
        <form class="forms_form">
          <fieldset class="forms_fieldset">
            <div class="forms_field">
              <input type="text" placeholder="Full Name" class="forms_field-input" required />
            </div>
            <div class="forms_field">
              <input type="email" placeholder="Email" class="forms_field-input" required />
            </div>
            <div class="forms_field">
              <input type="password" placeholder="Password" class="forms_field-input" required />
            </div>
          </fieldset>
          <div class="forms_buttons">
            <input type="submit" value="Sign up" class="forms_buttons-action"/>
          </div>
        </form>
      </div>
    </div>
  </div>
</section>
    </div>
    );
    
};
export default Landing;
