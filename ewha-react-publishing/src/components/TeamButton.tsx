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
              <div className="text-xl font-bold">세상의모든아침</div>
              <div className='text-gray-700 font-semibold flex flex-col'>
              <div> Open 9:00 AM </div> 
              <div> Close 8:00 PM </div>
             </div>
              <div className='w-96'>
              우리의 매일이 아침으로 깨어나듯이, 메뉴의 시작 점인 원재료의 신선함을 담았습니다.
              커피 한 잔, 브런치, 파스타와 샌드위치, 스테이크와 와인까지 함께할 수 있는 All Day Brunch Dining
              [예약 안내]
              1. 테이블 예약은 유선상으로만 가능합니다. 
              2. 예약 시점에서 한달까지의 예약만 받고 있습니다.
              3. 좌석은 선착순으로 배정되어 희망하시는 좌석이 조기 마감될 수 있습니다.
              2020년 11월 1일부터 주말 예약이 가능합니다.
              </div>
            </div>
         </div>
     </div>    
    )
 };