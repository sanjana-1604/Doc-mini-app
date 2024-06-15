import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";
import { GrFormClose } from "react-icons/gr";
import { motion } from "framer-motion"

function Cards({data,reference}) {
  return (
    <motion.div drag dragConstraints={reference} whileDrag={{scale:1.2}} dragElastic={0.2} className='flex shrink-0 overflow-hidden text-color relative w-60 h-72 px-8 py-10 rounded-[30px] bg-zinc-900/90 '>
        <FaRegFileAlt />
        <p className=' text-xs mt-5 font-semibold leading-tight' >{data.desc}</p>
        <div className='footer bottom-0 absolute w-full h-20 left-0'>
        <div className='py-3 px-8 flex items-center justify-between '>
        <h6 className='size-[25px]'>{data.filesize}</h6>
        <span className='w-5 h-5 bg-zinc-700 rounded-full flex items-center justify-between '>
        {data.close? <GrFormClose size color='#000' /> :<MdOutlineFileDownload size color='#000' />}
        
        </span>        
        </div>
        {data.tag.isOpen?(<div className={`tag w-full py-4 h-5 ${data.tag.tagcolor==="blue"?"bg-blue-700":"bg-green-700"} flex items-center justify-center`}>
            <h3 className='text-xs font-semibold'>{data.tag.tagtitle}</h3>
        </div>):null}
        
        </div>
       
        


    </ motion.div>



  )
}

export default Cards