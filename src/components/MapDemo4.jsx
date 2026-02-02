
export const MapDemo4 = () => {

    var cities = [
        {id:1,name:'ahmedabad',pop: 8000000, aqi:302},
        {id:2,name:'delhi',pop: 5000000, aqi:250},
        {id:3,name:'dehradun',pop: 8000000, aqi:150}
    ]
  return (
    <div style={{textAlign:'center'}}>
        <h1>MAP DEMO 4</h1>
        <table className='table table-dark'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>POPULATION</th>
                    <th>AQI</th>
                </tr>
            </thead>
            <tbody>
                {
                    cities.map((city)=>{
                        return <tr>
                            <td>{city.id}</td>
                            <td>{city.name}</td>
                            <td>{city.pop}</td>
                            <td>{city.aqi}</td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    </div>
  )
}
