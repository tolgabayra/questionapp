import React from 'react'
import { Link } from 'react-router-dom'


export default function Register() {
  return (
    <><div class="h-screen flex">
    <div class="flex w-1/2 bg-gradient-to-tr from-green-800 to-brown-300 i justify-around items-center">
      <div>
        <h1 class="text-white font-bold text-4xl font-sans">QuestionApp</h1>
        <p class="text-white mt-1">The most popular question platform</p>
        <button type="submit" class="block w-28 bg-white text-green-800 mt-4 py-2 rounded-2xl font-bold mb-2">Read More</button>
      </div>
    </div>
    <div class="flex w-1/2 justify-center items-center bg-white">
      <form class="bg-white">
        <h1 class="text-gray-800 font-bold text-2xl mb-1">Create Account!</h1>
        <p class="text-sm font-normal text-gray-600 mb-7">Welcome Back</p>
        <div class="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
  <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
</svg>
          <input class="pl-2 outline-none border-none" type="text" name="" id="" placeholder="Name" />
        </div>

        <div class="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
          </svg>
          <input class="pl-2 outline-none border-none" type="text" name="" id="" placeholder="Email Address" />
        </div>

        <div class="flex items-center border-2 py-2 px-3 rounded-2xl">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
          </svg>
          <input class="pl-2 outline-none border-none" type="password" name="" id="" placeholder="Password" />
        </div>
        <button type="submit" class="block w-full bg-green-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2">Login</button>
        <Link to="/login" class="text-sm ml-2 hover:text-green-500 cursor-pointer">Do You have a account ?</Link>
      </form>
    </div>
  </div>


    </>
  )
}
