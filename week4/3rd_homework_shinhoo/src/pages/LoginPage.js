import { React } from "react";
import { useNavigate } from "react-router-dom";
import "./styles/LoginPage.css";
import { useLocalStorage } from "../service/AuthService";

function Login() {
    const navigate = useNavigate();
    useLocalStorage("auth", true);
    function submitLoginHandler() {
        console.log("clicked");
        
        if (true) {
            navigate("/0");
        } else {

        }
    }
    return (
        <div className="login-page">
            <div className='textbox'>
        <h1> Facebook </h1>
        <h2> Connect with friends and the world around you on Facebook. </h2>
        <div className='container'>
          <div className='form'>
            <input type="text" id="name" name="name" placeholder='Email or phone number' />
            <input type="password" id="password" name="password" placeholder='Password' />
            <button name='login' id="login" onClick={submitLoginHandler}>Login</button>
            <button name='password' id="password">Forgot Password?</button>
            <hr />
            <button name='new' id='new'>Create new account</button>
          </div>
        </div>
        <p><b>Create a Page</b> for a celebrity, brand or business.</p>
      </div>
        </div>
    );


}
export default Login;