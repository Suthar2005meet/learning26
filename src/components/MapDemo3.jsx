
export const MapDemo3 = () => {

    var students = [
        {id:1,name:"raj",age:23,marks:76,city:'ahmedabad',gender:'male'},
        {id:1,name:"prathna",age:25,marks:86,city:'ahmedabad',gender:'female'},
        {id:1,name:"rekha",age:23,marks:72,city:'ahmedabad',gender:'female'}
    ]
    return (
    <div style={{textAlign:'center'}}>
        <h1>MAP DEMO 3</h1>
        <table border="2" align="center">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>AGE</th>
                    <th>MARKS</th>
                    <th>CITY</th>
                    <th>GENDER</th>
                </tr>
            </thead>
            <tbody>
                {
                    students.map((st)=>{
                        return <tr>
                            <td>{st.id}</td>
                            <td>{st.name}</td>
                            <td>{st.age}</td>
                            <td>{st.marks}</td>
                            <td>{st.city}</td>
                            <td>{st.gender}</td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    </div>
  )
}
