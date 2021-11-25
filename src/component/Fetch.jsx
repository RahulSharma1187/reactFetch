import React, { useState, useEffect } from 'react';


const Fetch = () => {    
    const [loading, setLoading] = useState(false);
    const [users, setUsers] = useState([]);

    const test = async() => {
        
        // const response = await fetch("https://reqres.in/api/users?page=2");
        // const data = response.json();

        setLoading(true); 
        const response = await fetch("https://api.github.com/users");
        setUsers(await response.json());
        setLoading(false);
    }

    useEffect(() => {
        test(); 
    }, []);

    return(
        <>
           <div className="">

            {loading ? <div className="loading">Loading</div> : 
                <div className="box">
                    <ul>
                        {
                            users.map((crntElem) => {
                                return (
                                    <li>
                                        <p>{crntElem.id}</p>
                                    </li>      
                                )
                            })
                        }
                    </ul>
                </div>
            }

           
           </div> 
        </>
    );
}

export default Fetch;
