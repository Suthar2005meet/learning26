import React from 'react'
import { CardComponent } from './CardComponent'
import { MapDemo10 } from './MapDemo10'

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
        <CardComponent title ="FUNCTION DEMO 1" description="FUNCTION DEMO 1 DESCRIPTION"></CardComponent>
        <MapDemo10 heading = "program language"></MapDemo10>
    </div>
  )
}
