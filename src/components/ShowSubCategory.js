import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";

var ShowSubCategory=()=>
{
    const [subcatlist,setsubcatlist] = useState([]);
    const [params] = useSearchParams();
    const cid = params.get("catid");

    useEffect(()=>
    {
        fetchsubcat();
    },[])
    
    var fetchsubcat=async()=>
    {
        if(cid!==undefined)
        {
            setsubcatlist([]);
            try 
            {
                const resp = await fetch(`http://localhost:9000/api/fetchsubcatbycatid?cid=${cid}`)
                if(resp.ok)
                {
                    var result = await resp.json(); 
                    if(result.statuscode===0)
                    {
                        toast.error("No Sub Categories found");
                    }
                    else if(result.statuscode===1)
                    {
                        setsubcatlist(result.subcatdata)
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
				<li className="active">Sub Categories</li>
			</ol>
		</div>
	</div>
	<div className="login">
		<div className="container">
            {
                subcatlist.length>0?
                <>
                <h2> Sub Categories</h2> <br/>
                {
                    subcatlist.map((data,i)=>
               <div key={i} class="col-md-4 top_brand_left">
									<div class="hover14 column">
										<div class="agile_top_brand_left_grid">
											<div class="agile_top_brand_left_grid1">
												<figure>
													<div class="snipcart-item block" >
														<div class="snipcart-thumb">
                                                        <Link to={`/products?subcatid=${data._id}`}>
                                        <img title=" " alt=" " height='125' src={`uploads/${data.subcatpic}`}/>	
															<p>{data.subcatname}</p>
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
                            </>:<h2>No Sub Categories found</h2>
                        }
		</div>
	</div>
    </>
	)
}
export default ShowSubCategory;