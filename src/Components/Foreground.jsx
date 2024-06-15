import React, { useRef } from 'react'
import Cards from './Cards'

function Foreground() {
    const ref=useRef(null);
const data=[{
    desc:"i am best , intelligent, smart, loyal.", filesize:".4mb",close:true,tag:{isOpen:true,tagtitle:"Download Now", tagcolor:"green"},

},
{
    desc:"i am best , intelligent, smart, loyal.", filesize:".4mb",close:true,tag:{isOpen:true,tagtitle:"Download Now", tagcolor:"blue"},

},
{
    desc:"i am best , intelligent, smart, loyal.", filesize:".4mb",close:true,tag:{isOpen:false,tagtitle:"Download Now", tagcolor:"green"},

}];



  return (
    <div ref={ref} className='fixed z-[1] left-0 top-0 w-full h-full flex gap-5 flexwrap-wrap p-5 '>
       {data.map((item,index)=>(
        <Cards data={item} reference={ref}/>
       ))}
    </div>
  )
}

export default Foreground