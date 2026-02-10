import axios from "axios";
import { useState } from "react";
import HandlePrps from "./HandlePrps";
import { UserDetails } from "./HandlePrps";

function SampleFetching() {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [hasError, setHasError] = useState(false);

    async function handleClick() {
        setIsLoading(true);
        setHasError(false);

        const timeout = setTimeout(() => {
            setHasError(true);
            setIsLoading(false);
        }, 3000);

        try {
            const response = await axios.get("https://dummyjson.com/users");
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

    return (
        <div>
            <h1>Data for sample test</h1>

            <button onClick={handleClick}>Load Users</button>

            {isLoading && <p>Page Loading...</p>}
            {hasError && <p style={{ color: "red" }}>Failed to load data</p>}

            {!isLoading && !hasError && data.length > 0 &&
                data.map((user) => (
                    <div key={user.id} className="design-dev">
                        <p>Name: {user.firstName} {user.lastName}</p>
                        <p>Email: {user.email}</p>
                    </div>
                ))
            }

            <UserDetails.Provider value={{ onClick: handleClick }}>
                <HandlePrps />
            </UserDetails.Provider>
        </div>
    );
}

export default SampleFetching;
