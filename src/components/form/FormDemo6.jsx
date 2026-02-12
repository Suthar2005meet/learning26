import React from 'react'
import { useForm } from 'react-hook-form'

export const FormDemo6 = () => {

    const {register, handleSubmit, formState:{errors}} = useForm()
    console.log("erroos...", errors)
    const submitHandle = (data) => {
        console.log(data)
    }
    const formValidator={
        fnameValidator:{
            required:{
                value:true,
                message:"First Name is Required*"
            },
        },
        lnameValidator:{
            required:{
                value:true,
                message:"Last Name is Required*"
            },
        },
        mobileValidator:{
            required:{
                value:true,
                message:"Mobile No is required*"
            },
            minLength:{
                value:10,
                message:"Number in 10*"
            }
        },
        emailValidator:{
            required:{
                value:true,
                message:"Email has been require"
            },
            minLength:{
                value:10,
                message:"minimum 10 char is require"
            },
            maxLength:{
                value:25,
                message:"maximum 25 char is allowed"
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
        <h1>SUBMIT FORM</h1>
        <form onSubmit={handleSubmit(submitHandle)}>
            <div>
                <label>FIRST NAME : </label>
                <input type='text' {...register('fname', formValidator.fnameValidator)}/>
                {errors.fname?.message}
            </div>
            <div>
                <label>LAST NAME : </label>
                <input type="text" {...register('lname', formValidator.lnameValidator)}/>
                {errors.lname?.message}
            </div>
            <div>
                <label>MOBILE : </label>
                <input type="text" {...register('mobile', formValidator.mobileValidator)}/>
                {errors.mobile?.message}
            </div>
            <div>
                <label>EMAIL : </label>
                <input type="text" {...register('email' , formValidator.emailValidator)}/>
                {errors.email?.message}
            </div>
            <div>
                <label>ADDRESS : </label>
                <input type="text" {...register('add', formValidator.addValidator)}/>
                {errors.add?.message}
            </div>
            <div>
                <input type="Submit" />
            </div>
        </form>
    </div>
  )
}
