import React from 'react'
import './dashboardsidebar.scss'
import ViewImage from './view.png'
import AddImage from './add.png'
import { Link } from 'react-router-dom'
import ViewParticipant from '../DashboardBody/DashboardBodyComponents/ViewParticipant/ViewParticipant'

export default function DashboardSidebar() {
    return (
        <div className="sidebar">
          <h4 className="sidebar-h4">Event Manager</h4>
          <p className="sidebar-menu">Menu</p>
          {
            sidebarlist.map(obj=>
                <Link  to={`/${obj.route}`}  >
            <div className="menu">
                <img src={obj.icon} alt="image" className="menu-image"></img>
               <h5 className="sidebar-menu-name">{obj.listname}</h5>
            </div></Link>)
           
             }  
        </div>
    )
}
const sidebarlist=[
    {listname :"View Participant", id:"viewparticipant", icon:AddImage, route:"dashboard/viewParticipant"},
    {listname :"Add Event", id:"viewparticipant", icon:ViewImage , route:"dashboard/viewEvents"},
    {listname :"Add Participant", id:"viewparticipant", icon:AddImage, route:"dashboard/addParticipant"},
    {listname :"view Events", id:"viewparticipant", icon:ViewImage, route:"dashboard/viewEvents"},
    {listname :"Settings", id:"viewparticipant", icon:AddImage, route:"dashboard/settings"},
]