import React, { useEffect, useState } from 'react'
import axios from 'axios'


function Searching() {
let[dataFetch,setData] = useState([]);
let[change,setchange] = useState("")
async function handleFetching (){
    try{

        const data = await axios.get("https://jsonplaceholder.typicode.com/users");
        setData(()=> data.data);
        
    }catch(error){
         console.error(error);
    };
    
};

// console.log(dataFetch)
  function  handleSearch(e){
       setchange(e.target.value);

      
  }

  
  
  
  useEffect(()=>{
      handleFetching();
      
},[])
  return (
    <div>
        <p>{change}</p>
       <input placeholder='start searching....'onChange={handleSearch} value={change}/>
    </div>
  )
}

export default Searching