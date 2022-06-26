import React, { useEffect, useState } from 'react';
import { TextField } from '../components/TextField';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

export const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { replace } = useHistory();



 const checkUser = () => {
  if (email === ""|| password === "") {
    alert("아이디와 비밀번호를 입력해주세요");
    return;
  }
}
 axios
  .post('http://localhost:1337/api/auth/local', {
    identifier: 'email',
    password: 'password',
   })
   .then((response) => {
    // Handle success.
    console.log('Well done!');
    console.log('User profile', response.data.user);
    console.log('User token', response.data.jwt);
    localStorage.setItem("token", response.data.jwt);
    replace("/");
   })
   .catch((error) => {
    // Handle error.
    console.log('An error occurred:', error.response);
   });
   useEffect(() => {
    if (localStorage.getItem("token")) {
      replace("/");
    }
   }, [])

   return (
    <div>
      <div className='m-4 space-y-10'>
        <div className='text-3xl font-bold'>Login</div>
        <div className='space-y-3'>
          <TextField 
            label={`ID`} 
            placeholder="email" 
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);}
              }/>
          <TextField 
          label="Password"
          placeholder="password"
          type="password"
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
          />
        </div>
      </div>

      
      <div className=''>
       <div
       className='bg-[#B1979C] text-white text-center py-4 rounded-md'
       >
         로그인
         </div>
      </div>
    </div>
  );
};
