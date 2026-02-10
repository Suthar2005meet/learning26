import React from 'react'

export const EmployeeList = (props) => {
  return (
    <div style={{textAlign:'center'}}>
        <h1>Employee List</h1>
        {props.title}
        <h1>{props.company.name}</h1>
        <h1>{props.company.year}</h1>
        <table className='table'>
            <thead>
                <th>ID</th>
                <th>NAME</th>
                <th>AGE</th>
            </thead>
            <tbody>
                {
                    props.employees.map((emp)=>{
                        return <tr>
                            <td>{emp.id}</td>
                            <td>{emp.name}</td>
                            <td>{emp.age}</td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    </div>
  )
}
