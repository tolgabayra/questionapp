import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { appAxios } from '../utils/appAxios';

export default function Question(props) {

    const user_id = localStorage.getItem("user_id")
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
      getlikes()
    },[])

    const likesubmit = (post_id) => {
      appAxios.post("/api/like/create",{
        user_id,
        post_id
      }).then((res) => {
        console.log(res);
        setIsActive(current => !current)
      }).catch(err=>{
        console.log(err);
      })
    }


    const getlikes = () => {
      appAxios.get("/api/like/index")
      .then((res) => {
        console.log(res.data);
      }).catch(err=>console.log(err));
    }



    


  return (
    <>
    {props.questions.map(question=>(
        <div className="bg-green-50 shadow rounded-lg pb-4">
        <div className="flex flex-row px-2 py-3 mx-3">
            <div className="w-auto h-auto rounded-full border-2 border-green-500">
                <img className="w-12 h-12 object-cover rounded-sm shadow cursor-pointer" alt="User avatar" src="" />
            </div>
            <div className="flex flex-col mb-2 ml-4 mt-1">
                <div className="flex text-gray-600 text-sm font-semibold"><span className="flex-1 flex-shrink-0">{question.user.name}</span>
                <span className="mx-1 flex-1 flex-shrink-0"></span></div>
                <div className="flex w-full mt-1">
                    <div className="text-blue-700 font-base text-xs mr-1 cursor-pointer">
                        User: {question.user.email}
                    </div>
                    <div className="text-gray-400 font-thin text-xs">
                        • {question.created_at}
                       -  post id : {question.id}
                    </div>
                </div>
            </div>
        </div>
        
        <div className="border-b border-gray-100 p-4"></div>

        <div className="text-gray-600 font-semibold  mb-2 mx-3 px-2">{question.title}</div>
        <div className="text-gray-500 text-sm mb-6 mx-3 px-2"> {question.text}</div>
        <div className="flex justify-start mb-4 border-t border-gray-100">
            <div className="flex w-full mt-1 pt-2 pl-5">
                <span className="bg-white transition ease-out duration-300 hover:text-red-500 border w-8 h-8 px-2 pt-2 text-center rounded-full text-gray-400 cursor-pointer mr-2">
                   
                </span>
                <img className="inline-block object-cover w-8 h-8 text-white border-2 border-white rounded-full shadow-sm cursor-pointer" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt="" />
                <img className="inline-block object-cover w-8 h-8 -ml-2 text-white border-2 border-white rounded-full shadow-sm cursor-pointer" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt="" />
                <img className="inline-block object-cover w-8 h-8 -ml-2 text-white border-2 border-white rounded-full shadow-sm cursor-pointer" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=634&amp;q=80" alt="" />
                <img className="inline-block object-cover w-8 h-8 -ml-2 text-white border-2 border-white rounded-full shadow-sm cursor-pointer" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2.25&amp;w=256&amp;h=256&amp;q=80" alt="" />
            </div>
            <div className="flex justify-end w-full mt-1 pt-2 pr-5">
                <span className="transition ease-out duration-300 hover:bg-blue-50 bg-blue-100 w-8 h-8 px-2 py-2 text-center rounded-full text-blue-400 cursor-pointer mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="14px" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"></path>
                    </svg>
                </span>
                <span className="transition ease-out duration-300 hover:bg-gray-50 bg-gray-100 h-8 px-2 py-2 text-center rounded-full text-gray-100 cursor-pointer">
                <svg className={isActive ? "text-yellow-400": 'text-red-400'} onClick={()=>likesubmit(question.id)} class="h-4 w-4 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                    </svg>
                </span>
            </div>
        </div>
        <div className="flex w-full border-t border-gray-100">
            <div className="mt-3 mx-5 flex flex-row text-xs">
                <div className="flex text-gray-700 font-normal rounded-md mb-2 mr-4 items-center">Comments:<div className="ml-1 text-gray-400 text-ms"> 30</div></div>
                <div className="flex text-gray-700 font-normal rounded-md mb-2 mr-4 items-center">Views: <div className="ml-1 text-gray-400 text-ms"> 60k</div></div>
            </div>
            <div className="mt-3 mx-5 w-full flex justify-end text-xs">
                <div className="flex text-gray-700  rounded-md mb-2 mr-4 items-center">Likes: <div className="ml-1 text-gray-400 text-ms"> 120k</div></div>
            </div>
        </div>
        <div className="relative flex items-center self-center w-full max-w-xl p-4 overflow-hidden text-gray-600 focus-within:text-gray-400">
            <img className="w-10 h-10 object-cover rounded-full shadow mr-2 cursor-pointer" alt="User avatar" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=2000&amp;q=80" />
            <span className="absolute inset-y-0 right-0 flex items-center pr-6">
                <button type="submit" className="p-1 focus:outline-none focus:shadow-none hover:text-blue-500">
             

                </button>
            </span>
             <input type="search" className="w-full py-2 pl-4 pr-10 text-sm bg-gray-100 border border-transparent appearance-none rounded-tg placeholder-gray-400 focus:bg-white focus:outline-none focus:border-blue-500 focus:text-gray-900 focus:shadow-outline-blue" placeholder="Post a comment..." autocomplete="off" />
        </div>
    </div>
    ))}




    </>
  )
}
