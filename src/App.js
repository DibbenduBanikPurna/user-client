import React, { createContext, useEffect, useState } from 'react';
import './App.css';
import AddFriend from './Components/AddFriend/AddFriend';

import Users from './Components/Users/Users';
import { BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import LogIn from './Components/LogIn/LogIn';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Form from './Components/Form/Form';


export const userContext=createContext()
function App() {
  const [loggedInUser,setLoggedInUser]=useState('')
  const [info,setInfo]=useState([])
  const [addData,setAddData]=useState([])
 
  const handleAdd=(id)=>{
    const all=[...addData,id]
    setAddData(all)
  }
  useEffect(()=>{
    fetch('https://whispering-scrubland-51098.herokuapp.com/member')
    .then(res=>res.json())
    .then(data=>setInfo(data))
  },[])
 
  return (
    <Router>
      
         <Navbar/>
        
       
           <userContext.Provider value={[loggedInUser,setLoggedInUser]} >
     <Switch>
       <Route exact path="/"> <Home/> </Route>
       <Route path="/pubgplayer"> 
       <Users handleAdd={handleAdd} data={info}/>
       </Route>
      
      <Route path="/playerinfo">
      <AddFriend addData={addData}/>
      </Route>  
      <Route path="/login"> <LogIn/></Route>
      <PrivateRoute path="/form"><Form/> </PrivateRoute>
     
     </Switch>
   
     </userContext.Provider>
   
   
    </Router>
   
  );
}

export default App;
