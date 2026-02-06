import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { func } from 'prop-types';
import HandlePrps from './HandlePrps';

function Searching() {
let[dataFetch,setData] = useState([]);
async function handleFetching (){
    const data = await axios.get("https://jsonplaceholder.typicode.com/users");
    setData(()=> data.data);

};



useEffect(()=>{
   handleFetching();
},[])
  return (
    <div>
       <input placeholder='start searching....' />
    </div>
  )
}

export default Searching