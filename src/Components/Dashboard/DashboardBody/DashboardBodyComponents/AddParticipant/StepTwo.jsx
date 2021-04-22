import React,{useContext} from 'react'
import { MyContext } from '../../../Context/Context';
import './steptwo.scss'
import axios from 'axios'

export default function StepTwo({setStep,details,setDetails}) {
  const plist=  useContext(MyContext);
  const [loading ,setLoading]=React.useState();
  const changeStep = async()=>{
    setLoading(true);
     let res = await axios.post(`https://protected-fjord-14530.herokuapp.com/api/participant`, details);
     setLoading(false);
    console.log(res);
    alert("survi");
   
if( res.data.status === true)
{
  alert("if");
  setStep(2);
  plist.updateParticipantList(res.data.list);
  } 
  else{
    alert("failed");
    setStep(0);
  }
};
    return ( loading?<h6>Loading....</h6>:        <div className="step-two">
    <h1 className="steptwo-title">Ticket</h1>
   <p  className="steptwo-title">chhose travel package</p>
   <div className="step2-box">
   {
       ticketlist.map( obj => 
              
  
    <div className="box-card" onClick={()=>{ setDetails({...details, ticket: obj.id})}} >
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


   <button type="text" className="button" onClick={()=>changeStep()}>Save</button>

</div>

    )
}
const ticketlist=[{id:"vip",
                  price:"50000$", feature1:"Travel insurance", feature2:"Ambulance Service",feature3:"Franchisw $50",
                  },
                  {
                    id:"normal",
                    price:"50000$", feature1:"Travel insurance", feature2:"Ambulance Service",feature3:"Franchisw $50",
                  },
                  
]