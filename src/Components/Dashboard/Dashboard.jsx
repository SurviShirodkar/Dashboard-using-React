import React from 'react'

import './dashboard.scss'
import DashboardSidebar from './DashboardSidebar/DashboardSidebar'
import DashboardBody from './DashboardBody/DashboardBody'
import { MyContextProvider } from './Context/Context'

export default function Dashboard() {
    return (
       <MyContextProvider>
        <div className="dashboard-main">
            
            <div className="dashboard-sidebar">
              <DashboardSidebar/>
            </div>
            <div className="dashboard-body">
              <DashboardBody/>
            </div>
        </div>
        </MyContextProvider>
    )
}
