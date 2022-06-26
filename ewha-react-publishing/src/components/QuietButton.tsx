import React from 'react';

type QuietButtonProps = {
   label:string
}

 export const QuietButton: React.FC<QuietButtonProps> = ({
   label}) => {
 return (
     <div className="flex flex-row space-x-2">
        <div className='flex flex-row'>
           <img 
            src="https://images.unsplash.com/photo-1559305616-3f99cd43e353?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2FmZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1000&q=60" 
            alt=""
            className="w-48 h-64"
            />
            <div className='pl-5'>
              <div className="text-xl font-bold">{label}</div>
              <div className='text-gray-700 font-semibold flex flex-col'>
              <div> Open 9:00 AM </div> 
              <div> Close 10:00 PM </div>
             </div>
              <div className='w-96'>
              즐길 수 있는 먹거리가 많은 카페테리아입니다. 
              수준 높은 커피와 디저트, 그리고 푸짐한 브런치를 제공합니다. 
              많은 사랑을 받고 있는 이 곳은 잼잼입니다.
              </div>
            </div>
         </div>
     </div>    
    )
 };