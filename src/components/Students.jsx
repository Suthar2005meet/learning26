import React from 'react'
import { Studentlist } from './studentlist'

export const Students = (props) => {
    var student = [
        {id:101, name:'meet',age:22,course:'IT'},
        {id:102, name:'ayush',age:25,course:'CIVIL'},
        {id:103, name:'het',age:23,course:'ECE'},
        {id:104, name:'harsh',age:24,course:'CE'},
    ]
  return (
    <div>
        <h1>student</h1>
        <Studentlist student={student}></Studentlist>
    </div>
  )
}
