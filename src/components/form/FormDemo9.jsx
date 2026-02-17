import React from 'react'
import { useForm } from 'react-hook-form'

export const FormDemo9 = () => {

    const{register,handleSubmit,formState:{errors},watch} = useForm({mode:'onChange'})
    const password = watch('password')
    console.log('watching.....',password)
    const submitHandler = (data) => {
        console.log(data);
    }
    const formValidation = {
        passwordValidator:{
            required:{
                value:true,
                message:'Password is required*'
            },
        },
        confirmValidator:{
            required:{
                value:true,
                message:'confirm password is required'
            },
            validate:(params)=>{
                return params == password || 'confirm pasword is not matched'
            }
        }
    }
  return (
    <div style={{textAlign:'center'}}>
        <h1>Form Demo 9</h1>
        <form onSubmit={handleSubmit(submitHandler)}>
            <div>
                <label>PASSWORD : </label>
                <input type="password" {...register('password', formValidation.passwordValidator)} />
                {errors.password?.message}
            </div>
            <div>
                <label>CONFIRM PASSWORD : </label>
                <input type="password" {...register('cpassword', formValidation.confirmValidator)}/>
                {errors.cpassword?.message}
            </div>
            <div>
                <input type="submit" />
            </div>
        </form>
    </div>
  )
}
