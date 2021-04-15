import React, { useContext , useEffect } from 'react'
import { MyContext } from '../Context/Context'

export default function DashboardBody() {
   const mood = useContext(MyContext);
   useEffect(() => {
    const getinfo = () => { 
        //    return x.email === localStorage.getItem("email");
         const data = localStorage.getItem("data") ;
         console.log(data);
      
       
       };
   

   
   })
  
    return (
        <div>
           <h2>My name is : {mood.first}</h2>
            <button onClick={() => mood.updateFirst("Shaktiman")} >Click the button to reveal</button>
        </div>
    )
}
