import React from 'react';
import  './login.css';
import { Link} from 'react-router-dom';

function Login()
{
    // const change=()=>{
    //    return <Link to="/profile"/>
    // };
  return (
      <div className="login">
        <div className="form-structor">
        <div className="signup">
          <h2 className="form-title" id="signup">TRAP DATE</h2>
          <div className="form-holder">
            <input type="text" className="input" placeholder="Name" />
            <input type="email" className="input" placeholder="Email" />
            <input type="password" className="input" placeholder="Password" />
          </div>
          <Link to="/profile" className="link"> <button className="submit-btn">LOGIN</button></Link>
          
        </div>
       
      </div>
    </div>
    );
}

export default Login;