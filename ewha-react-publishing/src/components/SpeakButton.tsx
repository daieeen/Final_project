import React from 'react';



 export const ListButton = () => {
 return (
     <div className="flex flex-row space-x-2">
        <div className='flex flex-row'>
           <img 
            src="https://images.unsplash.com/photo-1542372147193-a7aca54189cd?crop=entropy&cs=tinysrgb&fm=jpg&ixid=Mnw3MjAxN3wwfDF8c2VhcmNofDIzfHxjYWZlfGVufDB8fHx8MTY1NjA5NTU1Ng&ixlib=rb-1.2.1&q=80&q=85&fmt=jpg&crop=entropy&cs=tinysrgb&w=450" 
            alt=""
            className="w-48 h-64"
            />
            <div className='pl-5'>
              <div className="text-xl font-bold">런던 베이글 뮤지엄 안국점</div>
              <div className='text-gray-700 font-semibold flex flex-col'>
              <div> Open 8:00 AM </div> 
              <div> Close 5:00 PM </div>
             </div>
              <div className='w-96'>
              다정한 스텝과 방금 나온 베이글.
              그리고 따뜻한 수프가 기다리는
              가장 가까운 런던 속 베이글 뮤지엄,
              국내 어디에서도 맛볼 수 없었던              
              베이글의 식감과 무드를 선보입니다 
            </div>
         </div>
        </div> 
     </div>   
    )
 }