import React from 'react';
import axios from 'axios';

axios.get('http://localhost:1337/api/cafes').then(response => {
  console.log(response);
});

const API_KEY = ""

export const HomePage = () => {
  return <div className="space-y-8">
    <div className="text-3xl font-bold pt-8 pl-8">CAFE</div>
    <div className="flex space-x-16 px-40">
      <div className='w-12'>조용한분위기</div>
      <div>말해도 되는 분위기</div>
      <div>팀플하기 좋은 분위기</div>
    </div>
  <div>
    <div className="px-52 object-cover">
      <img 
      src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?crop=entropy&cs=tinysrgb&fm=jpg&ixid=Mnw3MjAxN3wwfDF8c2VhcmNofDJ8fGNhZmV8ZW58MHx8fHwxNjU0ODg1MDU0&ixlib=rb-1.2.1&q=80&q=85&fmt=jpg&crop=entropy&cs=tinysrgb&w=450" 
      alt=""
      className="w-50 h-64 object-cover"
      />
    </div>

  </div>
    <div className="px-16">
      <div>
        <div className="text-2xl font-bold my-8">Recommended Cafe</div>
        <div className="space-y-8">
        <div className="flex flex-row space-x-2">
         <div className='flex flex-row'>
           <img 
            src="https://images.unsplash.com/photo-1559305616-3f99cd43e353?crop=entropy&cs=tinysrgb&fm=jpg&ixid=Mnw3MjAxN3wwfDF8c2VhcmNofDN8fGNhZmV8ZW58MHx8fHwxNjU1MTQ4NzQ1&ixlib=rb-1.2.1&q=80&q=85&fmt=jpg&crop=entropy&cs=tinysrgb&w=450" 
            alt=""
            className="w-48 h-64"
            />
            <div className='pl-5'>
              <div className="text-xl font-bold">JamJam</div>
              <div className='flex flex-col font-semibold'>
                <div>OPEN 9:00</div>
                <div>Close 19:00</div>   
              </div>
              <div className='w-96'>즐길 수 있는 먹거리가 많은 카페테리아입니다.
                   수준 높은 커피와 디저트, 그리고 푸짐한 브런치를 제공합니다.
                   많은 사랑을 받고 있는 이 곳은 잼잼입니다.
              </div>
            </div>
         </div>
        </div>
         <div className='flex flex-row'>
           <img 
            src="https://images.unsplash.com/photo-1567880905822-56f8e06fe630?crop=entropy&cs=tinysrgb&fm=jpg&ixid=Mnw3MjAxN3wwfDF8c2VhcmNofDR8fGNhZmV8ZW58MHx8fHwxNjU1MTQ4NzQ1&ixlib=rb-1.2.1&q=80&q=85&fmt=jpg&crop=entropy&cs=tinysrgb&w=450" 
            alt="" 
            className="w-48 h-64"
            />
            <div className='pl-5'>
              <div className="text-xl font-bold">씨스루</div>
              <div className='flex flex-col font-semibold'>
                <div>OPEN 9:00</div>
                <div>Close 19:00</div>   
              </div>
              <div className="w-96">씨스루는 항상 변화하지만 늘 곁에 있는 달처럼
              언제나 변화하는 모습으로 여러분 곁에서 함께 하고 있습니다. 
              씨스루가 추구하는 컾는 첫 모금부터 마지막 모금까지 맛있고 편안하게 먹을 수 
              있는 커피를 추구하고 커피의 가치를 높이고자 커피를 예술의 경지로 만드는 
              것을 추구합니다. 저희가 내어드린 커피 한잔이 여러분의 행복에 기여할 수 
              있도록 최선을 다하는 씨스루가 되겠습니다. 
              </div>
            </div>
         </div>
         <div className="flex flex-row">
           <img 
            src="https://images.unsplash.com/photo-1616091216791-a5360b5fc78a?crop=entropy&cs=tinysrgb&fm=jpg&ixid=Mnw3MjAxN3wwfDF8c2VhcmNofDMyfHxjYWZlfGVufDB8fHx8MTY1NTQ3OTk2Mw&ixlib=rb-1.2.1&q=80&q=85&fmt=jpg&crop=entropy&cs=tinysrgb&w=450" 
            alt="" 
            className="w-48 h-64"
            />
            <div className='pl-5'>
              <div className="text-xl font-bold">VALT</div>
              <div className='flex flex-col font-semibold'>
                <div>OPEN 9:00</div>
                <div>Close 19:00</div>   
              </div>
              <div className='w-96'>연남동에 위치한 모던 인더스트리얼 카페 VALT
              아이덴티티 컬러인 코발트 블루에 가치를 더한 VALT만의 컬러와 컬쳐를 공유
              합니다. 오가닉 소스가 들어간 크로프로 발트의 다양한 음료들과 즐겨 보시길 
              바랍니다. 미니멀하고 힙한 사운드와 공간을 즐기며 포토스팟을 활용한 사진도 
              촬영하기 좋은 공간 VALT. 발트만의 오리지널 it 굿즈들도 많이 사랑해 주세요!
              </div>
            </div>
         </div>
         <div className='w-48 h-64 object-cover'>
           <img 
            src="https://images.unsplash.com/photo-1601065700897-d9fa1c093f3e?crop=entropy&cs=tinysrgb&fm=jpg&ixid=Mnw3MjAxN3wwfDF8c2VhcmNofDM3fHxjYWZlfGVufDB8fHx8MTY1NTIxNTIzNQ&ixlib=rb-1.2.1&q=80&q=85&fmt=jpg&crop=entropy&cs=tinysrgb&w=450" 
            alt="" 
            />
         </div>
      
        </div>
      </div>
    </div>
    <div></div>
  </div>
};

