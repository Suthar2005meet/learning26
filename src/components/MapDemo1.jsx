
export const MapDemo1 = () => {

    let car = ["audi", "bmw", "abcd", "pqr", "merc", "rr"]
  return (
    <div>
        <h1>MAP DEMO 1</h1>
        {
            car.map((c) => {
                return <h1>{c}</h1>
            })
        }
    </div>
  )
}
