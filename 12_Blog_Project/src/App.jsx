import { useState, useEffect } from "react";
import { useDispatch } from 'react-redux'
import "./App.css";

import authService from './appwrite/auth'
import { login, logout } from './store/authSlice'
import { Header, Footer} from './components/index'
import { Outlet } from 'react-router-dom'

function App() {
  
  const [loading, setLoading] = useState(true)

  const dispatch = useDispatch()

  useEffect(() => {
    authService.getCurrentUser()
    .then(() => {
      if (userData) {
        dispatch(login({userData}))
      } else {
        dispatch(logout())
      }
    })
    .finally(() => setLoading(false))
  }, [])


  return !loading ? (
    <div className="min-h-screen flex flex-wrap bg-gray-600 content-between border">
      <div className="w-full block">
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  ) : null
  
}

export default App;
