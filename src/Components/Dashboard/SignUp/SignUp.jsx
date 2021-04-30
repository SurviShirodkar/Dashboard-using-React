import React from 'react'
import './signup.scss'
import signup from './signup.jpg'
import { useHistory } from 'react-router'
import { constantarray } from '../../../constant';
import axios from 'axios'


export default function SignUp() {
    let history = useHistory();
    const [password,setPassword]=React.useState();
   
    const[details,setDetails]=React.useState({
        firstName:"",
        lastName:"",
        contact:"",
        email:"",
        password:""
    })
    const submitDetails = async() => {
       
       
        if(password === details.password){
            const res = await axios.post(`https://protected-fjord-14530.herokuapp.com/api/users`, details);
           
            console.log(res);
            history.push("/login");
            if(res.data.status === true){
                alert("status is true");

            }
            else{
                alert("status is false")
            }
           
        }
        else{
            alert("please check ur password");
        }
   
    
       
    }
    return (
        <div className="signup-main">
    
      <div className="signup-block">
        <div className="s-b-left">
          <img src={signup} height="100%"></img>
        </div>
        <div className="s-b-right">
          <div className="s-b-r-text">
            <h2>Sign Up</h2>
           
          </div>
          {/* <div className="s-b-r-buttons">
            <button>Sign Up With Google</button>
            <button>Sign Up With Facebook</button>
          </div>
          <p>OR</p> */}
          <div className="fullname">
          <div className="s-b-r-firstname">
            <label>First Name<span className="red">*</span></label>
            <input 
             type="text"
             placeholder="Survi"
             className="" 
             onChange={(e)=>setDetails({...details,firstName:e.target.value})}
            required
             ></input>
            
          </div>
          <div className="s-b-r-lastname">
            <label>Last Name<span className="red">*</span></label>
            <input 
             type="text"
             placeholder="Shirodkar"
             className=""
             onChange={(e)=>setDetails({...details,lastName:e.target.value})} 
           required
             ></input>
            
          </div>
          </div>
       
          <div className="s-b-r-contact">
            <label>Contact<span className="red">*</span></label>
            <input 
             type="tel"
             placeholder="7768079856"
             className="" 
             onChange={(e)=>setDetails({...details,contact:e.target.value})}
           required
             ></input>
            
          </div>
          <div className="s-b-r-email">
            <label>Email Address<span className="red">*</span></label>
            <input 
             type="email"
             placeholder="enter email address"
             className="" 
             onChange={(e)=>setDetails({...details,email:e.target.value})}
           required
             ></input>
            
          </div>
          <div className="s-b-r-password">
            <label>Password<span className="red">*</span></label>
            <input 
            type="text"
            className="" 
            placeholder="enter email password" 
            onChange={(e)=>setDetails({...details,password:e.target.value})}
           required
            ></input>
            
          </div>
          <div className="s-b-r-password">
            <label>Confirm Password <span className="red">*</span></label>
            <input 
            type="text"
            className="" 
            placeholder="confirm password" 
            
            onChange={(e)=>setPassword(e.target.value)}
           required
            ></input>
            
          </div>
          <button type="button" className="s-b-r-submit" onClick={()=>submitDetails()} >Submit</button>
          
        
         
         
        
         
         
        </div>
      </div>
    </div>
    )
}
