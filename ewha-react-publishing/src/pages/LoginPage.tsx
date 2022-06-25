import React, { useState } from 'react';
import { TextField } from '../components/TextField';

export const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")

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
