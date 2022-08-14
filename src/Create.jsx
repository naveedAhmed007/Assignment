import React from "react";
import { useState } from "react";
// import {useNavigate} from "react-router-dom"
import {useRef} from 'react';
import axios from "axios";
import { Link } from "react-router-dom";
const Create =()=>{

    const [name, setName] = useState();

    const [email, setEmail] = useState();
   
    let btnRef = useRef();


    // const history = useNavigate();

    const header ={"Access-Control-Allow-Origin": "*"};
    const handleAdd =(e)=>{
      if(btnRef.current){
        btnRef.current.setAttribute("disabled", "disabled");
      }
        e.preventDefault();
        console.log("Add");
        axios.post('https://62f629e0a3bce3eed7bab492.mockapi.io/crud',{
            
            name:name,
             email:email, 
             header,
             
        })
        .then(()=>{
             // history("/read")
                     })
       

    }


    return(
        <>
        <div className="d-flex justify-content-between">
            <h1>Create</h1>
            <Link to="/Read"><button className="btn btn-primary">Save</button></Link>
            </div>
        <form>
  <div className="mb-3">
  <div className="mb-3">
    <label  className="form-label">Name</label>
    <input type="text" className="form-control"
    onChange={(e)=>setName(e.target.value)}
    /> 
  </div>
  
    <label  className="form-label">Email address</label>
        <input type="email" className="form-control" id="email" name="email" placeholder="Email Address"
        onChange={(e)=>setEmail(e.target.value)}
        />
  
  </div>
  {/* <button type="submit" className="btn btn-primary" onClick={handleAdd} >Add</button> */}
  <button ref={btnRef} type="submit" className="btn btn-primary" onClick={handleAdd}>Send</button>
</form>
        </>
    )
}

export default Create;