import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  // let myObj = {
  //   type: 'a',
  // }

  // let newArr = [1, 2, 3]

  return (
    <>
     <h1 className='bg-green-400 text-black p-4 rounded-xl mb-5'>Ritika is Here</h1>
     {/* <Card cahnnel='Ritzyuv' someObj={newArr} /> */}
     <Card userName='Ritika' btnText='Check Me Out' />
     <Card userName='Yuv' />
    </>
  )
}

export default App
