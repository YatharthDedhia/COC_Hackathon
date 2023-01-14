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

  

	const postData = (e) => {
		e.preventDefault();

			const sendData = {
        // "Password": password,
				// "StudentRegId": RegID,
				
				// "StudentFirstName": Fname,
				// "StudentLastName": lastname,
        // "Age": Age,
        // "Gender":'0',
				// "EmailId": email,
				// "MobileNo": parseInt(mobile),
        // "BlockNo": block,
				// "RoomNo": room,
        // "Balance":0,
				// "Course": course,
				// "Year": year,
        // "Branch": branch,
        // "NumberOfGuests":0,
        // // "CollegeIdPic":null,
        // "TotalNoOfMeals":0,
        // "NoOfBreakfasts":0,
        // "NoofLunches":0,
        // "NoofDinners":0
             "Password" : "qwrty",
        "StudentRegId" : 211070060,
        "StudentFirstName": "Vivek",
        "StudentLastName": "Dalal",
        "Age": 111,
        
        "EmailId": "1",
        "MobileNo": 1,
        "BlockNo": 1,
        "RoomNo": 1,
        "Balance": 0,            
        "Course": "btech",
        "Year": 2,
        "Branch": "CS",
        "NumberOfGuestVisits": 0,                   

        "TotalNoOfMeals": 0,  
        "NoOfBreakfasts":0,        
         "NoOfLunches":0, 
        "NoOfDinners":0     
			};

			console.log(sendData);

			axios.post('http://viveksem3apiv4.azurewebsites.net/api/studentinfo', sendData).then(result => { console.log(result.data) });
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
      <FormContainer onSubmit={postData}>
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
        
      
      <Marginer direction="vertical" margin={10} />
      <SubmitButton type="submit">Signup</SubmitButton>
      <Marginer direction="vertical" margin="1em" />
      <MutedLink href="#">
        Already have an account?
        <BoldLink href="#" onClick={switchToSignin}>
          Signin
        </BoldLink>
      </MutedLink>
      </FormContainer>
    </BoxContainer>
  );
}