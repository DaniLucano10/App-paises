import { useState } from "react";
import {  Main } from "./Main"
import { SideNav } from "./SideNav"
import { Menu, X } from "lucide-react";

export const Layout = () => {

  const [isSideNavOpen, setIsSideNavOpen] = useState(false);

  const toggleSideNav = () => {
    setIsSideNavOpen(!isSideNavOpen);
  };

  const closeSideNav = () => {
    setIsSideNavOpen(false);
  };
  

  return (
    
    <div className="flex flex-col sm:flex-row">
      {/* Botón para mostrar/ocultar el SideNav en móviles */}
      <div className="sm:hidden">
        <button 
          onClick={toggleSideNav} 
          className="p-2 bg-blue-500 text-white m-2 rounded"
        >
          <Menu />
        </button>
      </div>

      {/* SideNav */}
      <div className={`fixed sm:relative sm:w-64 ${isSideNavOpen ? 'block' : 'hidden'} sm:block  text-white h-full`}>
        <div className="flex justify-end sm:hidden">
          <button 
            onClick={closeSideNav} 
            className="p-2 m-2 bg-red-500 text-white rounded"
          >
            <X/>
          </button>
        </div>
        <SideNav />
      </div>

      {/* Contenido principal */}
      <div className="flex-grow  ">
        <Main />
      </div>
    </div>
  
  )
}
