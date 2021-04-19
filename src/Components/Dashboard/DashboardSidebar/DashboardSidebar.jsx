import React from 'react'
import './dashboardsidebar.scss'
import ViewImage from './view.png'
import AddImage from './add.png'

export default function DashboardSidebar() {
    return (
        <div className="sidebar">
          <h4 className="sidebar-h4">Event Manager</h4>
          <p className="sidebar-menu">Menu</p>
          {
            sidebarlist.map(obj=>
            <div className="menu">
                <img src={obj.icon} alt="image" className="menu-image"></img>
                <h5 className="sidebar-menu-name">{obj.listname}</h5>
            </div>)
           
             }  
        </div>
    )
}
const sidebarlist=[
    {listname :"View Participant", id:"viewparticipant", icon:AddImage},
    {listname :"Add Event", id:"viewparticipant", icon:ViewImage},
    {listname :"Add Participant", id:"viewparticipant", icon:AddImage},
    {listname :"view Events", id:"viewparticipant", icon:ViewImage},
    {listname :"Settings", id:"viewparticipant", icon:AddImage},
]