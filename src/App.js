
import { Route, Switch } from 'react-router';
import './App.css';
import DashboardBody from './Components/DashboardBody';
import Login from './Components/Login';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/login' component = {Login}></Route>
        <Route path="/dashboardBody" component ={DashboardBody}></Route>
        <Route path="/" component ={Login}></Route>
   
      </Switch>
    
    </div>
  );
}

export default App;
