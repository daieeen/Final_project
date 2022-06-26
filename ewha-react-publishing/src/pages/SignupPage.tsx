import axios from 'axios';
import React, { useState } from 'react';
import { TextField } from '../components/TextField';
import { useHistory } from 'react-router-dom';


export const SignupPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {replace} = useHistory();
  
const register = () => {
  axios
  .post('http://localhost:1337/api/auth/local/register', {
    username: name,
    email: email,
    password: password,
  })
  .then((response) => {
    // Handle success.
    console.log('Well done!');
    console.log('User profile', response.data.user);
    console.log('User token', response.data.jwt);
    localStorage.setItem('token', response.data.jwt);
    replace("/");
  })
  .catch((error) => {
    // Handle error.
    console.log('An error occurred:', error.response);
  });
}

  return (
    <div>
      <div className='m-4 space-y-10'>
        <div className='text-3xl font-bold'>SignUp</div>
        <div className='space-y-3'>
          <TextField label={`Name`} placeholder="이름을 입력해주세요." 
            value={name} 
            onChange={(event) => {
             setName(event.target.value);
            console.log(event.target.value);
            }}
          />
          <TextField 
          label="Email" 
          placeholder="이메일을 입력해주세요."
          type="email"
          value={email} 
          onChange={(event) => {
           setEmail(event.target.value);
          console.log(event.target.value);
          }}
          />
          <TextField 
           label={`Password`}
           placeholder="비밀번호를 입력해주세요."
           type="password"
           value={password} 
           onChange={(event) => {
            setPassword(event.target.value);
           console.log(event.target.value);
           }} />
        </div>
      </div>
      <div className="">
       <div
       className='bg-[#B1979C] text-white text-center py-4 rounded-md' onClick={() => { 
        register();
        }}>
         회원가입
         </div>
      </div>
    </div>
  );
};
