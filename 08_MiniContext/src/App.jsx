import { useState } from 'react'
import UserContextProvider from './context/UserContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'


function App() {
 

  return (
    <UserContextProvider>
      <h1>Hi Ritika</h1>
      <Login />
      <Profile />
    </UserContextProvider>

    // <UserContext.Provider>
    //   <h1>Hi Ritika</h1>
    // </UserContext.Provider>
    // aise bhi de sakte hai
  )
}

export default App
