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

console.log(dataFetch)
function renderData(){
  const  response = dataFetch.filter(elem=>{
       const data = elem.name;
       const name = elem.username
       const search = change;
      return data.toLowerCase().includes(search.toLocaleLowerCase()) || name.toLowerCase().includes(search.toLocaleLowerCase());

  });
  return response.map(ele=>{
      return <ul className='handle-each-div' key={ele.id}>
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
        <input placeholder='start searching....'onChange={handleSearch} value={change}/>
        <div >
            {dt}

        </div>
    </div>
  )
}

export default Searching