import React from 'react'

export default function huduma() {
  return (
      <div className='w-full h-full'>
      <div className='w-full h-48 bg-white'>jumbotron</div>
      
      <div className='mb-12 mt-12 grid grid-rows-[2rem,6rem,6rem] grid-cols-[1fr,1fr,1fr]'>
        <h1 className='col-start-1 col-end-4 row-start-1 row-end-2 justify-content place-items-center'>OUR SERVICES</h1>
        <div className='col-start-1 col-end-2 row-start-2 row-end-3'>what i offer</div>
        <div className='col-start-2 col-end-3 row-start-2 row-end-3'>what i offer</div>
        <div className='col-start-3 col-end-4 row-start-2 row-end-3'>what i offer</div>
        <div className='col-start-1 col-end-2 row-start-3 row-end-4'>lets develop your next greate app</div>
        <div className='col-start-2 col-end-3 row-start-3 row-end-4'>lets develop your next greate app</div>
        <div className='col-start-3 col-end-4 row-start-3 row-end-4'>lets develop your next greate app</div>
      </div>

      <div className='grid grid-rows-[2rem,6rem,6rem] grid-cols-[1fr,1fr,1fr,1fr]'>
        <h1 className='col-start-1 col-end-5 row-start-1 row-end-2'>OUR PLANS</h1>
        <h1 className='col-start-1 col-end-2 row-start-2 row-end-3'>pricing</h1>
        <div className='col-start-2 col-end-3 row-start-2 row-end-3'>basic</div>
        <div className='col-start-3 col-end-4 row-start-2 row-end-3'>optional</div>
        <div className='col-start-4 col-end-5 row-start-2 row-end-3'>ultimate</div>
        
        <h1 className='col-start-1 col-end-2 row-start-3 row-end-4'>pricing</h1>
        <div className='col-start-2 col-end-3 row-start-3 row-end-4'>basic</div>
        <div className='col-start-3 col-end-4 row-start-3 row-end-4'>optional</div>
        <div className='col-start-4 col-end-5 row-start-3 row-end-4'>ultimate</div>
      </div>
    </div>
  )
}
