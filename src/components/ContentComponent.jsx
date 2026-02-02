import photo from '../assets/image.png'

export default function ContentComponent() {

    return (
    <div>
        <div  style={{display:'flex', justifyContent: 'center', alignItems: 'center'}}>
            <img src= {photo} style={{width: '350px', borderRadius:'10%', border:'2px solid black'}} alt="virat kohli" />
        </div>
        <p style={{fontWeight:'bolder'}}>The car in the image is a BMW i8, a high-performance plug-in hybrid sports car. This specific vehicle features a custom blue, white, and black geometric wrap and the iconic upward-opening "scissor" (or butterfly) doors.</p>
        <br />
        <h2>Key Features of the BMW i8</h2>
        <h3>Engine & Power: It combines a 1.5-liter 3-cylinder turbocharged engine with an electric motor, producing a total system output of approximately 357 to 369 horsepower.</h3>
        <h3>Performance: The car can accelerate from 0 to 100 km/h (62 mph) in about 4.4 seconds, with an electronically limited top speed of 250 kmph.</h3>
        <h3>Drivetrain: It features an All-Wheel Drive (AWD) system, where the electric motor powers the front wheels and the gasoline engine drives the rear.</h3>
        <h3>Lightweight Design: To maximize efficiency, the passenger cell is made from carbon-fiber-reinforced plastic (CFRP), and the chassis is primarily aluminum.</h3>
        <h3>Futuristic Technology: It was the first production car to offer laser headlights as an option, which are more efficient and powerful than standard LEDs.</h3>
    </div>
    )
}
