import React, { useContext,useState } from "react";
import axios from 'axios';
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

function Console(data)
{
  console.log({data});
}
export function SignupForm(props) {

  const StudentsInfo = (e) => {
		e.preventDefault();
		const url = "http://lmsapiv01.azurewebsites.net/api/usertable";
		axios
			.get(url)
			.then((response) => {

				for (let i = 0; i < response.data[0].length; i++) {
					if (email == response.data[0][i].StudentId && password == response.data[0][i].Password) {
						console.log("UserId" + response.data[0][i].UserId);
						// setauthenticated(true)
						// localStorage.setItem("authenticated", true);
						// console.log("AUTHENTICATED: " + authenticated)

						// window.location.replace("dashboard")
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

	const postData = (e) => {
		e.preventDefault();
		if (password == confirm) {
			setConfirm(1);

			const sendData = {
				"StudentRegId": RegID,
				"Password": password,
				"StudentFirstName": Fname,
				"StudentLastName": lastname,
				"EmailId": email,
				"MobileNo": parseInt(mobile),
				"Age": Age,
        "BlockNo": block,
				"RoomNo": room,
				"Balance": balance,
				"Course": course,
				"Year": year,
        "Branch": branch,
				"ActivationStatus": '0'
			};

			console.log(sendData);

			axios.post('http://lmsapiv01.azurewebsites.net/api/usertable', sendData).then(result => { console.log(result.data) });
		}
		else {
			setConfirm(1);
		}
	}
  const { switchToSignin } = useContext(AccountContext);
  const [confirm, setConfirm] = useState(0);
  const [flag, setFlag] = useState(0);
  const [RegID, setRegID] = useState('');
	const [Fname, setFname] = useState('');
	const [password, setPassword] = useState('');
	const [Age, setAge] = useState('');
	const [lastname, setLastName] = useState('');
	const [email, setEmail] = useState('');
	const [mobile, setMobile] = useState('');
	const [block, setBlock] = useState('');
	const [room, setRoom] = useState('');
  const [course, setCourse] = useState('');
  const [branch, setBranch] = useState('');
  const [balance, setBalance] = useState('');
	const [year, setYear] = useState('');
  return (
    <BoxContainer>
      <FormContainer>
        <Input type="text" placeholder="Registration ID" value={RegID} onChange={(e) => setRegID(e.target.value)}/>
        <Input type="text" placeholder="First Name" value={Fname} onChange={(e) => setFname(e.target.value) }/>
        <Input type="text" placeholder="Last Name" value={lastname} onChange={(e) => setLastName(e.target.value) }/>
        <Input type="number" placeholder="Age" value={Age} onChange={(e) => setAge(e.target.value) }/>
        <Input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value) }/>
        <Input type="email" placeholder="EMail ID" value={email} onChange={(e) => setEmail(e.target.value) } />
        <Input type="number" placeholder="Mobile Number" value={mobile} onChange={(e) => setMobile(e.target.value) }/>
        <Input type="number" placeholder="Block Number" value={block} onChange={(e) => setBlock(e.target.value) }/>
        <Input type="number" placeholder="Room Number" value={room} onChange={(e) => setRoom(e.target.value) }/>
        <Input type="money" placeholder="Balance" value={balance} onChange={(e) => setBalance(e.target.value) }/>
        <Input type="text" placeholder="Course" value={course} onChange={(e) => setCourse(e.target.value) }/>
        <Input type="number" placeholder="Year" value={year} onChange={(e) => setYear(e.target.value) }/>
        <Input type="text" placeholder="Branch" value={branch} onChange={(e) => setBranch(e.target.value) }/>
        <Input type="file" placeholder="File" accepted="image/jpg image/png" />
        
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <SubmitButton onSubmit={Console({email})}   type="submit">Signup</SubmitButton>
      <Marginer direction="vertical" margin="1em" />
      <MutedLink href="#">
        Already have an account?
        <BoldLink href="#" onClick={switchToSignin}>
          Signin
        </BoldLink>
      </MutedLink>
    </BoxContainer>
  );
}