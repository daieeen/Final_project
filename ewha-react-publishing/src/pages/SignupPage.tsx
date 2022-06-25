import React, { useState } from 'react';
import { TextField } from '../components/TextField';

export const SignupPage = () => {
  const [clickedCount, setClickedCount] = useState(0);
  return (
    <div>
      <div className='m-4 space-y-10'>
        <div className='text-3xl font-bold'>SignUp</div>
        <div className='space-y-3'>
          <TextField label={`Name`} placeholder="Username" />
          <TextField 
          label="ID"
          placeholder="email"
          type="email"
          />
          <TextField 
           label={`Password`}
           placeholder="Password"
           type="password" />
        </div>
      </div>
      <div className=''>
       <div
       className='bg-[#B1979C] text-white text-center py-4 rounded-md' onClick={() => {setClickedCount(clickedCount + 1);
       }}
       >
         로그인
         </div>
      </div>
    </div>
  );
};
