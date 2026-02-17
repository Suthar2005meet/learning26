import React from 'react'
import { useForm } from 'react-hook-form'

export const FormDemo8 = () => {

    const{register,handleSubmit,formState:{errors}} = useForm()
    const submitHandler = (data) =>{
        console.log(data);
    }

    const formValidation = {
        nameValidator:{
            required:{
                value:true,
                message:'Name is Required*'
            }
        },
        contactValidator:{
            required:{
                value:true,
                message:'Contact no required*'
            },
            pattern:{
                value:/[6-9]{1}[0-9]{9}$/,
                message:'Invalid contact*'
            }
        },
        promocodeValidator:{
            required:{
                value:true,
                message:'Promocode Required'
            },
            validate:(params)=>{
                return params == 2026 || "Invalid Promocode"
            }
        },
        hobbiesValidator:{
            required:{
                value:true,
                message:'Hobby Are Required'
            },
            validate:(params)=>{
                return params?.length>=2 || "min 2 hobbies are required"
            }
        }
    }

  return (
    <div style={{textAlign:'center'}}>
        <h1>Form Demo 8</h1>
        <form onSubmit={handleSubmit(submitHandler)}>
        <div>
            <label>NAME : </label>
            <input type="text" {...register('name',formValidation.nameValidator)}/>
            {errors.name?.message}
        </div>
        <div>
            <label>CONTACT : </label>
            <input type="text" {...register('contact',formValidation.contactValidator)}/>
            {errors.contact?.message}
        </div>
        <div>
            <label>PROMO CODE : </label>
            <input type="text" {...register('promocode' ,formValidation.promocodeValidator)}/>
            {errors.promocode?.message}
        </div>
        <div>
            <label>HOBBIES : </label> <br />
            CRICKET : <input type='checkbox' value='CRICKET' {...register('hobby',formValidation.hobbiesValidator)}/>
            VOLLYBALL : <input type='checkbox' value='VOLLYBALL' {...register('hobby',formValidation.hobbiesValidator)}/>
            FOOTBALL : <input type='checkbox' value='FOOTBALL' {...register('hobby',formValidation.hobbiesValidator)}/>
            {errors.hobby?.message}
        </div>
        <div>
            <input type="submit" />
        </div>
        </form>
    </div>
  )
}
