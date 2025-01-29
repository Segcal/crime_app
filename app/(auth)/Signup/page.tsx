import Link from 'next/link'
import React from 'react'

export default function SignUpPage() {
  return (
    <div className="bg-gray-300 min-h-screen flex flex-col justify-center items-center px-4">
      <div className="bg-white shadow-lg rounded-xl p-8 max-w-xl border-t-[#5A67D8] shadow-t-md w-full border border-gray-200">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Login</h2>
        
        <form>
          <div className="mb-4">
            <label className="block text-gray-600 text-sm mb-1">Email</label>
            <input 
              type="email" 
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" 
              placeholder="Enter your email" 
            />
          </div>
          
          <div className="mb-6">
            <label className="block text-gray-600 text-sm mb-1">Password</label>
            <input 
              type="password" 
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" 
              placeholder="Enter your password" 
            />
          </div>
          
          <button 
            type="submit" 
            className="w-full bg-blue-500 text-white py-3 rounded-lg font-medium hover:bg-blue-600">
            Login
          </button>
        </form>
        
        <p className="text-center text-gray-500 text-sm mt-4">
          Don't have an account? 
          <Link href="/Signin" className="text-blue-500 hover:underline"> Create One</Link>
        </p>
      </div>
    </div>
  )
}
