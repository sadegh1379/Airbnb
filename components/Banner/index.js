function Banner() {
  return (
    <div className="relative shadow-lg">
          <img className="object-cover lg:h-[500px] md:h-[400px] sm:h-[300px] min-w-full" src="/images/banner.jpg"/>
          <div className="absolute top-1/2 text-center w-full">
               <p className="text-white font-bold text-sm md:text-2xl">Not sure where to go? Perfect.</p>
               <button className="bg-white text-xs md:text-base shadow-sm hover:shadow-lg active:scale-90 transition duration-150 px-7 py-3 rounded-full my-2 font-bold text-purple-500">I am flexible</button>
          </div>
    </div>
  )
}

export default Banner
