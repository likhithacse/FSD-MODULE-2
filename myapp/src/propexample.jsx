import React from 'react'
import { useState } from 'react'
import Diwali from './components/Diwali'
export default function Propexample() {
    const [uName, setUname] = useState("")
  return (
    <div>
     <h1>Happy New Year Vijay!</h1>
           <h1>Happy New Year {uName}!</h1>
           <input type='text' 
           onChange={(e)=>setUname(e.target.value)}/>
           <Diwali user={uName}/>
    </div>
  )
}