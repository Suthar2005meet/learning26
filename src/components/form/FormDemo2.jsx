import { useState } from 'react'
import { useForm } from 'react-hook-form'

export const FormDemo2 = () => {

    const {register, handleSubmit} = useForm()
    const [userData, setuserData] = useState({})
    const [issubmited, setissubmit] = useState(false)

    const submitHandler = (data) => {
        console.log(data)
        setuserData(data)
        setissubmit(true)
    }

  return (
    <div style={{textAlign:'center'}}>
        <h1>STUDENT REGISTRATION</h1>
        <form onSubmit={handleSubmit(submitHandler)}>
            <div>
                <label>NAME : </label>
                <input type="text" placeholder='NAME' {...register('name')}/>
            </div>
            <div>
                <label>AGE : </label>
                <input type="text" placeholder='Age' {...register('age')}/>
            </div>
            <div>
                <label>EMAIL : </label>
                <input type="text" placeholder='Email' {...register('email')}/>
            </div>
            <div>
                <label>PASSWORD : </label>
                <input type="text" placeholder='Password' {...register('password')}/>
            </div>
            <div>
                <label>STUDY : </label>
                <input type="text" placeholder='Study' {...register('study')}/>
            </div>
            <div>
                <input type="submit" />
            </div>
        </form>
        {
                issubmited == true && <div>
                    <h1>NAME = {userData.name}</h1>
                    <h2>AGE = {userData.age}</h2>
                    <h2>EMAIL = {userData.email}</h2>
                    <h2>PASSWORD = {userData.password}</h2>
                    <h2>STUDY = {userData.study}</h2>
                </div>
            }
    </div>
  )
}
