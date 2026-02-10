import React, { useState } from 'react'
import { CardComponent } from './CardComponent';
import { MapDemo10 } from './MapDemo10';

export const UseStateDemo1 = () => {

    const [count, setCount] = useState(0);
    const increasecount = () => {
        setCount(count+1)
        console.log('count after increase' ,count)
    }
  return (
    <div style={{textAlign:'center'}}>
        <h1>USE STATE DEMO 1</h1>
        <h1>count = {count}</h1>
        <button onClick={increasecount}> + </button>
        <CardComponent title="USE STATE DEMO"></CardComponent>
        <MapDemo10 heading="languages"></MapDemo10>
    </div>
  )
}
