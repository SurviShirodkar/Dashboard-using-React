import React, {useContext} from 'react'
import { MyContext } from '../../../Context/Context';
import './stepone.scss'

export default function StepOne({setStep}) {
const plist=  useContext(MyContext);   
const [error,setError]=React.useState("");
const [details,setDetails]=React.useState({
    firstname:"",
    lastname:"",
    email:"",
    contactno:"",
    city:"",
    state:"",
    event:"",
    gender:"",
    ticket:""
}); 
  const ChangeStep = () =>{
      
      console.log(setStep);
      plist.updateParticipantList([...plist.participantList,details]);
      if(!details.firstname)
            {
                setError("firstname");
            return;
            }
       else if(!details.lastname)     
            {
                setError("lastname");
            return;
            }
      else if(!details.email)     
            {
                setError("email");
            return;
            }
      else if(!details.contactno)     
            {
                setError("contactno");
            return;
            } 
      else if(!details.city)     
            {
                setError("city");
            return;
            }
      else if(!details.state)     
            {
                setError("state");
            return;
            }   
      else if(!details.event)     
            {
                setError("event");
            return;
            } 
      else if(!details.gender)     
            {
                setError("gender");
            return;
            } 
      else if(!details.ticket)     
            {
                setError("ticket");
            return;
            }  
            else{
                setStep(1);
            }              
    
     
  }


    return (
        <div className="add-participant">
        <h5>Add participant</h5>
        <form>
           <div className="form-group">
               <div className="form-input">
                   <label className="label" >First Name</label>
                   <input 
                   className="input" 
                   type="text" 
                   required
                   placeholder="Survi" 
                   onChange={(e)=>setDetails({...details,firstname:e.target.value})}
                   ></input>
                   { error === "firstname"?<p className="validate" >please enter your name</p>:""}
               </div>
               <div className="form-input">
                   <label className="label" required>Last Name</label>
                   <input
                   className="input" 
                   type="text" 
                   placeholder="Shirodkar" 
                   required
                   onChange={(e)=>setDetails({...details,lastname:e.target.value})}
                   ></input>
                     { error === "lastname"?<p className="validate" >please enter your lastname</p>:""}
               </div>
           </div>
           <div className="form-group">
               <div className="form-email">
                   <label className="label" required>Email</label>
                   <input 
                   className="input" 
                   type="text" 
                   placeholder="Survishirodkar@gmail.com" 
                   required
                   onChange={(e)=>setDetails({...details,email:e.target.value})}
                   ></input>
                    { error === "email"?<p className="validate" >please enter your email</p>:""}
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
                   onChange={(e)=>setDetails({...details,contactno:e.target.value})}
                   ></input>
                    { error === "contactno"?<p className="validate" >please enter your contact number</p>:""}
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
                   required
                   ></input>
                     { error === "city"?<p className="validate" >please enter your city</p>:""}
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
                     { error === "state"?<p className="validate" >please enter your state</p>:""}
               </div>
           </div>
           <div className="form-group">
               <div className="form-input">
               <label className="label" >Event</label>
                  <select className="input" required  onChange={(e)=>setDetails({...details,event:e.target.value})} >
                      <option 
                      value="fact"  
                     
                      >Fact</option>
                      <option 
                      value="happenings"  
                     
                      >Happenings</option>
                  </select>
                  { error === "event"?<p className="validate" >please enter your event</p>:""}
               </div>
               <div className="form-input">
                   <label className="label" >Gender</label>
                  <select className="input" required onChange={(e)=>setDetails({...details,gender:e.target.value})}
>
                      <option value="male"  >Male</option>
                      <option value="male"  >Female</option>
                  </select>
                  { error === "gender"?<p className="validate" >please enter your gender</p>:""}
               </div>
           </div>
           <div className="form-group">
             <div className="form-input">
                 <label className="label" >Type of Ticket</label>
                     <select className="input" required onChange={(e)=>setDetails({...details,ticket:e.target.value})}
>
                         <option 
                         value="VIP"  
                         >VIP</option>
                         <option 
                         value="normal"  
                         >Normal</option>
                     </select>
                     { error === "ticket"?<p className="validate" >please enter your ticket</p>:""}
                 </div>
           </div>
           <button type="text" className="button" onClick={()=>ChangeStep()}>Save</button>
        </form>
     </div>

    )
}












