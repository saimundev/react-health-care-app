import React, { useState } from 'react'
import "./Login.css"
import logo from "../../images/logo.png"
import { Link } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'

const Login = () => {
    const [email,setEmail] =useState("");
    const [password,setPassword] =useState("");
   const {signInGoogle,signInGithub,signInFacebook,userLogin} =  useAuth()

   const handleSubmitLogin = (e)=>{
        e.preventDefault();
        userLogin(email,password)
   }
    return (
        <div>
            <div className="regustion">
                <div className="regustion__logo">
                    <img src={logo} alt=""/>
                    <h4 className="regustion__logo-text">MediCare</h4>
                </div>
                <form onSubmit={handleSubmitLogin}>
                    <input type="email" name="" id="" placeholder="Enter Your Email" className="input__fild" onBlur={(e)=>setEmail(e.target.value)}/>
                    <input type="password" name="" id="" placeholder="Enter Your Password" className="input__fild" onBlur={(e)=>setPassword(e.target.value)}/>
                    <button type="submit" className="reugstion__btn">Login</button>
                </form>
                <div className="text-center">
                    <h6 className="regustion__or">OR</h6>
                </div>
                <div className="social__icon d-flex justify-content-center">
                <img src="https://img.icons8.com/color/50/000000/google-logo.png" style={{cursor:"pointer"}}onClick={signInGoogle}/>
                <img src="https://img.icons8.com/fluency/48/000000/facebook.png" className="mx-3" style={{cursor:"pointer"}} onClick={signInGithub} />
                <img src="https://img.icons8.com/ios-filled/50/000000/github.png" style={{cursor:"pointer"}}onClick={signInFacebook}/>
                </div>
                <Link to="/registion" className="regustin__account">Go Back Regustion</Link>
            </div>
           
        </div>
    )
}

export default Login
