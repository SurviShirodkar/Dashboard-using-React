import React ,{useEffect , useContext} from 'react'
import './dashboard.scss'
import DashboardSidebar from './DashboardSidebar/DashboardSidebar'
import DashboardBody from './DashboardBody/DashboardBody'
import { MyContext, MyContextProvider } from './Context/Context'
import { constantarray } from '../../constant'
import { Route, Switch } from 'react-router'
import axios from 'axios'


export default function Dashboard() {
  const term = useContext(MyContext);
  const getInfo = () => { 
    const data = constantarray.users.find( x =>{ return  x.email === localStorage.getItem("email")})
   console.log(data);
   term.updateUserDetails(data);
  };
  const setupParticipant = async() =>{
   
      let res = await axios.get(`https://protected-fjord-14530.herokuapp.com/api/participant`);
      console.log("RESPONSE", res);
      console.log(res.data);
      term.updateParticipantList(res.data);
      

  };
  const setupEvent = async() =>{
      let res = await axios.get(`https://protected-fjord-14530.herokuapp.com/api/events`);
      console.log("RESPONSE",res);
      console.log(res.data);
     term.updateEventList(res.data);
  };
  useEffect(() => {
    getInfo();
    setupParticipant();
    setupEvent();
    },[]);
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
