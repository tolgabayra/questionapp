import Cookies from 'js-cookie'
import React from 'react'
import { useNavigate } from 'react-router-dom'

import { Link } from 'react-router-dom'
export default function Leftbar(props) {
	let navigate = useNavigate()

	const logout = () => {
	  Cookies.remove("token",{ path: 'http://localhost:3000/feed' })
	  localStorage.clear();
	  window.location.reload(true)
	  navigate("/login")
	}

  return (
    <>
    	<div class="flex flex-col w-64 py-4 pr-3 bg-slate-100">
			<Link className='px-3 py-2 mt-2 text-lg font-medium rounded-sm hover:bg-green-300' to ="/register">Register</Link>
			<Link className='px-3 py-2 mt-2 text-lg font-medium rounded-sm hover:bg-green-300' to ="/login">Login</Link>
			<Link className='px-3 py-2 mt-2 text-lg font-medium rounded-sm hover:bg-green-300' to ="/profile">Profile</Link>

			<button onClick={logout} className='px-3 py-2 mt-2 text-lg font-medium rounded-sm border border-red-500 hover:bg-red-600 hover:text-white'>Logout</button>

			<a class="flex px-3 py-2 mt-2 text-lg rounded-sm font-medium hover:bg-green-200" href="#">
				<span class="flex-shrink-0 w-10 h-10 bg-green-400 rounded-full"></span>
				<div class="flex flex-col ml-2">
					<span class="mt-1 text-sm font-semibold leading-none">{props.userdata.name}</span>
					<span class="mt-1 text-xs leading-none">{props.userdata.email}</span>
				</div>
			</a>
		</div>
        
    </>
  )
}
