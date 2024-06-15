import React from 'react'

function Background() {
  return (
    <>
    <div className='w-full h-screen fixed z-[0]'>

    <div className='absolute margin-[5%] w-full py-10 flex justify-center text-zinc-700 font-semibold text-xl'>Documents</div>
      <h1 className='absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-[13vw] tracking-tighter leading-none font-semibold text-zinc-900'>
      Docs.
      </h1>
    </div>
     
    </>
  )
}

export default Background