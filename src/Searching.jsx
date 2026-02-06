import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { func } from 'prop-types';


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

console.log(dataFetch)
function renderData(){
  const  response = dataFetch.filter(elem=>{
       const data = elem.name;
       const search = change;
       return data.includes(search);

  });
  return response.map(ele=>{
    return <ul>
        <li>Id :{ele.id}</li>
        <li>Name:{ele.name}</li>
        <li>Username:{ele.username}</li>

    </ul>
  })
}
const dt = renderData();


//searching specific data
  function  handleSearch(e){
       setchange(e.target.value);

      
  }

  
  
  
  useEffect(()=>{
      handleFetching();
      
},[])
  return (
    <div>
        <div className='handle-each-div'>
            {dt}

        </div>
       <input placeholder='start searching....'onChange={handleSearch} value={change}/>
    </div>
  )
}

export default Searching