import React from 'react'
import './steptwo.scss'

export default function StepTwo({setStep}) {
    return (
        <div className="step-two">
             <h1 className="steptwo-title">Ticket</h1>
            <p  className="steptwo-title">chhose travel package</p>
            <div className="step2-box">
            {
                ticketlist.map( obj => 
                       
           
             <div className="box-card">
                    <h1 className="step2-para">{obj.price}</h1>
                    <hr></hr>
               <div className="feature">
                    <p>{obj.feature1}</p>
                    <p>{obj.feature2}</p>
                    <p>{obj.feature3} </p>
               </div>
             </div>  
      

                    )
            }
              </div>
        
         
            <button type="text" className="button" onClick={()=>setStep(2)}>Save</button>
 
        </div>
    )
}
const ticketlist=[{
                  price:"50000$", feature1:"Travel insurance", feature2:"Ambulance Service",feature3:"Franchisw $50",
                  },
                  {
                    price:"50000$", feature1:"Travel insurance", feature2:"Ambulance Service",feature3:"Franchisw $50",
                  },
                  
]