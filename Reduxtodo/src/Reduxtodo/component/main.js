import React from 'react'
import {add} from '../action/action'
import { useState } from 'react'
import {useDispatch,useSelector} from 'react-redux'

const Mai = () => {

  const data=useSelector(store=>store.map((elem)=>{return elem}))
  console.log(data);
  
    const [input,setInput]=useState()
   // console.log(input);
    const dispatch=useDispatch()
  return (
    <>

<input type="text" placeholder="enter todo list" onChange={(e)=>setInput(e.target.value)} ></input>
    <button onClick={()=>dispatch(add(input))}>+ add</button>
    <div>{data.map((elem)=>{
      return (
        <li> {elem}</li>
      )
    })}</div>
    </>
  )
}

export default Mai