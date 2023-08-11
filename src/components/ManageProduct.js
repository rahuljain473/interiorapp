import { useEffect, useState } from "react";
import { Link, useNavigate} from "react-router-dom";
import { toast } from "react-toastify";
var ManageProduct=()=>
{
    const [cat,setcat] = useState();
	const [allcat,setallcat] = useState([]);
	const [subcat,setsubcat] = useState();
	const [allsubcat,setallsubcat] = useState([]);
	const [prodsdata,setprodsdata] = useState([]);
    const [prodname,setprodname] = useState();
    const [rate,setrate] = useState();
    const [discount,setdiscount] = useState();
    const [stock,setstock] = useState();
    const [description,setdescription] = useState();
    const [featured,setfeatured] = useState();
	const [pic,setpic] = useState();
	const [msg,setmsg] = useState();
    const navigate = useNavigate();
    function onpicselect(event)
    {
        setpic(event.target.files[0])
    }
    useEffect(()=>
    {
     fetchallcat();
    },[])

    useEffect(()=>
    {
     fetchsubcat();
    },[cat])

    useEffect(()=>
    {
     fetchprods();
    },[subcat])

    var fetchallcat= async()=>
    {
        try
        {
            const resp= await fetch ("http://localhost:9000/api/fetchallcategories")
    if(resp.ok)
    {
        var result= await resp.json();
        if(result.statuscode===0)
        {
           alert("no categories added");
        }
        else if (result.statuscode===1)
        {
            setallcat(result.catdata);
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

var fetchsubcat= async()=>
    {
        if (cat!==undefined)
        {
        try
        {
            const resp= await fetch (`http://localhost:9000/api/fetchsubcatbycatid?cid=${cat}`)
    if(resp.ok)
    {
        var result= await resp.json();
        if(result.statuscode===0)
        {
           alert("no sub categories added");
        }
        else if (result.statuscode===1)
        {
            setallsubcat(result.subcatdata);
        }

    }
    else 
     {
        toast.error("error occured")
    }
}
catch(err)
{
    setmsg(err);
}
}
}

var fetchprods= async()=>
{
    if (subcat!==undefined)
    {
    try
    {
        const resp= await fetch (`http://localhost:9000/api/fetchprodsbysubcatid/${subcat}`)
if(resp.ok)
{
    var result= await resp.json();
    if(result.statuscode===0)
    {
       alert("no products found");
       setprodsdata([]);
    }
    else if (result.statuscode===1)
    {
        setprodsdata(result.prodsdata);
    }

}
else 
 {
    toast.error("error occured")
}
}
catch(err)
{
setmsg(err);
}
}
}





var onupdate=(pid)=>
    {
        navigate({
            pathname: '/updateproduct',
            search: `?prodid=${pid}`,
          });
    }
	var onprodadd= async ()=>
	{
		var myform = new FormData();
        myform.append("catid", cat);
        myform.append("subcatid", subcat);
        myform.append("pname", prodname );
        myform.append("rate", rate );
        myform.append("discount", discount );
        myform.append("stock", stock );
        myform.append("description", description );
        myform.append("featured", featured );
        myform.append("picture", pic)
		try 
			{
				const resp = await fetch("http://localhost:9000/api/addproduct",
				{
					method:"post",
					body: myform
					
				})
				if(resp.ok)
				{
					var result = await resp.json(); 
					if(result.statuscode===1)
					{
						toast.success("Product Added Successfully");
					}
					else if(result.statuscode===0)
					{
						setmsg("Product not added successfully");
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
				<li><Link to= "/adminhome" ><span className="glyphicon glyphicon-home" aria-hidden="true"></span>Home</Link></li>
				<li className="active">Manage Product</li>
			</ol>
		</div>
	</div>

	<div className="login">
		<div className="container">
			<h2>Manage Product</h2>
		
			<div className="login-form-grids animated wow slideInUp">
				<form name="form1">
                    <select name="cat" className="form-control" onChange={(e)=>setcat(e.target.value) } >
                        <option value=""> choose category </option>
                        {
                            allcat.map((data,i)=>
                            <option value={data._id} key={i}>{data.catname}</option>
                            )
                        } 
                        
                    </select> <br/>

                    <select name="subcat" className="form-control" onChange={(e)=>setsubcat(e.target.value) } >
                        <option value=""> choose sub category </option>
                        {
                            allsubcat.map((data,i)=>
                            <option value={data._id} key={i}>{data.subcatname}</option>
                            )
                        }
                        
                    </select> <br/>
					<input type="text" placeholder="Product Name.." name="prodname" required=" " onChange={(e)=>setprodname(e.target.value)} /> <br/>

                    <input type="text" placeholder="rate" name="rate" required=" " onChange={(e)=>setrate(e.target.value)} /> <br/>

                    <input type="text" placeholder="discount" name="discount" required=" " onChange={(e)=>setdiscount(e.target.value)} /> <br/>

                    <input type="text" placeholder="stock" name="stock" required=" " onChange={(e)=>setstock(e.target.value)} /> <br/>

                    <input type="text" className="form-control" placeholder="description" name="description" required=" " onChange={(e)=>setdescription(e.target.value)} /> <br/>

                  Featured Product &nbsp; 
                  <label> <input type="radio" onChange={(e)=>setfeatured(e.target.value)}  name="featured" value="yes"/> Yes </label>&nbsp;
                  <label> <input type="radio" onChange={(e)=>setfeatured(e.target.value)}  name="featured" value="no"/> No </label>&nbsp;


					<input type="file" name="catpic" onChange={onpicselect} required=" "/> <br/>
					<input type="button" name="btn" className="btn btn-primary" onClick={onprodadd} value="Add product"/> <br/> <br/>

					{msg}
				</form>
			</div>
            {
                prodsdata.length>0?
                <div>
                <h2>Added Products</h2><br/>
                <table className="timetable_sub">
                    <tbody>
                        <tr>
                            <th>Picture</th>
                            <th>Name</th>
                            <th>Rate</th>
                            <th>Stock</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                        {
                        prodsdata.map((data,i)=>
                            <tr key={i}>
                                <td><img alt="product_pic" src={`uploads/${data.prodpic}`} height='75'/></td>
                                <td>{data.prodname}</td>
                                <td>{data.rate}</td>
                                <td>{data.stock}</td>
                                <td><button className="btn btn-primary" onClick={()=>onupdate(data._id)}>Update</button></td>
                                <td><button className="btn btn-primary" >Delete</button></td>
                            </tr>
                        )
                        }
                    </tbody>
                </table>
                </div>:null
            }	

		</div>
	</div>
    </>)
}

export default ManageProduct;