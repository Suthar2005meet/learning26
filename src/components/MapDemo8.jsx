
export const MapDemo8 = () => {
    const cars =[
  {
    "id": 1,
    "brand": "Toyota",
    "model": "Innova Crysta",
    "type": "SUV",
    "fuelType": "Diesel",
    "price": 1950000,
    "status": "Available"
  },
  {
    "id": 2,
    "brand": "Hyundai",
    "model": "Creta",
    "type": "SUV",
    "fuelType": "Petrol",
    "price": 1350000,
    "status": "Booked"
  },
  {
    "id": 3,
    "brand": "Maruti Suzuki",
    "model": "Swift",
    "type": "Hatchback",
    "fuelType": "Petrol",
    "price": 750000,
    "status": "Available"
  },
  {
    "id": 4,
    "brand": "Tata",
    "model": "Nexon",
    "type": "SUV",
    "fuelType": "Electric",
    "price": 1600000,
    "status": "Available"
  },
  {
    "id": 5,
    "brand": "Mahindra",
    "model": "XUV700",
    "type": "SUV",
    "fuelType": "Diesel",
    "price": 2200000,
    "status": "Sold"
  }
]

  return (
    <div style={{textAlign:'center'}}>
        <h1>MAP DEMO 8</h1>
        <table className="table">
        <thead>
        <tr>
        <th>ID</th>
        <th>Brand</th>
        <th>Model</th>
        <th>Type</th>
        <th>Fuel</th>
        <th>Price (₹)</th>
        <th>Status</th>
        </tr>
        </thead>
        <tbody>
        {cars.map((car) => (
        <tr key={car.id}>
            <td>{car.id}</td>
            <td>{car.brand}</td>
            <td>{car.model}</td>
            <td style={{backgroundColor:car.type=='SUV' && 'red'}}>{car.type}</td>
            <td style={{backgroundColor:car.fuelType=='Petrol' && 'greenyellow'}}>{car.fuelType}</td>
            <td style={{backgroundColor:car.price>1500000 && 'grey'}}>{car.price}</td>
            <td style={{backgroundColor:car.status=='Available' && 'green'}}>{car.status}</td>
        </tr>
        ))}
    </tbody>
    </table>

    </div>
  )
}
