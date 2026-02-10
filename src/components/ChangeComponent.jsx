import { useState } from 'react'

export const ChangeComponent = () => {

    const[name,setname] = useState('')
    const[age,setage] = useState('')
    const[password,stepasswort] = useState('')
    const[study, setstudy] = useState('')
    const[gendeer, setgender] = useState('')
    const[email, setemail] =useState('')
    const[weight,setweight] = useState('')
    const[height, setheight] = useState('')
    const[qualification, setqualification] = useState('')
    const[course, setcourse] = useState('')
  return (
    <div style={{textAlign:'center'}}>
        <div>
        <p>Name
        <input onChange={(e) => {setname(e.target.value)}} type="text" />
        <p>{name}</p> </p>
        </div>
        <div>
        <p>Age
        <input onChange={(e) => {setage(e.target.value)}} type="text" />
        <p>{age}</p> </p>
        </div>
        <div>
        <p>Password
        <input onChange={(e) => {stepasswort(e.target.value)}} type="text" />
        <p>{password}</p> </p>
        </div>
        <div>
        <p>Study
        <input onChange={(e) => {setstudy(e.target.value)}} type="text" />
        <p>{study}</p> </p>
        </div>
        <div>
        <p>Gender
        <input onChange={(e) => {setgender(e.target.value)}} type="text" />
        <p>{gendeer}</p> </p>
        </div>
        <div>
        <p>Email
        <input onChange={(e) => {setemail(e.target.value)}} type="text" />
        <p>{email}</p> </p>
        </div>
        <div>
        <p>Weight
        <input onChange={(e) => {setweight(e.target.value)}} type="text" />
        <p>{weight}</p> </p>
        </div>
        <div>
        <p>Height
        <input onChange={(e) => {setheight(e.target.value)}} type="text" />
        <p>{height}</p> </p>
        </div>
        <div>
        <p>Qualification
        <input onChange={(e) => {setqualification(e.target.value)}} type="text" />
        <p>{qualification}</p> </p>
        </div>
        <div>
        <p>course
        <input onChange={(e) => {setcourse(e.target.value)}} type="text" />
        <p>{course}</p> </p>
        </div>
    </div>
  )
}
