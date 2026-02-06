import React, { useState } from 'react'

export const UseStateDemo2 = () => {

    const [loading , setloading] = useState(true)
    const stoploader = () => {
        setloading(false)
    }
  return (
    <div style={{textAlign:'center'}}>
        <h1>USE STATE DEMO 2</h1>
        {
            loading == true && <h1>Loading.....</h1>
        }
        <button onClick={stoploader}>STOP</button>
    </div>
  )
}
