import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";

function Cards() {
  return (
    <div className='overflow-hidden relative w-60 h-72 p-5 rounded-[20px] bg-zinc-900/90 '>
        <FaRegFileAlt />
        <p className='text-xs mt-5 font-semibold leading-tight' >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque dolores, eaque esse quisquam mollitia consequatur exercitationem quaerat similique maxime, est non laboriosam, necessitatibus consectetur repudiandae fugiat nostrum suscipit accusantium vel.</p>
        <div className='footer absolute bottom-0 bg-sky-200 w-full h-20 left-0'></div>


    </div>



  )
}

export default Cards