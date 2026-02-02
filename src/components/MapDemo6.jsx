
export const MapDemo6 = () => {

    const students = [
    { id: 1, name: "Amit Patel",   city: "Ahmedabad", age: 20, gender: "Male", attendence : 100 },
    { id: 2, name: "Neha Sharma",  city: "Surat",     age: 21, gender: "Female", attendence: 80 },
    { id: 3, name: "Rahul Mehta",  city: "Vadodara",  age: 22, gender: "Male", attendence: 90 },
    { id: 4, name: "Priya Singh",  city: "Rajkot",    age: 20, gender: "Female", attendence: 75 },
    { id: 5, name: "Karan Desai",  city: "Gandhinagar", age: 23, gender: "Male", attendence: 95 }
    ];


  return (
    <div style={{ textAlign: 'center'}}>
        <h1>MAP DEMO 6</h1>
        <table className="table">
            <thead >
                <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>CITY</th>
                    <th>AGE</th>
                    <th>GENDER</th>
                    <th>ATTENDENCE</th>
                </tr>
            </thead>
            <tbody>
                {
                    students.map((st)=> {
                        return <tr style={{backgroundColor:st.attendence>90 && 'yellow'}}>
                            <td>{st.id}</td>
                            <td>{st.name}</td>
                            <td>{st.city}</td>
                            <td style={{color:st.age>20 && 'red'}}>{st.age}</td>
                            <td style={{backgroundColor:st.gender=='Female' && 'pink'}}>{st.gender}</td>
                            <td style={{backgroundColor:st.attendence<90 && 'grey'}}>{st.attendence}</td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    </div>
  )
}
