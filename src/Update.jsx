import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
// import {useNavigate} from "react-router-dom"

const Update =()=>{

        const [id,setId] =useState(0);
        const [name,setName] = useState("");
        const [email,setEmail] = useState("");

        const handleUpdate =(e)=>{
            e.preventDefault();
            axios
            .put(`https://62f629e0a3bce3eed7bab492.mockapi.io/crud/${id}`,{
                name:name,
                email:email,
            }).then(()=>{
                // history("/read")
                
            })
        }
       useEffect(()=>{
        setId(localStorage.getItem("id"));
        setName(localStorage.getItem("name"));
        setEmail(localStorage.getItem("email"));
       },[]) 
    return(
        <>
        <div className="d-flex justify-content-between">
            <h1>UpDate Data</h1>
            <Link to="/Read"><button className="btn btn-primary">Read</button></Link>
            </div>
        <form>
  <div className="mb-3">
  <div className="mb-3">
    <label  className="form-label">Name</label>
    <input type="text" className="form-control"
        onChange={(e)=>setName(e.target.value)}
    value={name}
    /> 
  </div>
  
    <label  className="form-label">Email address</label>
        <input type="email" className="form-control" value={email}  placeholder="Email Address"
      onChange={(e)=>setEmail(e.target.value)}
        />
  
  </div>
  <button type="submit" className="btn btn-primary"
   onClick={handleUpdate} 
   >Update</button>
 
</form>
        </>
    )
}
export default Update;