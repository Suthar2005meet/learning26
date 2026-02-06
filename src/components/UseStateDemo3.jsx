import React, { useState } from 'react'

export const UseStateDemo3 = () => {

    const [users, setusers] = useState(['parth','raj']);
    const adduser = () => {
        setusers([...users, 'abc'])
    }
  return (
    <div style={{textAlign:'center'}}>
        <h1>USE STATE DEMO 3</h1>
        {
            users.map((u) => {
                return <li>{u}</li>
            })
        }
        <button onClick={adduser}>ADD</button>
    </div>
  )
}
