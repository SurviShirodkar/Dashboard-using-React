import React from 'react'
import { Route, Switch } from 'react-router';
import './addparticipant.scss'
import StepOne from './StepOne'
import StepThree from './StepThree';
import StepTwo from './StepTwo';

export default function AddParticipant() {
    const [step,setStep]=React.useState(0);
   
    const SelectComponent = () => {
       switch (step) {
           case 0:return <StepOne  setStep={setStep}/>
           case 1 :return <StepTwo setStep={setStep}/>
           case 2 :return < StepThree setStep={setStep}/>
          
       }
    }
    return (
       <div className="addparticpant">
            {SelectComponent()}
       </div>
       
       
    )
        
       
   
}
