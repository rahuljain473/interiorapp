import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

var ShowCategory=()=>
{
    const [catlist,setcatlist] = useState([]);
    useEffect(()=>
    {
        fetchcategories();
    },[])

    var fetchcategories=async ()=>
    {
        try 
        {
            const resp = await fetch("http://localhost:9000/api/fetchallcategories")
            if(resp.ok)
            {
                var result = await resp.json(); 
                if(result.statuscode===0)
                {
                    toast.error("No categories found");
                }
                else if(result.statuscode===1)
                {
                    setcatlist(result.catdata);
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
	<div className="breadcrumbs">
		<div className="container">
			<ol className="breadcrumb breadcrumb1 animated wow slideInLeft" data-wow-delay=".5s">
				<li><a href="index.html"><span className="glyphicon glyphicon-home" aria-hidden="true"></span>Home</a></li>
				<li className="active">Categories</li>
			</ol>
		</div>
	</div>
	<div className="login">
		<div className="container">
            {
                catlist.length>0?
                <>
                <h2> Categories</h2> <br/>
                {
                    catlist.map((data,i)=>
               <div key={i} class="col-md-4 top_brand_left">
									<div class="hover14 column">
										<div class="agile_top_brand_left_grid">
											<div class="agile_top_brand_left_grid1">
												<figure>
													<div class="snipcart-item block" >
														<div class="snipcart-thumb">
                                                        <Link to={`/subcategories?catid=${data._id}`}>
                                        <img title=" " alt=" " height='125' src={`uploads/${data.catpic}`}/>	
															<p>{data.catname}</p>
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
                            </>:<h2>No Categories found</h2>
                        }
		</div>
	</div>
    </>
	)
}
export default ShowCategory;