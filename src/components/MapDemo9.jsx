import React from 'react'

export const MapDemo9 = () => {
    const marks = [
    {
    "id": 1,
    "name": "Amit Patel",
    "rollNo": "CS101",
    "Maths": 78,
    "DSA": 85,
    "DBMS": 72,
    "OS": 80,
    "AI": 88,
    "total": 403,
    "percentage": 80.6,
    "result": "Pass"
    },
    {
    "id": 2,
    "name": "Neha Sharma",
    "rollNo": "CS102",
    "Maths": 65,
    "DSA": 70,
    "DBMS": 68,
    "OS": 74,
    "AI": 79,
    "total": 356,
    "percentage": 71.2,
    "result": "Pass"
    },
    {
    "id": 3,
    "name": "Rahul Mehta",
    "rollNo": "CS103",
    "Maths": 40,
    "DSA": 55,
    "DBMS": 60,
    "OS": 58,
    "AI": 62,
    "total": 275,
    "percentage": 55.0,
    "result": "Pass"
    },
    {
    "id": 4,
    "name": "Priya Singh",
    "rollNo": "CS104",
    "Maths": 30,
    "DSA": 35,
    "DBMS": 28,
    "OS": 40,
    "AI": 45,
    "total": 178,
    "percentage": 35.6,
    "result": "Fail"
    },
    {
    "id": 5,
    "name": "Karan Desai",
    "rollNo": "CS105",
    "Maths": 82,
    "DSA": 88,
    "DBMS": 79,
    "OS": 85,
    "AI": 90,
    "total": 424,
    "percentage": 84.8,
    "result": "Pass"
    }
]

  return (
    <div style={{textAlign:'center'}}>
        <h1>MAP DEMO 9</h1>
        <table className='table'>
        <thead>
            <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Roll No</th>
            <th>Maths</th>
            <th>DSA</th>
            <th>DBMS</th>
            <th>OS</th>
            <th>AI</th>
            <th>Total</th>
            <th>%</th>
            <th>Result</th>
            </tr>
        </thead>
        <tbody>
        {
            marks.map((s) => (
            <tr key={s.id}>
            <td>{s.id}</td>
            <td>{s.name}</td>
            <td>{s.rollNo}</td>
            <td style={{color:s.Maths>60 && 'red'}}>{s.Maths}</td>
            <td style={{color:s.DSA>65 && 'green'}}>{s.DSA}</td>
            <td style={{color:s.DBMS>60 && 'blue'}}>{s.DBMS}</td>
            <td>{s.OS}</td>
            <td>{s.AI}</td>
            <td style={{backgroundColor:s.total<350 && 'red'}}>{s.total}</td>
            <td style={{backgroundColor:s.percentage>70 && 'green'}}>{s.percentage}</td>
            <td>{s.result}</td>
            </tr>
            ))}
        </tbody>
    </table>
    </div>
)}
