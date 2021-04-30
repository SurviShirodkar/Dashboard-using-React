
import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { MyContextProvider } from './Components/Dashboard/Context/Context';
import Dashboard from './Components/Dashboard/Dashboard';
import Login from './Components/Dashboard/Login';
import SignUp from './Components/Dashboard/SignUp/SignUp';



function App() {
  return (
    <BrowserRouter>
    <MyContextProvider>
    <div className="App">
      <Switch>
        <Route path='/login' component = {Login}></Route>
        <Route path="/dashboard" component ={Dashboard}></Route>
        <Route path="/signup" component ={SignUp}></Route>
        <Route path="/" component ={Login}></Route>
   
      </Switch>
    
    </div>
    </MyContextProvider>
    </BrowserRouter>
  );
}

export default App;
