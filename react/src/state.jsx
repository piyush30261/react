import { useState } from 'react'
 import reactLogo from './assets/react.svg'
 import viteLogo from '/vite.svg'
import './App.css'


function App() {

  const [data,setdata]= useState("hello")
  
  function fun()
  {
    setdata("check");
     
  }

  return (
    <>

        <h1>state of variable for react</h1>
        <h1>{data}</h1>
        <button onclick={fun}>click</button>

      
          
    </>
  )
}

export default App





