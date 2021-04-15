
import { Route, Switch } from 'react-router';
import './App.css';
import Dashboard from './Components/Dashboard/Dashboard';
import Login from './Components/Dashboard/Login';



function App() {
  return (
    
    <div className="App">
      <Switch>
        <Route path='/login' component = {Login}></Route>
        <Route path="/dashboard" component ={Dashboard}></Route>
        <Route path="/" component ={Login}></Route>
   
      </Switch>
    
    </div>
  );
}

export default App;
