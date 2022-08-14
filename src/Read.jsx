import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "bootstrap";
const Read =()=>{

    const [data, setData]=useState([]);
    const [tabledark, setTabledark]=useState("");
    const [input, setInput]=useState("");
    const getData =()=>{
        axios
        .get("https://62f629e0a3bce3eed7bab492.mockapi.io/crud")
        .then((response)=>{
            console.table(response.data);
            setData(response.data);
        });
        

    }
    const inputHandler =(e)=>{
        setInput(e.target.value.toLowerCase());



    }
    const handleDelte =(id)=>{
        axios
        .delete(`https://62f629e0a3bce3eed7bab492.mockapi.io/crud/${id}`).then(()=>{
            getData();
        })
        
    }
    const setLocalStorage =(id,name, email)=>{
        localStorage.setItem("id",id);
        localStorage.setItem("name",name);
        localStorage.setItem("email",email);

    }
    // getData();
    useEffect(()=>{
        getData();
    },[])
    return (
    <>
        <div>
        <div className="form-check">
  <input className="form-check-input" type="checkbox" value="" 
  onClick={()=>{
    if(tabledark === 'table-dark'){
        setTabledark('');
    }
    else{
        setTabledark('table-dark');

    }
   
  }}
  
  />
  <label className="form-check-label" >
    Dark Mode
  </label>
</div>
            <div className="d-flex  justify-content-between m-2 ">
            <h1 className="m-0">Read Data</h1>
            <div className="input-group">
            <div classNa="form-outline">
                <input type="search"  className="form-control" placeholder="Search" onClick={inputHandler} />
            </div>
            
            </div>
            <Link to="/Create"><button className="btn btn-primary">Create</button></Link>
           
            </div>
            <table className={`table ${tabledark}`}>
                <thead>
                    <tr>
                    <th >#</th>
                    <th >Name</th>
                    <th >Email</th>
                    <th >Operations</th>
                    </tr>
                </thead>
                { data.filter((el)=>{
                    if(el==="")
                    {
                        return el;
                    }
                    else {
                        return el.name.toLowerCase().includes(input) || el.email.toLowerCase().includes(input);
                    }

                }).map((eachdata)=>{
                        return(
                            <tbody>
                    <tr>
                    <td>{eachdata.id}</td>
                    <td>{eachdata.name}</td>
                    <td>{eachdata.email}</td>
                    <td><button className="btn btn-primary" onClick={()=>setLocalStorage(eachdata.id,eachdata.name,eachdata.email)}>Edit</button> <button className="btn btn-primary" onClick={()=>handleDelte(eachdata.id)}>delete</button> <Link to="/Update"><button className="btn btn-primary">Update</button></Link>
 </td>
                    </tr>
                    
                </tbody>
                        )
                    })
                }
                
                </table>
        </div>
    </>
    )
}
export default Read;