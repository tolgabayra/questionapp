import Cookies from 'js-cookie'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

import {appAxios} from "../utils/appAxios"



export default function Profile() {
  const apiurl = 'http://127.0.0.1:8000/api'

  const [userdata, setUserdata] = useState([]);
  const [userfile, setUserfile] = useState("");
  const [imageData, setImageData] = useState('');


  useEffect(() => {
    getme()
    getimage()
  },[])

  const getme = () => {
    appAxios.get("/api/me",{
    headers:{
      'Authorization' : `Bearer ${Cookies.get("token")}`,
    }
    }).then((res) => {
    console.log(res.data);
    setUserdata(res.data)
    console.log(imageData);

    }).catch(err=>{
    console.log(err);
    })
  }

  const getimage = () => {
    let user_id = localStorage.getItem("user_id")

    appAxios.get(`/api/getimage/${user_id}`,{
      headers:{
        'Authorization' : `Bearer ${Cookies.get("token")}`      }
    }).then((res) => {
      setImageData(res.data)
      console.log(res);
    }).catch(err=>{
      console.log(err);
    })
  }

  const submitProfileImage = () => {
    let user_id = localStorage.getItem("user_id")
    
    appAxios.post(`/api/upload/${user_id}`,{
      headers:{'Authorization' : `Bearer ${Cookies.get("token")}`},
      image: userfile
    }).then((res) => {
      console.log(res);
    }).catch(err=>{
      console.log(err);
    })
  }

  




  return (
    <>
    <div className="bg-slate-500 w-full py-10 px-10">
  <div>
    <div className="sm:flex space-x-7 md:items-start items-center">
      <div className="mb-4">
        
      <img src={`${apiurl}/getimage/${localStorage.getItem("user_id")}`}  />
        <label  className=" flex flex-col w-full h-32 border-4 border-blue-200 border-dashed hover:bg-gray-100 hover:border-gray-300">
                    <div className="flex flex-col items-center justify-center pt-7">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 text-gray-400 group-hover:text-gray-600"
                            fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                        </svg>
                        <p className="pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600">
                            Attach a photo</p>
                    </div>
                    <input onChange={(e)=>setUserfile(e.target.value)} type="file" class="opacity-0" />
                </label>
                <button onClick={submitProfileImage} className='bg-gray-200 rounded-lg mt-3 p-1 hover:bg-gray-400'>Save</button>

      </div>
      <div>
        <h1 className="text-slate-100 text-4xl font-bold my-2">{userdata.name}</h1>
        <p className="text-slate-100 text-lg tracking-wide mb-6 md:max-w-lg">Full stack web developer and online instructor, specializiing in mostly JS, but also write Python, PHP and some other stuff.</p>
      </div>
    </div>
  </div>
  <div className="mt-8 sm:grid grid-cols-3 sm:space-x-4">
    <div className="bg-slate-600 p-6 rounded-md mb-4">
      <span className="text-slate-400 text-md">Email Adress</span>
      <h2 className="text-slate-100 text-2xl font-semibold">{userdata.email}</h2>
    </div>

    <div className="bg-slate-600 p-6 rounded-md mb-4">
      <span className="text-slate-400 text-md">Twitter</span>
      <h2 className="text-slate-100 text-2xl font-semibold">@esrabyyr</h2>
    </div>
  </div>
  <div className="sm:grid lg:grid-cols-4 grid-cols-2 sm:gap-x-4">
    <div className="flex justify-between items-center bg-slate-600 p-6 rounded-md mb-4">
      <div>
        <span className="text-md text-slate-400">Followers</span>
        <h1 className="text-3xl font-bold text-slate-100">47155</h1>
      </div>
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      </div>
    </div>
    <div className="flex justify-between items-center bg-slate-600 p-6 rounded-md mb-4">
      <div>
        <span className="text-md text-slate-400">Following</span>
        <h1 className="text-3xl font-bold text-slate-100">9322</h1>
      </div>
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      </div>
    </div>
 
   
  </div>
  <Link to="/feed" className='bg-red-500 p-2 hover:bg-red-600 text-white rounded-xl'>Go to feed</Link>

</div> 
    </>
  )
}
