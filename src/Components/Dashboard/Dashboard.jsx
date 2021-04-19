import React ,{useEffect , useContext} from 'react'
import './dashboard.scss'
import DashboardSidebar from './DashboardSidebar/DashboardSidebar'
import DashboardBody from './DashboardBody/DashboardBody'
import { MyContext, MyContextProvider } from './Context/Context'
import { constantarray } from '../../constant'
import { Route, Switch } from 'react-router'

export default function Dashboard() {
  const term = useContext(MyContext);
  useEffect(() => {
  getInfo();
  
  },[]);
  const getInfo = () => { 
    const data = constantarray.users.find( x =>{ return  x.email === localStorage.getItem("email")})
   console.log(data);
   term.updateUserDetails(data);
  };
    return (
      
        <div className="dashboard-main">
            
            <div className="dashboard-sidebar">
            
              <DashboardSidebar/>
            </div>
            <div className="dashboard-body">
           
              <DashboardBody/>
            
            </div>
        </div>
       
    )
}
