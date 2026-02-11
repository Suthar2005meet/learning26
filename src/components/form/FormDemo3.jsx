import { useState } from 'react'
import { useForm } from 'react-hook-form'

export const FormDemo3 = () => {

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
        <h1>SUBMIT FORM</h1>
        <form onSubmit={handleSubmit(submitHandler)}>
            <div>
                <label>FIRST NAME : </label>
                <input type="text" placeholder='FIRST NAME' {...register('firstname')}/>
            </div>
            <div>
                <label>LAST NAME : </label>
                <input type="text" placeholder='LAST NAME' {...register('lastname')}/>
            </div>
            <div>
                <label>MOBILE NO. : </label>
                <input type="text" placeholder='Mobile Number' {...register('mobile')}/>
            </div>
            <div>
                <label>GENDER : </label>
                MALE : <input type='radio' value='MALE' {...register('gender')}/>
                FEMALE : <input type='radio' value='FEMALE' {...register('gender')}/>
            </div>
            <div>
                <label>GAMES : </label>
                CRICKET : <input type='checkbox' value='CRICKET' {...register('game')}/>
                VOLLYBALL : <input type='checkbox' value='VOLLYBALL' {...register('game')}/>
                FOOTBALL : <input type='checkbox' value='FOOTABALL' {...register('game')}/>
                HOCKEY : <input type='checkbox' value='HOCKEY' {...register('game')}/>
                TABLE TANIS : <input type='checkbox' value='TABLE TANIS' {...register('game')}/>
            </div>
            <div></div>
            <div>
                <input type="submit" />
            </div>
        </form>
        {
                issubmited == true && <div>
                    <h1>FIRST NAME = {userData.firstname}</h1>
                    <h2>LAST NAME = {userData.lastname}</h2>
                    <h2>MOBILE NO. = {userData.mobile}</h2>
                    <h2>GENDER = {userData.gender}</h2>
                    <h2>GAME = {userData.game}</h2>
                </div>
            }
    </div>
  )
}
