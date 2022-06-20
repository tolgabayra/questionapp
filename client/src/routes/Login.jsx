import React from 'react'
import { useState } from 'react'
import {appAxios} from "../utils/appAxios.js"
import { Link } from 'react-router-dom'
import Cookies from 'js-cookie'
import {useDispatch} from "react-redux"
import { useNavigate } from 'react-router-dom'

import {login} from "../features/authSlice.js"

export default function Login() {
let dispatch = useDispatch()
let navigate = useNavigate()

const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [err, setErr] = useState("");


const submitLogin = () => {
  appAxios.post("/api/login",{
    email,
    password
  }).then((res) => {
    console.log(res.data);
    dispatch(login(true))
    Cookies.set("token", res.data.access_token)
    localStorage.setItem("user_id",res.data.user_id)
    navigate("/feed")
  }).catch(err=>{
    setErr("Username or password wrong...")
    console.log(err)
  })
}


  return (
    <>

<div className="h-screen flex">
  <div className="flex w-1/2 bg-gradient-to-tr from-green-800 to-brown-300 i justify-around items-center">
    <div>
      <h1 className="text-white font-bold text-4xl font-sans">QuestionApp</h1>
      <p className="text-white mt-1">The most popular question platform</p>
      <button type="submit" className="block w-28 bg-white text-green-800 mt-4 py-2 rounded-2xl font-bold mb-2">Read More</button>
    </div>
  </div>
  <div className="flex w-1/2 justify-center items-center bg-white">
    <div className="bg-white">
      <h1 className="text-gray-800 font-bold text-2xl mb-1">Hello Again!</h1>
      <p className="text-sm font-normal text-gray-600 mb-7">Welcome Back</p>
      {err && <div className='text-red-500 m-3 text-xl'>{err}</div>}
      <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
        </svg>
        <input className="pl-2 outline-none border-none" type="text"  placeholder="Email Address" onChange={(e)=>setEmail(e.target.value)} />
      </div>
      <div className="flex items-center border-2 py-2 px-3 rounded-2xl">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
        </svg>
        <input className="pl-2 outline-none border-none" type="password"  placeholder="Password" onChange={(e)=>setPassword(e.target.value)} />
      </div>
      <button onClick={submitLogin} type="submit" className="block w-full bg-green-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2">Login</button>
      <Link to="/register" className="text-sm ml-2 hover:text-green-500 cursor-pointer">You haven't account ?</Link>
    </div>
  </div>
</div>
      

    </>
  )
}
