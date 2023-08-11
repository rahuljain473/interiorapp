import { Link } from "react-router-dom";

var Footer =()=> {
    return (
        <>

<div className="footer">
		<div className="container">
			<div className="w3_footer_grids">
				<div className="col-md-3 w3_footer_grid">
					<h3>Contact</h3>
					
					<ul className="address">
						<li><i className="glyphicon glyphicon-map-marker" aria-hidden="true"></i>1234k Avenue, 4th block, <span> Bangalore.</span></li>
						<li><i className="glyphicon glyphicon-envelope" aria-hidden="true"></i><a href="mailto:info@example.com">info@example.com</a></li>
						<li><i className="glyphicon glyphicon-earphone" aria-hidden="true"></i>+1234 567 567</li>
					</ul>
				</div>
				<div className="col-md-3 w3_footer_grid">
					<h3>Information</h3>
					<ul className="info"> 
						<li><i className="fa fa-arrow-right" aria-hidden="true"></i><Link to="/aboutus">About Us</Link></li>
						<li><i className="fa fa-arrow-right" aria-hidden="true"></i><Link to="/contactus">Contact Us</Link></li>
						{/* <li><i className="fa fa-arrow-right" aria-hidden="true"></i><a href="short-codes.html">Short Codes</a></li>
						<li><i className="fa fa-arrow-right" aria-hidden="true"></i><a href="faq.html">FAQ's</a></li> */}
						<li><i className="fa fa-arrow-right" aria-hidden="true"></i><Link to="/products">Special Products</Link></li>
					</ul>
				</div>
				<div className="col-md-3 w3_footer_grid">
					<h3>Category</h3>
					<ul className="info"> 
						<li><i className="fa fa-arrow-right" aria-hidden="true"></i><a href="groceries.html">Groceries</a></li>
						<li><i className="fa fa-arrow-right" aria-hidden="true"></i><a href="household.html">Household</a></li>
						<li><i className="fa fa-arrow-right" aria-hidden="true"></i><a href="personalcare.html">Personal Care</a></li>
						<li><i className="fa fa-arrow-right" aria-hidden="true"></i><a href="packagedfoods.html">Packaged Foods</a></li>
						<li><i className="fa fa-arrow-right" aria-hidden="true"></i><a href="beverages.html">Beverages</a></li>
					</ul>
				</div>
				<div className="col-md-3 w3_footer_grid">
					<h3>Profile</h3>
					<ul className="info"> 
						<li><i className="fa fa-arrow-right" aria-hidden="true"></i><Link to="/categories">Store</Link></li>
						<li><i className="fa fa-arrow-right" aria-hidden="true"></i><Link to="/cart">My Cart</Link></li>
						<li><i className="fa fa-arrow-right" aria-hidden="true"></i><Link to="/login">Login</Link></li>
						<li><i className="fa fa-arrow-right" aria-hidden="true"></i><Link to="/signup">Create Account</Link></li>
					</ul>
				</div>
				<div className="clearfix"> </div>
			</div>
		</div>
		
		<div className="footer-copy">
			
			<div className="container">
				<p>© 2023 Super Market. All rights reserved | Design by <a href="https://www.gtbinstitute.com/"> GTB Infotech</a></p>
			</div>
		</div>
		
	</div>	
	<div className="footer-botm">
			<div className="container">
				<div className="w3layouts-foot">
					<ul>
						<li><a href="#" className="w3_agile_facebook"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
						<li><a href="#" className="agile_twitter"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
						<li><a href="#" className="w3_agile_dribble"><i className="fa fa-dribbble" aria-hidden="true"></i></a></li>
						<li><a href="#" className="w3_agile_vimeo"><i className="fa fa-vimeo" aria-hidden="true"></i></a></li>
					</ul>
				</div>
				<div className="payment-w3ls">	
					<img src="images/card.png" alt=" " className="img-responsive" />
				</div>
				<div className="clearfix"> </div>
			</div>
		</div>
        </>
        )
}

export default Footer;
