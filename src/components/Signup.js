import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
var Signup=()=>
{
	const [name,setname] = useState();
	const [phone,setphone] = useState();
	const [username,setusername] = useState();
	const [password,setpassword] = useState();
	const [cpassword,setcpassword] = useState();
	const [msg,setmsg] = useState();
	const navigate = useNavigate();
	const [errors, setErrors] = useState({});

	const validateForm = () => {
		const errors = {};

		if (name.length < 3) {
			errors.name = 'Name must be at least 3 characters long';
		}

		if (!/^\d{10}$/.test(phone)) {
			errors.phone = 'Phone must be a 10-digit number';
		}

		if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(username)) {
			errors.email = 'Invalid email format';
		}

		if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{6,}/.test(password)) {
			errors.password =
				'Password must contain at least 1 uppercase, 1 number, 1 special character, and be at least 6 characters long';
		}

		if (password !== cpassword) {
			errors.confirmPassword = 'Passwords do not match';
		}

		setErrors(errors);

		return Object.keys(errors).length !== 0 ? false : true;
	};

	var onsignup = async () => {
		if (validateForm() === true) {
			if (password === cpassword) {
				const signupdata = { name, phone, username, password, utype: "normal" };
				try {
					const resp = await fetch("http://localhost:9000/api/register",
						{
							method: "post",
							body: JSON.stringify(signupdata),
							headers:
							{
								'Content-type': 'application/json; charset=UTF-8',
							}
						})
					if (resp.ok) {
						var result = await resp.json(); //result={msg:"Signup Successfull"}
						if (result.statuscode === 1) {
							navigate("/thanks");
						}
						else if (result.statuscode === 0) {
							setmsg("Error while signing up, try again");
						}
					}
					else {
						setmsg("Error Occured")
					}
				}
				catch (err) {
					setmsg(err);
				}
			}
			else {
				setmsg("Password and confirm password does not match");
			}
		}

	}


	return(
    <>
    <div className="breadcrumbs">
		<div className="container">
			<ol className="breadcrumb breadcrumb1 animated wow slideInLeft" data-wow-delay=".5s">
				<li><a href="index.html"><span className="glyphicon glyphicon-home" aria-hidden="true"></span>Home</a></li>
				<li className="active">Register Page</li>
			</ol>
		</div>
	</div>

	<div className="register">
				<div className="container">
					<h2>Register Here</h2>
					<div className="login-form-grids">
						<h5>profile information</h5>
						<form name="form1">
							<input type="text" name="pname" placeholder="Name..." required=" " onChange={(e) => setname(e.target.value)} />

							{errors.name?<span>{errors.name}</span>:null}

							<input type="text" name="phone" placeholder="Phone..." required=" " onChange={(e) => setphone(e.target.value)} />

							{errors.phone?<span>{errors.phone}</span>:null}

							<h6>Login information</h6>

							<input type="email" name="uname" placeholder="Email Address(Username)" required=" " onChange={(e) => setusername(e.target.value)} />

							{errors.email?<span>{errors.email}</span>:null}

							<input type="password" name="pass" placeholder="Password" required=" " onChange={(e) => setpassword(e.target.value)} />
							{errors.password?<span>{errors.password}</span>:null}

							<input type="password" name="cpass" placeholder="Password Confirmation" required=" " onChange={(e) => setcpassword(e.target.value)} />

							{errors.confirmPassword?<span>{errors.confirmPassword}</span>:null}

							<div className="register-check-box">
								<div className="check">
									<label className="checkbox"><input type="checkbox" name="checkbox" /><i> </i>I accept the terms and conditions</label>
								</div>
							</div><br />
							<input type="button" name="btn"  className="btn btn-primary" onClick={onsignup} value="Register" /><br />
							{msg}
						</form>
					</div>
					<div className="register-home">
						<Link to="/homepage">Home</Link>
					</div>
				</div>
			</div>
		</>)
}
export default Signup;