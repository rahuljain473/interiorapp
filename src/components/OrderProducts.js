import { useEffect, useState } from "react"
import { Link, useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";
var OrderProducts=()=>
{
   
    const [orderitems,setorderitems]= useState([]);
    const [params]= useSearchParams();
    const orderid= params.get("oid")


useEffect(()=>
{
    fetchitems();
},[])

var fetchitems= async ()=>
{
try
{
    const resp= await fetch (`http://localhost:9000/api/fetchorderitems/${orderid}`)
    if(resp.ok)
    {
        var result= await resp.json();
        if(result.statuscode===0)
        {
           toast.error("No items found");
        }
        else if (result.statuscode===1)
        {
            setorderitems(result.orderitems);
        }

    }
    else 
    {
        toast.error("error occured")
    }
}
catch(err)
{
    toast.error(err);
}


}
return(
    <>
    <div className="breadcrumbs">
		<div className="container">
			<ol className="breadcrumb breadcrumb1 animated wow slideInLeft" data-wow-delay=".5s">
				<li><Link to="/homepage"><span className="glyphicon glyphicon-home" aria-hidden="true"></span>Home</Link></li>
				<li className="active"> Order Items</li>
			</ol>
		</div>
	</div>

	<div className="login">
		<div className="container">
            {
        orderitems.length >0?
        <>
			<h2> Order Items</h2> <br/>
            
                
                <table className="timetable_sub">
                    <tbody>
                        <tr>
                            <th>Picture</th>
                            <th>Name</th>
                            <th>Rate</th>
                            <th>Quantity</th>
                            <th>Total Cost</th>
                        </tr>
                        {
                           orderitems.map((data,i)=>
<tr key={i}>
    <td> <img height='75' src={`/uploads/${data.prodpic}`} /> </td>
    <td>{data.name}</td>
    <td>{data.rate}</td>
    <td>{data.qty}</td>
    <td>{data.tcost}</td>
</tr>
                            )
                        }
                    </tbody>
                </table>
                </>: <h2> No items found </h2>
            }
            

</div>
</div>
            </>
            )

}

export default OrderProducts;