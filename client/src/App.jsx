import { useState } from 'react'
import Leftbar from './components/Leftbar'
import Trends from './components/Trends'
import Question from "./components/Question"
import {useSelector} from "react-redux"
import { Navigate, Route, Routes} from "react-router-dom" 


import Login from "./routes/Login"
import Register from "./routes/Register"
import Feed from "./routes/Feed"
import Notfound from "./routes/Notfound"
import Profile from './routes/Profile'
import Askquestion from "./routes/Askquestion"



const ProtectedRoute = ({user, redirectPath='/login'}) => {
  if(!user){
    return <Navigate to= {redirectPath} replace />
  }
  return <Feed />
}


function App() {
  const user = useSelector(state =>state.auth.user)


  return (
    <>
   <Routes>
    <Route path='/login' element= {<Login/>} />
    <Route path='/register' element= {<Register/>} />


    <Route element={<ProtectedRoute user={user}/>}>

    <Route path='/feed' element= {<Feed/>} />
    <Route path='/' element= {<Feed/>} />

    </Route>
    
    <Route path='/profile' element={<Profile />} />

        <Route path='/askquestion' element={<Askquestion />} />



    <Route path='*' element= {<Notfound/>} >



    </Route>
   </Routes>




    
    </>
  )
}

export default App
