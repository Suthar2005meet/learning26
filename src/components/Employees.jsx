import React from 'react'
import { EmployeeList } from './EmployeeList'
import { SubEmployeeList } from './SubEmployeeList'

export const Employees = (props) => {
    var title = "EMPLOYEE APP"

    var company =  {
        name : 'TCS',
        year : 2026
    }

    var employees = [
        {id:101, name:'parth', age:23},
        {id:102, name:'prakash', age:24},
        {id:103, name:'raj', age:25},
        {id:104, name:'vraj', age:23},
    ]
  return (
    <div style={{textAlign:'center'}}>
        <h1>Employees</h1>
        <EmployeeList title={title} company={company} employees={employees}></EmployeeList>
        <SubEmployeeList title = {props.title}></SubEmployeeList>
    </div>
  )
}
