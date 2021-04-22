import React, {useContext} from 'react'
import { MyContext } from '../../../Context/Context';
import './stepone.scss'

export default function StepOne({setStep,details,setDetails}) {
const plist=  useContext(MyContext);   
const [error,setError]=React.useState("");

  const ChangeStep = () =>{
      setStep(1)
      plist.updateParticipantList([...plist.participantList,details]);
  }


    return (
        <div className="add-participant">
        <h5>Add participant</h5>
        <form onSubmit={e=>{e.preventDefault(); ChangeStep()}}>
           <div className="form-group">
               <div className="form-input">
                   <label className="label" >First Name</label>
                   <input 
                   className="input" 
                   type="text" 
                   required
                   placeholder="Survi" 
                   onChange={(e)=>setDetails({...details,firstName:e.target.value})}
                   ></input>
                 
               </div>
               <div className="form-input">
                   <label className="label" >Last Name</label>
                   <input
                   className="input" 
                   type="text" 
                   placeholder="Shirodkar" 
                   required
                   onChange={(e)=>setDetails({...details,lastName:e.target.value})}
                   ></input>
                   
               </div>
           </div>
           <div className="form-group">
               <div className="form-email">
                   <label className="label" >Email</label>
                   <input 
                   className="input" 
                   type="text" 
                   placeholder="Survishirodkar@gmail.com" 
                  required
                   onChange={(e)=>setDetails({...details,email:e.target.value})}
                   ></input>
               </div>
           </div>
           <div className="form-group">
               <div className="form-email">
                   <label className="label" >Contact Number </label>
                   <input 
                   className="input" 
                   type="text" 
                   placeholder="9370071402" 
                   required
                   onChange={(e)=>setDetails({...details,contact:e.target.value})}
                   ></input>
               </div>
           </div>
           <div className="form-group">
               <div className="form-input">
                   <label className="label" >City</label>
                   <input 
                   className="input" 
                   type="text" 
                   placeholder="Bicholim" 
                   required
                   onChange={(e)=>setDetails({...details,city:e.target.value})}
                   ></input>
               </div>
               <div className="form-input">
               <label className="label" >State</label>
                   <input 
                   className="input" 
                   type="text" 
                   placeholder="Goa" 
                   required
                   onChange={(e)=>setDetails({...details,state:e.target.value})}
                   ></input>
               </div>
           </div>
           <div className="form-group">
               <div className="form-input">
               <label className="label" >Event</label>
                  <select className="input" name="event" id="event" required  onChange={(e)=>setDetails({...details,event:e.target.value})} >
                  <option value=""  >please select</option>               
                     
                      {
                          plist.eventList.map(obj =>
                            <option value={obj._id}  >{obj.name}</option> 
                            )
                      }
                  </select>
               </div>
               <div className="form-input">
              
                   <label className="label" >Gender</label>
                  <select className="input" required  onChange={(e)=>setDetails({...details,gender:e.target.value})}
>                     <option value=""  >please select</option>               
                      <option value="male"  >Male</option>
                      <option value="male"  >Female</option>
                  </select>
               </div>
           </div>
           {/* <div className="form-group">
             <div className="form-input">
                 <label className="label" >Type of Ticket</label>
                     <select className="input" required  onChange={(e)=>setDetails({...details,ticket:e.target.value})}
>                          <option value=""                   
                      >please select</option>
                         <option 
                         value="VIP"  
                         >VIP</option>
                         <option 
                         value="normal"  
                         >Normal</option>
                     </select>
                 </div>
           </div> */}
           <button type="text" className="button">Save</button>
        </form>
     </div>

    )
}