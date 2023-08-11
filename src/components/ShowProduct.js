import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";

var ShowProduct=()=>
{
    const [prodlist,setprodlist] = useState([]);
    const [params] = useSearchParams();
    const scid = params.get("subcatid");

    useEffect(()=>
    {
        fetchprods();
    },[])
    var fetchprods=async()=>
    {
        if(scid!==undefined)
        {
           
            try 
            {
                const resp = await fetch(`http://localhost:9000/api/fetchprodsbysubcatid/${scid}`)
                if(resp.ok)
                {
                    var result = await resp.json(); 
                    if(result.statuscode===0)
                    {
                        toast.error("No Products found");
                        setprodlist([]);
                    }
                    else if(result.statuscode===1)
                    {
                        setprodlist(result.prodsdata)
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
    }
	return(
    <>
	<div className="breadcrumbs">
		<div className="container">
			<ol className="breadcrumb breadcrumb1 animated wow slideInLeft" data-wow-delay=".5s">
				<li><a href="index.html"><span className="glyphicon glyphicon-home" aria-hidden="true"></span>Home</a></li>
				<li className="active">Products</li>
			</ol>
		</div>
	</div>
	<div className="login">
		<div className="container">
            {
                prodlist.length>0?
                <>
                <h2> Products</h2> <br/>
                {
                    prodlist.map((data,i)=>
               <div key={i} class="col-md-4 top_brand_left">
									<div class="hover14 column">
										<div class="agile_top_brand_left_grid">
											<div class="agile_top_brand_left_grid1">
												<figure>
													<div class="snipcart-item block" >
														<div class="snipcart-thumb">
                                                        <Link to={`/productdetails?pid=${data._id}`}>
                                        <img title=" " alt=" " height='125' src={`uploads/${data.prodpic}`}/>	
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
                            </>:<h2>No Products found</h2>
                        }
		</div>
	</div>
    </>
	)
}
export default ShowProduct;