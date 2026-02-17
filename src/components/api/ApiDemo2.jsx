import axios from "axios";
import { useState } from "react";

export const ApiDemo2 = () => {

    const [users, setusers] = useState([]);

    const getUser = async() => {

        const Response = await axios.get('https://dummyjson.com/products')
        console.log(Response);
        setusers(Response.data.products)
    }

  return (
    <div style={{textAlign:'center'}}>
        <h1>Api Demo2</h1>
        <button onClick={()=>{getUser()}}>GET</button>
        <table className="table">
            <thead>
                <tr>
                    
                    <th>TITLE</th>
                    <th>DESCRIPTION</th>
                    <th>CATEGORY</th>
                    <th>PRICE</th>
                </tr>
            </thead>
            <tbody>
                {
                    users?.map((user) => {
                        return <tr key={user.id}>
                            
                            <td>{user.title}</td>
                            <td>{user.description}</td>
                            <td>{user.category}</td>
                            <td>{user.price}</td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    </div>
  )
}
