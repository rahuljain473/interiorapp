import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import UserContext from "../UserContext";
import { toast } from "react-toastify";
import ReCAPTCHA from "react-google-recaptcha";

var captcha=(value)=> 
{
	console.log("Captcha value:", value);
  }

var Login=()=>
{
	const [ uname,setuname]= useState();
	const [ pass,setpass]= useState();
	const [ msg,setmsg]= useState();
	const navigate= useNavigate();
	const {setUser}= useContext(UserContext);

	var onlogin= async ()=>
	{
		var logindata = {uname,pass}
		try 
			{
				const resp = await fetch("http://localhost:9000/api/login",
				{
					method:"post",
					body: JSON.stringify(logindata),
					headers:
					{
					'Content-type': 'application/json; charset=UTF-8',
					}
				})
				if(resp.ok)
				{
					var result = await resp.json(); //result={msg:"Signup Successfull"}
					if(result.statuscode===1)
					{
						setmsg("");
						setUser(result.membsdata);
						sessionStorage.setItem("userinfo", JSON.stringify(result.membsdata));
						// if(result.membdata.isActive===true)
					// {
						if(result.membsdata.usertype==="admin")
						{
						navigate("/adminhome");
						}
						else{
							navigate("/homepage");
						}
					}
					// else
					// {
					// 	toast.error("Please activate your account to login");
					// }
				// }
					else if(result.statuscode===0)
					{
						toast.error("incorrect username/password");
					}
				}
				else
				{
					setmsg("Error Occured")
				}
			}
			catch (err) 
			{
				setmsg(err);
			}
		}
		
	return(
    <>
    <div className="breadcrumbs">
		<div className="container">
			<ol className="breadcrumb breadcrumb1 animated wow slideInLeft" data-wow-delay=".5s">
				<li><a href="index.html"><span className="glyphicon glyphicon-home" aria-hidden="true"></span>Home</a></li>
				<li className="active">Login </li>
			</ol>
		</div>
	</div>

	<div className="login">
		<div className="container">
			<h2>Login Form</h2>
		
			<div className="login-form-grids animated wow slideInUp" data-wow-delay=".5s">
				<form>
					<input type="email" placeholder="Email Address" name="un" onChange={(e)=>setuname(e.target.value)} required=" "/>
					<input type="password" placeholder="Password" name="pass" onChange={(e)=>setpass(e.target.value)} required=" "/>
					<div className="forgot">
						<Link to="/forgotpassword">Forgot Password?</Link>
					</div>
 <ReCAPTCHA sitekey="6Ldupo4mAAAAABRH7YI6wy7g8NfEfDniaHKWENl-" onChange={captcha}/> <br/>
					<input type="button" className="btn btn-primary" onClick={onlogin} value="Login"/> <br/> <br/>
					{msg}
				</form>
			</div>
			<h4>For New People</h4>
			<p><a href="registered.html">Register Here</a> (Or) go back to <a href="index.html">Home<span className="glyphicon glyphicon-menu-right" aria-hidden="true"></span></a></p>
			
		</div>
	</div>
	
    </>)
}
export default Login;