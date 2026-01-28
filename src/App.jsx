import axios from "axios";
import { useEffect, useState,useContext } from "react";
import HandlePrps from "./HandlePrps";
import { UserDetails } from "./HandlePrps";

function App() {

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);


  useEffect(() => {
    // Start timeout
    const timeout = setTimeout(() => {
      // If API hasn't responded in 3 seconds, show error
      if (isLoading) {
        setHasError(true);
        setIsLoading(false);
      }
    }, 3000);

    async function fetchUsers() {
      try {
        const response = await axios.get("https://dummyjson.com/users");
        // API responded — cancel timeout
        clearTimeout(timeout);
        setData(response.data.users);
        setIsLoading(false);
      } catch (error) {
        clearTimeout(timeout);
        setHasError(true);
        setIsLoading(false);
        console.error(error);
      }
    }

    fetchUsers();

    // Cleanup in case component unmounts
    return () => clearTimeout(timeout);
  }, []);


  function handleClick() {
    alert("user clicked")
  }

  return (
    <div>
      <h1>Data for sample test</h1>

      {/* {isLoading && <p>Page Loading...</p>}
      {hasError && <p style={{ color: "red" }}>Failed to load data</p>}

      {!isLoading && !hasError &&
        data.map((user) => (
          <div key={user.id} className="design-dev">
            <p>Name: {user.firstName} {user.lastName}</p>
            <p>Email: {user.email}</p>
          </div>
        ))
      } */}
      
      <UserDetails.Provider value={{ onClick: handleClick }}>
         <HandlePrps  />

      </UserDetails.Provider>
      
    </div>
  );
}

export default App;
