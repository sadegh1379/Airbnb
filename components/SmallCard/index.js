import Image from 'next/image'
import React from 'react'

function SmallCard({ thumbnail, title, id }) {
     return (
          <div className="flex cursor-pointer rounded-xl transition transform hover:scale-110 duration-200 hover:bg-gray-100">
               <img className="rounded-xl" style={{ width: 50, height: 50 }} src={thumbnail} />
               <div className='pl-1'>
                    <p className="text-xl">{title.slice(0, 10)}...</p>
               </div>
          </div>
     )
}

export default SmallCard
