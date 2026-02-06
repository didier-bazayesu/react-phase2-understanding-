import React, { useEffect, useState } from 'react'
import axios from 'axios'


function Searching() {
let[dataFetch,setData] = useState([]);
let[change,setchange] = useState("")
async function handleFetching (){
    const data = await axios.get("https://jsonplaceholder.typicode.com/users");
    setData(()=> data.data);

};

  function  handleSuch(eve){
       setchange(eve.target.value);
      
  }
  console.log(change)
  
  
  
  useEffect(()=>{
      handleFetching();
      handleSuch();
},[])
  return (
    <div>
       <input placeholder='start searching....' onChange={(e)=>handleSuch(e)}/>
    </div>
  )
}

export default Searching