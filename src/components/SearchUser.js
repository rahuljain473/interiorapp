import { useState } from "react";
import { Link } from "react-router-dom";
var SearchUser=()=>
{
    const [msg,setmsg]= useState("");
    const [uname,setuname]= useState();
    const [udata,setudata]= useState([]);
    var onsearch= async ()=>
{
try
{
    const resp= await fetch (`http://localhost:9000/api/searchmember?un=${uname}`)
    if(resp.ok)
    {
        var result= await resp.json();
        if(result.statuscode===0)
        {
            setmsg("Invalid username");
        }
        else if (result.statuscode===1)
        {
            setudata(result.membsdata);
        }

    }
    else 
     {
        setmsg("error occured")
    }
}
catch(err)
{
    setmsg(err);
}
}

    return(
        <>
        <div className="breadcrumbs">
            <div className="container">
                <ol className="breadcrumb breadcrumb1 animated wow slideInLeft" data-wow-delay=".5s">
                    <li><Link TO="/adminhome"><span className="glyphicon glyphicon-home" aria-hidden="true"></span>Home</Link></li>
                    <li className="active">Search User</li>
                </ol>
            </div>
        </div>
    
        <div className="login">
            <div className="container">
                <h2>Search User</h2>
            
                <div className="login-form-grids animated wow slideInUp" data-wow-delay=".5s">
                    <form>
                        <input type="email" placeholder="Email Address" name="uname" onChange={(e)=>setuname(e.target.value)} required=" "/> <br/>
                        <input type="button" className="btn btn-primary" onClick={onsearch} value="Search"/> <br/> <br/>
                        {
                            udata.length>0?
                            <div>
<b> Name:- </b> { udata[0].name}<br/>
<b> Phone:- </b> { udata[0].phone}<br/>
                            </div>:null
                        }

    
                        {msg}
                    </form>
                </div>
            </div>
        </div>
        
        </>)
    }
    export default SearchUser;