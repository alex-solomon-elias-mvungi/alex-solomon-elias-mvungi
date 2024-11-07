import React from 'react'

export default function huduma() {
  return (
      <div className='w-full h-full'>
      <div className='w-full h-48 bg-white'>jumbotron</div>
      
      <div className='mb-12 mt-12 grid grid-rows-[2rem,2rem,6rem] grid-cols-[1fr,1fr,1fr]'>
        <h1 className='col-start-1 col-end-4 row-start-1 row-end-2 justify-content place-items-center'>OUR SERVICES</h1>
        <div className='col-start-1 col-end-2 row-start-2 row-end-3'>what i offer</div>
        <div className='col-start-2 col-end-3 row-start-2 row-end-3'>what i offer</div>
        <div className='col-start-3 col-end-4 row-start-2 row-end-3'>what i offer</div>
        <div className='col-start-1 col-end-2 row-start-3 row-end-4'>lets develop <br/> your next greate <br/> app aaaaah <br/>dedededeeee</div>
        <div className='col-start-2 col-end-3 row-start-3 row-end-4'>lets develop your <br/> next greate app  <br/> app aaaaah <br/>dedededeeee</div>
        <div className='col-start-3 col-end-4 row-start-3 row-end-4'>lets develop your <br/> next greate app  <br/> app aaaaah <br/>dedededeeee</div>
      </div>

      <div className='mt-6 grid grid-rows-[2rem] grid-cols-[1fr,1fr,1fr,1fr]'>
        <h1 className='col-start-1 col-end-5 row-start-1 row-end-2'>OUR PLANS</h1>
        <div className='flex flex-col'>
          <h1 className=''>pricing</h1>
          <div className=''>basic</div>
          <div className=''>optional</div>
          <div className=''>ultimate</div>
        </div >
        
        <div className='col-start-1 col-end-2 row-start-2 row-end-3 flex flex-col'>
          <h1 className=''>pricing</h1>
          <div className=''>basic</div>
          <div className=''>optional</div>
          <div className=''>ultimate</div>
        </div>

         <div className='col-start-2 col-end-3 row-start-2 row-end-3 flex flex-col'>
          <h1 className=''>pricing</h1>
          <div className=''>basic</div>
          <div className=''>optional</div>
          <div className=''>ultimate</div>
        </div>
        
         <div className='col-start-3 col-end-4 row-start-2 row-end-3 flex flex-col'>
          <h1 className=''>pricing</h1>
          <h3 className=''>basic</h3>
          <h3 className=''>optional</h3>
          <h3 className=''>ultimate</h3>
        </div>
      </div>
    </div>
  )
}
