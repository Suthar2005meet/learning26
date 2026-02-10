import React from 'react'

export const Studentlist = (props) => {
    
  return (
    <div>
        <h1>Student List</h1>
        <table className='table'>
            <thead>
                <th>ID</th>
                <th>NAME</th>
                <th>AGE</th>
                <th>COURSE</th>
            </thead>
            <tbody>
                {
                    props.student.map((stu) => {
                        return <tr>
                            <td>{stu.id}</td>
                            <td>{stu.name}</td>
                            <td>{stu.age}</td>
                            <td>{stu.course}</td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    </div>
  )
}
