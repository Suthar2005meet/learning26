import axios from "axios"
import { useState } from "react"

export const ApiDemo3 = () => {

    const[datas,setdatas] = useState([])

    const getUser = async()=>{

        const response = await axios.get('https://dummyjson.com/comments')
        console.log(response);
        console.log(response.data)
        console.log(response.data.comments)
        setdatas(response.data.comments)
    }

  return (
    <div style={{textAlign:'center'}}>
        <h1>API DEMO3</h1>
        <button onClick={()=>{getUser()}} >GET</button>
        <table className="table">
            <thead>
                <tr>
                    
                    <th>BODY</th>
                    <th>POSTID</th>
                    <th>LIKES</th>
                    <th>USER.ID</th>
                    <th>USER.USERNAME</th>
                    <th>USER.FULLNAME</th>
                </tr>
            </thead>
            <tbody>
                {
                    datas.map((data)=>{
                        return <tr key={data.id}>
                            
                            <td>{data.body}</td>
                            <td>{data.postId}</td>
                            <td>{data.likes}</td>
                            <td>{data.user.id}</td>
                            <td>{data.user.username}</td>
                            <td>{data.user.fullName}</td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    </div>
  )
}
