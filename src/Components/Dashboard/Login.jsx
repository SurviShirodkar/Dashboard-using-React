import React, { Component } from "react";
import {useHistory } from "react-router";
import { constantarray } from "../../constant";
import leftimage from "./leftimage.svg";
import "./login.scss";

export default function Login() {
  let history=useHistory();
  const [credentials,setCredentials]= React.useState({email: "", password:""});
  const [error,setError]= React.useState("");
 
  const SubmitCredentials = ()=>{
 
  const temp = constantarray.users.find(e => e.email === credentials.email);
  console.log(temp);
  if(!temp){
    setError("email");
    return;
  }
  if(credentials.password === temp.password){
  history.push("/Dashboard");
  localStorage.setItem("email",credentials.email);
  }
  else
  {
  setError("password");
 
  }

  };
  return (
    <div className="login-main">
    
      <div className="login-block">
        <div className="l-b-left">
          <img src={leftimage}></img>
        </div>
        <div className="l-b-right">
          <div className="l-b-r-text">
            <h2>Get Started</h2>
            <p>ehfbhjhfkef ejfheuhfker fnerbfuiefr eferhfirehfn</p>
          </div>
          <div className="l-b-r-buttons">
            <button>Sign Up With Google</button>
            <button>Sign Up With Facebook</button>
          </div>
          <p>OR</p>
          <div className="l-b-r-email">
            <label>Email Address</label>
            <input 
             type="text"
             placeholder="enter email address"
             className={error === "email"?"input-red":"input-normal"} 
             value={credentials.email}
             onChange={(e)=>setCredentials({...credentials,email:e.target.value})}
             ></input>
             {error === "email"?<p className="validate-email">please enter valid Email address</p>:""}
          </div>
          <div className="l-b-r-password">
            <label>Password</label>
            <input 
            type="text"
            className={error === "password"?"input-red":"input-normal"} 
            placeholder="enter email password" 
            value={credentials.password}
            onChange={(e)=>setCredentials({...credentials,password:e.target.value})}
            ></input>
             {error === "password"?<p className="validate-email">please enter valid password</p>:""}
          </div>
          <button type="button" className="l-b-r-submit" onClick={()=> SubmitCredentials()}>Submit</button>
        
         
         
        
         
         
        </div>
      </div>
    </div>
  );
}
