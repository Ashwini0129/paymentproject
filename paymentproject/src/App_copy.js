import React,{useState} from 'react'
import './App.css';
import Login from './components/Login';
//import SignUp from './components/SignUp';



function App() {
  const adminUser={
    email:"admin@.com",
    password: "admin12"
  }
  const [user,setUser] =useState({name:"", email:""});
  const [error,setError] = useState("");
    
  const Login=details=>{
    console.log(details);
  }
  const Logout = () =>{
    
    console.log("Logout");
  }
  
  
  return(
    <div className="App">
      {(user.email!="")?(
        <div className="welcome">
          <button>Logout</button>
          </div>
      )
    :(
      <Login/>
    )}
      
    
  </div>
  )}

  

export default App;
