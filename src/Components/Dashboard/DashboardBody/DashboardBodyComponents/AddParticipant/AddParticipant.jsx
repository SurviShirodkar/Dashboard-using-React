import React from 'react'
import { Route, Switch } from 'react-router';
import './addparticipant.scss'
import StepOne from './StepOne'
import StepThree from './StepThree';
import StepTwo from './StepTwo';

export default function AddParticipant() {
    const [step,setStep]=React.useState(0);
    const [details,setDetails]=React.useState({
        firstName:"",
        lastName:"",
        email:"",
        contact:"",
        city:"",
        state:"",
        event:"",
        gender:"",
        ticket:""
       
    }); 
   
    const SelectComponent = () => {
       switch (step) {
           case 0:return <StepOne  setStep={setStep} details={details} setDetails={setDetails}/>
           case 1 :return <StepTwo setStep={setStep}  details={details} setDetails={setDetails}/>
           case 2 :return < StepThree setStep={setStep}/>
          
       }
    }
    return (
       <div className="addparticpant">
            {SelectComponent()}
       </div>
       
       
    )
        
       
   
}
