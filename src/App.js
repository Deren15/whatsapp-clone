import React from 'react'
import './App.css';
import Login from './Components/Login/Login'
import Sidebar from './Components/Sidebar/Sidebar';
import Chat from './Components/Chat/Chat'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useStateValue } from './StateProvider';

function App() {

  const [{ user }, dispatch] = useStateValue()

  return (
    // BEM naming convention
    <div className="app">

      {!user ? (
        <Login />
      ): (
        <div className="app__body">

        <Router>
            <Sidebar />

          <Switch>
            
            <Route path="/rooms/:roomId" >
              <Chat />
            </Route>
            
            <Route path="/">
              <Chat />
            </Route>

          </Switch>
        </Router>  
        
        </div>
      )
      } 

    </div>
  );
}

export default App;
