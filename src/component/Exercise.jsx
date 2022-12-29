import React, { useEffect, useRef, useState } from 'react'

const Exercise = ({box3}) => {
    const input = useRef()
    const [message , setmessage] = useState('Hi 👋 my friend , help me find the mistake !')
    

    const handleSubmit = (e)=>{
        e.preventDefault()
        if(input.current.value.toLowerCase() != box3.exercise.reponse){
            setmessage('The answer is wrong 😭') 

        }else{
            setmessage('The answer is correct , Thank you  😍') 
            
        }
        input.current.value =''

   
    }

  return (
    <>
      <section className='py-5'>
        <div className='title-box px-3'><h2 >{box3.name} Exercises</h2>  </div>
        <form onSubmit={handleSubmit} className='excercise' action="">
            <h2>Test Yourself With Exercises</h2>
            <div className='exercise_win'>
            <h2>Exercise:</h2>
            <p>{message }</p>
            <pre><code className={`language-${box3.name}`}>{box3.exercise.question}</code></pre>
            <input ref={input} type="text" maxLength='12' className="form-control"  placeholder="Whate is this code missing !"/>
            <button type='submit' className='btn btn-primary btn-sm my-3'>submit</button>

            
            
            </div>
        </form>
    

      </section>
    </>
  )
}

export default Exercise