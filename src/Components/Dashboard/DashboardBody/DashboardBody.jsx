import React, { useContext , useEffect } from 'react'
import { MyContext } from '../Context/Context'
import './dashboardbody.scss'
import Cancel from './cancel.png'
import logout from './logout.png'
import { Redirect, Route, Switch } from 'react-router'
import AddParticipant from './DashboardBodyComponents/AddParticipant/AddParticipant'
import ViewEvents from './DashboardBodyComponents/ViewEvents/ViewEvents'
import ViewParticipant from './DashboardBodyComponents/ViewParticipant/ViewParticipant'
import AddEvents from './DashboardBodyComponents/AddEvents/AddEvents'
import axios from 'axios'
import Profile from './DashboardBodyComponents/Profile/Profile'


export default function DashboardBody() {
   const mood = useContext(MyContext);
  
  let email= localStorage.getItem("email");
  const [load,setLoad]= React.useState();
  
  const getDashboardBodyDetails = async()=>{
  let store = localStorage.getItem("email");
  console.log(store);
  setLoad(true);
  let res = await axios.get(`https://protected-fjord-14530.herokuapp.com/api/users/${store}`);
  setLoad(false);
  console.log(res); 
  mood.updateUserDetails(res.data.user);
 
 
  }
  useEffect(() => {
   getDashboardBodyDetails();
 
  }, [])
   
  
    return ( load?<h6>Loading</h6> :
        <div className="dashboardbody-main">
        {/* //   <h2>My name is : {mood.first}</h2>
        //    <button onClick={() => mood.updateFirst("Shaktiman")} >Click the button to reveal</button> */}
        <div className="dash-header">
          <div className="dash-head-email">
              <img src="" className="cancel"></img>
              <p className="email">{mood?.userDetails?.email}</p>
          </div>
             <img src={logout} className="logout" height="10px;"></img>
          </div>
        <div className="dash-body">
          <Switch>
         
          <Route path='/dashboard/addParticipant' component={AddParticipant}></Route>
          <Route path='/dashboard/viewEvents' component={ViewEvents}></Route>
          <Route path='/dashboard/viewParticipant' component={ViewParticipant}></Route>
          <Route path="/dashboard/addEvents" component={AddEvents}></Route>
          <Route path="/dashboard/profile" component={Profile}></Route>
          <Route path="/dashboard/" component={AddParticipant}></Route>
         
          <Redirect to='/dashboard/viewParticipant'></Redirect>
          </Switch>
          
        </div>
        </div>
    )
}
