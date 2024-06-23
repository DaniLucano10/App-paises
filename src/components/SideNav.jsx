

export const SideNav = () => {
  return (
    
    <div className="p-7 bg-gray-600 shadow-sm justify-center items-center md:h-screen ">
      <div className="grid grid-cols-1 gap-5">
        <a href="#" className="py-3 px-12 rounded-md bg-gray-400 text-black">
          Logo
        </a>
        <a href="#" className="py-1 px-12 rounded-md bg-white text-black">
          Home
        </a>
      </div>
      <div className="p-5 grid grid-cols-1 gap-5 justify-center items-center">
        <a>Vista1</a>
        <a>Vista2</a>
      </div>

    </div>


  )
}
