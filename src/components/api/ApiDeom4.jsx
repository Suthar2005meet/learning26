import axios from 'axios'
import React from 'react'

export const ApiDeom4 = () => {

    const addUser = async() => {

        const userObj = {
            name:'amit',
            age:25,
            email:'amit1457@gmail.com',
            password:'amit123',
            isActive: true
        }

        try {
            const res = await axios.post('https://node5.onrender.com/user/user/',userObj)
            console.log(res)
            console.log(res.data);
            
        } catch (err) {
            console.log(err)
            alert('data has been not submitted')
        }
    }

  return (
    <div style={{textAlign:'center'}}>
        <h1>API DEMO 4</h1>
        <button onClick={()=>addUser()}>ADD</button>
    </div>
  )
}
