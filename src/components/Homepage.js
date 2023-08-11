import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import 'react-slideshow-image/dist/styles.css'
import { Slide } from "react-slideshow-image";
const spanStyle = {
  color: 'white',
    fontSize: '30px',
    marginBottom: '20px',
    padding: '10px',
    width: '54%',
	lineHeight: '65px',
	fontWeight: '600',
    letterSpacing: '2px',
	textTransform: 'uppercase',
  textAlign: 'center'
    
  }
  
  const divStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundSize: 'cover',
    height: '600px'
  }

  const slideImages = [
    {
      url: 'images/slider5.jpg',
      caption: ' Now Buy Groceries Online With Us'
    },
    {
      url: 'images/slider6.jpg',
      caption: 'Avail Great Discounts on Electronic Products'
    },
    {
      url: 'images/slider4.png',
      caption: ''
    },
  ];

  const divStyle2 = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundSize: 'cover',
    height: '450px'
  }

  const slideImages2 = [
    {
      url: 'images/slider7.jpg',
      caption: 'slide 1'
    },
    {
      url: 'images/b3.jpg',
      caption: 'Slide 2'
    },
    {
      url: 'images/p2.jpg',
      caption: 'Slide 3'
    },
  ];
var Homepage=()=>
{
	const [prodsdata,setprodsdata] = useState([]);
    useEffect(()=>
    {
        fetchprods();
    },[])
    var fetchprods=async()=>
    {
		try 
		{
			const resp = await fetch(`http://localhost:9000/api/fetchlatestproducts`)
			if(resp.ok)
			{
				var result = await resp.json(); 
				if(result.statuscode===0)
				{
					toast.error("No products found");
					setprodsdata([]);
				}
				else if(result.statuscode===1)
				{
					setprodsdata(result.prodsdata)
				}
			}
			else
			{
				toast.error("Error Occured")
			}
		}
		catch (err) 
		{
			toast.error(err);
		}
    }

    useEffect(()=>
    {
        fetchprods();
    },[])
    var fetchprods=async()=>
    {
		try 
		{
			const resp = await fetch(`http://localhost:9000/api/fetchfeaturedproducts`)
			if(resp.ok)
			{
				var result = await resp.json(); 
				if(result.statuscode===0)
				{
					toast.error("No products found");
					setprodsdata([]);
				}
				else if(result.statuscode===1)
				{
					setprodsdata(result.prodsdata)
				}
			}
			else
			{
				toast.error("Error Occured")
			}
		}
		catch (err) 
		{
			toast.error(err);
		}
    }
	return(
    <>

<div className="slide-container">
        <Slide>
         {slideImages.map((slideImage, index)=> (
            <div key={index}>
              <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}>
              <span style={spanStyle}>{slideImage.caption}</span>
              
              </div>
            </div>
          ))} 
        </Slide>
      </div>
	
	<div className="login">
		<div className="container">
			<h2>Welcome to E-Commerce Website</h2>	
		</div>
	</div>
	{/* <div className="login">
		<div className="container">
        {
            prodsdata.length>0?
            <>
            <h2>Latest Products</h2><br/>
            {
            prodsdata.map((data,i)=>
            <div key={i} className="col-md-4 top_brand_left">
                <div className="hover14 column">
                    <div className="agile_top_brand_left_grid">
                        <div className="agile_top_brand_left_grid1">
                            <figure>
                                <div className="snipcart-item block" >
                                    <div className="snipcart-thumb">
                                        <Link  to={`/productdetails?pid=${data._id}`}>
                                        <img title=" " alt=" " height='100' src={`uploads/${data.prodpic}`}/>
                                        <p>{data.prodname}</p>
                                        </Link>	
                                    </div>
                                </div>
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
            )
            }
            </>:<h2>No products found</h2>
        }
       
		</div>
	</div> */}


  <div className="login">
		<div className="container">
        {
            prodsdata.length>0?
            <>
            <h2>Featured Products</h2><br/>
            {
            prodsdata.map((data,i)=>
            <div key={i} className="col-md-4 top_brand_left">
                <div className="hover14 column">
                    <div className="agile_top_brand_left_grid">
                        <div className="agile_top_brand_left_grid1">
                            <figure>
                                <div className="snipcart-item block" >
                                    <div className="snipcart-thumb">
                                        <Link  to={`/productdetails?pid=${data._id}`}>
                                        <img title=" " alt=" " height='100' src={`uploads/${data.prodpic}`}/>
                                        <p>{data.prodname}</p>
                                        </Link>	
                                    </div>
                                </div>
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
            )
            }
            </>:<h2>No products found</h2>
        }
       
		</div>
	</div>

  <div className="slide-container">
        <Slide>
         {slideImages2.map((slideImage, index)=> (
            <div key={index}>
              <div style={{ ...divStyle2, 'backgroundImage': `url(${slideImage.url})` }}>
              
              </div>
            </div>
          ))} 
        </Slide>
      </div>
    </>
	)
}
export default Homepage;