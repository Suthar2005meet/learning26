import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'

export const ApiDeom5 = () => {

    const{register, handleSubmit} = useForm()
    const submitHandler = async(data) => {
        console.log(data)
        const res = await axios.post('https://node5.onrender.com/user/user/',data)
        console.log(res)
        console.log(res.data)
    }

  return (
    <div style={{textAlign:'center'}}>
        <h1>Post Api</h1>
        <form onSubmit={handleSubmit(submitHandler)}>
            <div>
                <label>NAME : </label>
                <input type="text" {...register('name')}/>
            </div>
            <div>
                <label>AGE : </label>
                <input type="text" {...register('age')}/>
            </div>
            <div>
                <label>EMAIL : </label>
                <input type="text" {...register('email')}/>
            </div>
            <div>
                <label>PASSWORD : </label>
                <input type="text" {...register('password')}/>
            </div>
            <div>
                <label>IS ACTIVE : </label>
                TRUE : <input type="radio" value='true' {...register('isActive')}/>
                FALSE : <input type='radio' value='false' {...register('isActive')}/>
            </div>
            <div>
                <input type="submit" />
            </div>
        </form>
    </div>
  )
}
