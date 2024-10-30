import React from 'react'
// Supports weights 100-900
import '@fontsource-variable/onest';
import { Link } from 'react-router-dom'

function Header() {
  return (
  
    <div className="bg-gray-100 font-sans w-full  m-0">
      <div className="bg-white shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <div className='max-lg:ml-[44%]'>

            </div>
    
            <div className="hidden sm:flex sm:items-center">
              <Link to="/" className="text-gray-800 text-lg font-semibold hover:text-purple-600 mr-4">Alumnos</Link>
              <Link to="/men" className="text-gray-800 text-lg font-semibold hover:text-purple-600 mr-4">Hombres</Link>
              <Link to="/women" className="text-gray-800 text-lg font-semibold hover:text-purple-600 mr-4">Mujeres</Link>
            
              
            </div>
    
            <div className="hidden sm:flex sm:items-center">
              <a href="#" className=" hidden text-gray-800 text-sm font-semibold hover:text-purple-600 mr-4">Sign in</a>
              <a href="#" className="hidden text-gray-800 text-sm font-semibold border px-4 py-2 rounded-lg hover:text-purple-600 hover:border-purple-600">Sign up</a>
            </div>
    

          </div>
          
          <div className="block sm:hidden bg-white border-t-2 py-2">
            <div className="flex justify-center gap-[5%]">
            <Link to="/" className="text-gray-800 text-sm font-semibold hover:text-purple-600 mr-4">Alumnos</Link>
              <Link to="/men" className="text-gray-800 text-sm font-semibold hover:text-purple-600 mr-4">Hombres</Link>
              <Link to="/women" className="text-gray-800 text-sm font-semibold hover:text-purple-600 mr-4">Mujeres</Link>
            
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header