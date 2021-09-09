
import React , {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import Swal from "sweetalert2";






const LoginForm = ({ isShowLogin }) => {
    const [email, setEmail]=useState("");
    const [password, setPassword]=useState("");
    const history=useHistory();
    useEffect(()=>{
        if(localStorage.getItem("user-info")){
            history.push("/")
        }
    },[])

    async function login() {
    
        let item={email, password}
       
        let result= await fetch ("http://localhost:8000/api/login",
        {
            method:'POST', 
            headers:{
                "Content-Type":"application/json",
                "Accept":"application/json"
            },
            body:JSON.stringify(item)
        });
        result= await result.json();
      
        if(result.success){
        localStorage.setItem("user-info", JSON.stringify(result))
        
        history.push("/");
        }
        else{
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Wrong Username or Passworlogind!   Try Again',
               
                
              })
        }
       
    }










  return (
    <div >
      <div className="login-form">
        <div className="form-box solid">
          <form>
            <h1 className="login-text">Sign In</h1>
            <label>Email</label>
            <br></br>
            <input style={{color:"white"}}  type="text" name="email" className="login-box" onChange={(e)=>setEmail(e.target.value)}/>
            <br></br>
            <label>Password</label>
            <br></br>
            <input style={{color:"white"}} type="password" name="password" className="login-box" onChange={(e)=>setPassword(e.target.value)}/>
            <br></br>
            <input type="button" value="LOGIN" onClick={login} className="login-btn" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
