import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
var ViewMembers=()=>
{
    const [msg,setmsg]= useState();
    const [membslist,setmembslist]= useState([]);


useEffect(()=>
{
    fetchmembers();
},[])

var fetchmembers= async ()=>
{
try
{
    const resp= await fetch ("http://localhost:9000/api/fetchallmembers")
    if(resp.ok)
    {
        var result= await resp.json();
        if(result.statuscode===0)
        {
            setmsg("No members found");
        }
        else if (result.statuscode===1)
        {
            setmembslist(result.membsdata);
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
				<li><Link to="/homepage"><span className="glyphicon glyphicon-home" aria-hidden="true"></span>Home</Link></li>
				<li className="active">List of members</li>
			</ol>
		</div>
	</div>

	<div className="login">
		<div className="container">
			<h2>List of Members</h2> <br/>
            {
                membslist.length>0?
                <table className="timetable_sub">
                    <tbody>
                        <tr>
                            <th>Name</th>
                            <th>phone</th>
                            <th>Username</th>
                        </tr>
                        {
                            membslist.map((data,i)=>
<tr key={i}>
    <td> {data.name}</td>
    <td>{data.phone}</td>
    <td>{data.username}</td>
</tr>
                            )
                        }
                    </tbody>
                </table>:null
            }
            {msg}

</div>
</div>
            </>
            )

}

export default ViewMembers;