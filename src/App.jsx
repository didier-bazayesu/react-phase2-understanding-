
import axios from "axios"
import { useState } from "react";

function App() {
    let[data,setData] = useState([]);
  async function handleFetch(param) {
      const data =await axios.get(param);
      return  data
  }
  handleFetch("https://dummyjson.com/users").then(elem=>{
      setData(elem.data.users);
  })
  console.log(data)

  return (
    <>
     {
      data.map((elem,index)=> {
        return(<>
          <div id={index}>
            <p>The name : {elem.lastName}</p>
            <p>The email: {elem.email}</p>
          </div>
        </>);

      })
     }
    </>
  )
}

export default App
