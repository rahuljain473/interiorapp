import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import UserContext from "../UserContext";
var Header =()=> {
	const [term,setterm] = useState();
	const {user,setUser}= useContext(UserContext);
	const navigate = useNavigate();
	var onlogout=()=>
	{
		setUser(null);
		sessionStorage.clear();
		navigate("/login");
	}
	var oncart=()=>
	{
		navigate("/cart");
	}

	var onsearch=()=>
	{
		navigate({
            pathname: '/searchproducts',
            search: `?query=${term}`,
          });
	}
    return(
    
    <>
            <div className="agileits_header">
		<div className="container">
			<div className="w3l_offers">
			{
				user?
				<p>
					<span> <b>Welcome {user.name} </b></span>
				</p>:
				<p>
					<span>Welcome Guest</span>
				</p>
			} 
			</div>
			
			<div className="agile-login">
				<ul>
				{
					user?
					<>
						<li><Link to="/changepassword"> Change Password </Link></li>
						<li><Link to="/userorders"> My Orders </Link></li>
						<li><button className="btn btn-primary" onClick={onlogout}> Logout </button></li>
					</>:
					<>
						<li><Link to="/signup"> Create Account </Link></li>
						<li><Link to="/login">Login</Link></li>
					</>
				}
				</ul>
			</div>
			<div className="product_list_header">  
			{
					user?
					<>
						<input type="hidden" name="cmd" value="_cart"/>
						<input type="hidden" name="display" value="1"/>
						<button className="w3view-cart" onClick={oncart} name="submit" value=""><i className="fa fa-cart-arrow-down" aria-hidden="true"></i></button>
					  </>: null
}
			</div>
			<div className="clearfix"> </div>
		</div>
	</div>

	<div className="logo_products">
		<div className="container">
		<div className="w3ls_logo_products_left1">
				<ul className="phone_email">
					<li><i className="fa fa-phone" aria-hidden="true"></i>Order online or call us : (+0123) 234 567</li>
				</ul>
				
			</div>
			<div className="w3ls_logo_products_left">
				<h1><Link to="/">Hyper Mart</Link></h1>
			</div>
			<div className="w3l_search">
							<input onChange={(e)=>setterm(e.target.value)} type="search" name="Search" placeholder="Search for a Product..." required="" />
							<button type="submit" onClick={onsearch} className="btn btn-default search" aria-label="Left Align">
								<i className="fa fa-search" aria-hidden="true"> </i>
							</button>
							<div className="clearfix"></div>
					</div>

					<div className="clearfix"> </div>
				</div>
			</div>
	<div className="navigation-agileits">
		<div className="container">
			<nav className="navbar navbar-default">
							<div className="navbar-header nav_2">
								<button type="button" className="navbar-toggle collapsed navbar-toggle1" data-toggle="collapse" data-target="#bs-megadropdown-tabs">
									<span className="sr-only">Toggle navigation</span>
									<span className="icon-bar"></span>
									<span className="icon-bar"></span>
									<span className="icon-bar"></span>
								</button>
							</div> 
							<div className="collapse navbar-collapse" id="bs-megadropdown-tabs">
								<ul className="nav navbar-nav">
									<li><Link to="/">Home</Link></li>	
									<li><Link to="/categories">Products</Link></li>	
									<li><Link to="/contactus">Contact</Link></li>
									<li><Link to="/aboutus">About Us</Link></li>
								</ul>
							</div>
							</nav>
			</div>
		</div>
        </> )
}
export default Header;