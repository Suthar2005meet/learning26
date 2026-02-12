import React from 'react'
import { useForm } from 'react-hook-form'

export const FormDemo7 = () => {

    const {register, handleSubmit, formState:{errors}} = useForm()
    console.log("erroos...", errors)
    const submitHandle = (data) => {
        console.log(data)
    }
    const formValidator={
        snameValidator:{
            required:{
                value:true,
                message:"Student Name is Required*"
            },
        },
        cnameValidator:{
            required:{
                value:true,
                message:"College Name is Required*"
            },
        },
        enrollValidator:{
            required:{
                value:true,
                message:"Enrollment No is required*"
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
        <h1>STUDENT</h1>
        <form onSubmit={handleSubmit(submitHandle)}>
            <div>
                <label>STUDENT NAME : </label>
                <input type='text' {...register('sname', formValidator.snameValidator)}/>
                {errors.sname?.message}
            </div>
            <div>
                <label>COLLEGE NAME : </label>
                <input type="text" {...register('cname', formValidator.cnameValidator)}/>
                {errors.cname?.message}
            </div>
            <div>
                <label>ENROLLEMENT NO : </label>
                <input type="text" {...register('enroll', formValidator.enrollValidator)}/>
                {errors.enroll?.message}
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

