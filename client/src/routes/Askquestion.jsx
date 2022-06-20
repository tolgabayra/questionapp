import React from 'react'
import { useState } from 'react'
import {appAxios} from "../utils/appAxios"
import { useNavigate } from 'react-router-dom'

export default function Askquestion() {
    let navigate = useNavigate()

    const [title, setTitle] = useState("")
    const [text, setText] = useState("")
    const user_id = localStorage.getItem("user_id")

    const submitquestion = () => {
      appAxios.post("api/post/create",{
        title,
        text,
        user_id
      }).then((res) => {
        console.log(res);
        setTimeout(() => {
          navigate("/feed")
        }, "1000")
      }).catch(err=>{
        console.log(err);
      })
    }


  return (
    <>
    <div className="w-full">
    <div className="bg-green-400 to-green-300 h-80"></div>
    <div className="max-w-3xl mx-auto px-6 sm:px-6 lg:px-8 mb-12">
        <div className="bg-gray-500 w-full shadow rounded p-8 sm:p-12 -mt-72">
            <p className="text-3xl font-bold leading-7 text-center text-white">Ask your question</p>
             
                <div className="md:flex items-center mt-8">
                    <div className="w-full flex flex-col">
                        <label className="font-semibold leading-none text-white">Title</label>
                        <input onChange={(e)=>setTitle(e.target.value)} type="text" className="leading-none text-gray-900 p-3 focus:outline-none focus:border-green-700 mt-4 bg-gray-200 border rounded border-gray-200"/>
                    </div>
                    
                </div>
                <div>
                    <div className="w-full flex flex-col mt-8">
                        <label className="font-semibold leading-none text-white">Question</label>
                        <textarea onChange={(e)=>setText(e.target.value)} type="text" className="h-40 text-base leading-none text-gray-900 p-3 focus:oultine-none focus:green-blue-700 mt-4 bg-gray-200 border rounded border-gray-200"></textarea>
                    </div>
                </div>
                <div className="flex items-center justify-center w-full">
                    <button onClick={submitquestion} className="mt-9 font-semibold leading-none text-white py-4 px-10 bg-green-700 rounded hover:bg-green-600 focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 focus:outline-none">
                        Submit Question
                    </button>
                </div>
        </div>
    </div>
</div>
      
    </>
  )
}
