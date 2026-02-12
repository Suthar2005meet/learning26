import React from 'react'
import { useForm } from 'react-hook-form'

export const FormDemo5 = () => {

    const {register, handleSubmit, formState: {errors}} = useForm();
    console.log("errors...", errors)
    const submitHandler = (data) => {
        console.log(data)
    }
    const formValidation = {
        nameValidate:{
            required:{
                value : true,
                message:'Name is required*'
            }
        },
        ageValidator:{
            required:{
                value:true,
                message:"age is required"
            },
            min:{
                value:18,
                message:"Age is min 18*"
            },
            max:{
                value:60,
                message:"Age is max 60*"
            }
        },
        addValidator:{
            required:{
                value:true,
                message:"Address is required*"
            },
            minLength:{
                value:5,
                message:"minimum 5 char is require"
            },
            maxLength:{
                value:25,
                message:"maximum 25 char is allowed"
            }
        }
    }
  return (
    <div style={{textAlign:'center'}}>
        <h1>Login Form</h1>
        <form onSubmit={handleSubmit(submitHandler)}>
        <div>
            <label>Name : </label>
            <input type="text" {...register('name',formValidation.nameValidate)}/>
            {errors.name && errors.name.message}
        </div>
        <div>
            <label>AGE : </label>
            <input type="text" {...register('age', formValidation.ageValidator)}/>
            {errors.age?.message}
        </div>
        <div>
            <label>Address : </label>
            <input type="text" {...register('add', formValidation.addValidator)}/>
            {errors.add?.message}
        </div>
        <div>
            <input type="Submit" />
        </div>
        </form>
    </div>
  )
}
