import { useState } from 'react'
import { useForm } from 'react-hook-form'

export const FormDemo4 = () => {

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
        <h1>FEEDBACK</h1>
        <form onSubmit={handleSubmit(submitHandler)}>
            <div>
                <label>NAME : </label>
                <input type="text" placeholder='NAME' {...register('name')}/>
            </div>
            <div>
                <label>SUBJECT : </label>
                <input type="text" placeholder='SUBJECT' {...register('subject')}/>
            </div>
            <div>
                <label>PERFORMANCE : </label>
                VERY BAD : <input type="radio" value='VERY BAD' {...register('performance')} />
                BAD : <input type="radio" value='BAD' {...register('performance')} />
                INTERMEDIATE : <input type="radio" value='INTERMEDIATE' {...register('performance')} />
                BEST : <input type="radio" value='BEST' {...register('performance')} />
                VERY BEST : <input type="radio" value='VERY BEST' {...register('performance')} />
            </div>
            <div>
                <label>SUGGEASTION</label>
                <input type="text" placeholder='Suggestiion' {...register('suggest')}/>
            </div>
            <div>
                <label>WHY ?</label>
                <input type="text" placeholder='What`s Problem' {...register('problem')}/>
            </div>
            <div>
                <input type="submit" />
            </div>
        </form>
        {
                issubmited == true && <div>
                    <h1>NAME = {userData.name}</h1>
                    <h2>SUBJECT = {userData.subject}</h2>
                    <h2>PERFORMANCE = {userData.performance}</h2>
                    <h2>SUGGESTION = {userData.suggest}</h2>
                    <h2>WHY? == {userData.problem}</h2>
                </div>
            }
    </div>
  )
}
