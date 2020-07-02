import React,{useState} from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import {ToastContainer, toast} from "react-toastify"
import 'react-toastify/dist/ReactToastify.min.css'
import firebase from "firebase/app"
import 'firebase/auth'
import {BrowserRouter as Router, Switch,Route,Link} from 'react-router-dom'
import Home from './Pages/Home'
import SignOut from './Pages/SignOut'
import SignIn from './Pages/SignIn'
import notFound from './Pages/notFount'
import './App.css';
import Footer from './Layout/Footer';
import NavBar from "./Layout/NavBar"
import {UserContext} from "./Context/UserContext"
import firebaseConfig from "./Config/firebaseConfig"



//init firebase
firebase.initializeApp(firebaseConfig)
function App() {
  const [user,setUser]=useState(null);
  return (
    <Router>
    <div className="App">
    <ToastContainer/>
    <UserContext.Provider value={{user,setUser}}>
    
    <NavBar/>
    <Switch>
    <Route exact path="/" component={Home}/>
    <Route  exact path="/signout" component={SignOut}/>
    <Route  exact path="/SignIn" component={SignIn}/>
    <Route  exact path="*" component={notFound}/>
    </Switch>
    
    <Footer/>
    </UserContext.Provider>
    


        </div>
        </Router>
        
  );
}

export default App;
