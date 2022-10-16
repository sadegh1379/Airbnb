import Image from "next/image"
import bnbIcon from '../../assets/images/bnb.jpg';
import { TbBrandAirbnb, TbSearch, TbWorld } from 'react-icons/tb'
import { FiMenu } from 'react-icons/fi'
import { HiUserCircle } from 'react-icons/hi'

function Header() {
     return (
          <header className="bg-white sticky top-0 grid grid-cols-3 items-center p-2 sm:p-4 shadow-md">
               {/* Left */}
               <div className="h-10 flex items-center text-pink-600 text-2xl p-1">
                    <TbBrandAirbnb size={25} />
                    <h3 className="md:text-2xl font-bold text-sm">Airbnb</h3>
               </div>
               {/* center */}
               <div className="flex items-center md:border-2 rounded-full p-1 pl-3 hover:shadow-md transition ease-linear duration-200">
                    <input className="flex-grow outline-none text-xs lg:text-base" type="text" placeholder="Start your search" />
                    <TbSearch size={30} className="hidden md:inline bg-pink-600 cursor-pointer text-white p-1 rounded-full" />
               </div>
               {/* Right */}
               <div className="flex justify-end text-gray-500 items-center space-x-4">
                    <div className="hidden md:flex cursor-pointer items-center space-x-2">
                         <span className="font-bold lg:text-sm md:text-xs">Become a host</span>
                         <TbWorld size={20} />
                    </div>
                    <div className="flex space-x-2 border rounded-full px-2 py-1 cursor-pointer active:shadow">
                         <FiMenu size={22} />
                         <HiUserCircle size={22} />
                    </div>
               </div>
          </header>
     )
}

export default Header
