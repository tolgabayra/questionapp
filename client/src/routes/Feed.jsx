import Cookies from 'js-cookie'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

import Leftbar from '../components/Leftbar'
import Question from '../components/Question'
import Trends from '../components/Trends'
import { appAxios } from '../utils/appAxios'

export default function Feed() {
const [userdata, setUserdata] = useState([])
const [questions, setQuestions] = useState([]);


useEffect(() => {
	getUser();  
	getQuestions();
},[])


const getUser = () => {
  appAxios.get("/api/me",{
	headers:{'Authorization' : `Bearer ${Cookies.get("token")}`}
  }).then((res) => {
	console.log(res.data);
	setUserdata(res.data)
  }).catch(err=>{
	console.log(err);
  })
}

const getQuestions = () => {
	appAxios.get("/api/post/index")
	.then((res) => {
	  console.log(res.data);
	  setQuestions(res.data)
	}).catch(err=>{
	  console.log(err);
	})
  }
  



  return (
    <>
      
<div className="flex justify-center w-screen h-screen px-4 text-gray-700">
	<div className="flex w-full max-w-screen-lg">
	<Leftbar userdata={userdata} />

		<div className="flex flex-col flex-grow border-l border-r border-gray-300">
			<div className="flex justify-between flex-shrink-0 px-8 py-4 border-b border-gray-300">
				<h1 className="text-xl font-semibold">Questions</h1>
				<Link to='/askquestion' className="flex items-center h-8 px-2 text-sm bg-green-300 rounded-lg hover:bg-green-200">Ask Question</Link>
			</div>
			<div className="flex-grow h-0 overflow-auto">
				<Question questions={questions} />
                
			</div>
		</div>
		<div className="flex flex-col flex-shrink-0 w-1/4 py-4 pl-5">
		<Trends />
		</div>
	</div>
</div>


<a className="fixed flex items-center justify-center h-8 pr-2 pl-1 bg-blue-600 rounded-full bottom-0 right-0 mr-4 mb-4 shadow-lg text-blue-100 hover:bg-blue-600" href="https://twitter.com/lofiui" target="_top">
	<div className="flex items-center justify-center h-6 w-6 bg-blue-500 rounded-full">
		<svg className="w-4 h-4 fill-current" viewBox="0 0 24 24r-jwli3a r-4qtqp9 r-yyyyoo r-16y2uox r-1q142lx r-8kz0gk r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1srniue"><g><path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"></path></g></svg>
	</div>
	<span className="text-sm ml-1 leading-none">{userdata.email}</span>
</a>
      
    </>
  )
}
