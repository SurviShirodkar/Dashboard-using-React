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

export default function DashboardBody() {
   const mood = useContext(MyContext);
  let email= localStorage.getItem("email");
  
   
  
    return (
        <div className="dashboardbody-main">
        {/* //   <h2>My name is : {mood.first}</h2>
        //    <button onClick={() => mood.updateFirst("Shaktiman")} >Click the button to reveal</button> */}
        <div className="dash-header">
          <div className="dash-head-email">
              <img src={mood.userDetails.image} className="cancel"></img>
              <p className="email">{mood.userDetails.firstname}</p>
          </div>
             <img src={logout} className="logout"></img>
          </div>
        <div className="dash-body">
          <Switch>
          <Route path='/addparticipant' component={AddParticipant}></Route>
          <Route path='/viewevents' component={ViewEvents}></Route>
          <Route path='/viewparticipant' component={ViewParticipant}></Route>
          <Route path="/addevents" component={AddEvents}></Route>
          <Route path="/" component={AddParticipant}></Route>
          <Redirect to='/viewparticipant'></Redirect>
          </Switch>
          
        </div>
        </div>
    )
}
