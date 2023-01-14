import React, { useContext ,useState} from "react";
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
} from "./common";
import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";
import axios from 'axios';

export function LoginForm(props) {
  const StudentsInfo = (e) => {
		e.preventDefault();
		const url = "http://viveksem3apiv4.azurewebsites.net/api/studentsinfo";
		axios
			.get(url)
			.then((response) => {
      console.log(response.data[0])
				for (let i = 0; i < response.data[0].length; i++) {
					if (ID == response.data[0][i].StudentId && password == response.data[0][i].Password) {
						console.log("UserId" + response.data[0][i].StudentRegId);
						// setauthenticated(true)
						// localStorage.setItem("authenticated", true);
						// console.log("AUTHENTICATED: " + authenticated)

						window.location.replace("home")
					}
					else {
						setFlag(1);
					}
				}

			})
			.catch((err) => {
				console.log(err);
			});
	}
  
  const { switchToSignup } = useContext(AccountContext);
  const [ID, setID] = useState('');
  const [password, setPassword] = useState('');
  const [flag, setFlag] = useState(0);
  
  return (
    <BoxContainer>
      <FormContainer onSubmit={StudentsInfo}>
        <Input type="text" placeholder="Registration ID" value={ID} onChange={(e) => setID(e.target.value)} />
        <Input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
      
      <Marginer direction="vertical" margin={10} />
      <MutedLink href="#">Forget your password?</MutedLink>
      <Marginer direction="vertical" margin="1.6em" />
      <SubmitButton type="submit">Signin</SubmitButton>
      <Marginer direction="vertical" margin="1em" />
      <MutedLink href="#">
        Don't have an account?{" "}
        <BoldLink href="#" onClick={switchToSignup}>
          Signup
        </BoldLink>
        <h1>{flag===1? "Email or Password is incorrect.Please try again.":null}</h1>
      </MutedLink>
      </FormContainer>
    </BoxContainer>
  );
}