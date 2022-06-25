 import React from 'react';

 type ListButtonProps = {
     label:string
 }

 export const ListButton:React.FC<ListButtonProps>= ({label}) => {
     return ( 
         <div>
             <img 
             src="https://images.unsplash.com/photo-1559305616-3f99cd43e353?crop=entropy&cs=tinysrgb&fm=jpg&ixid=Mnw3MjAxN3wwfDF8c2VhcmNofDN8fGNhZmV8ZW58MHx8fHwxNjU1MTQ4NzQ1&ixlib=rb-1.2.1&q=80&q=85&fmt=jpg&crop=entropy&cs=tinysrgb&w=450" 
             alt="" 
             className="w-45 h-64 object-cover"
             />
         </div>
     )
 };