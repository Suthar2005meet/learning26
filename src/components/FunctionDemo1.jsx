import React from 'react'

export const FunctionDemo1 = () => {
    const test =() => {
        alert("test function called")
    }
    const test2 = () => {
        alert("value of x" +2)
    }
  return (
    <div style={{textAlign:'center'}}>
        <h1>FUNCTION DEMO 1</h1>
        <button onClick={test}>CLICK</button>
        <button onClick={()=>{test2()}}>CLICK 2</button>
    </div>
  )
}
