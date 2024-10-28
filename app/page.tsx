import Image from "next/image"
import { format } from "path";

export default function Root() {
  const currentTime: Date = new Date();

  const formatedTime: string = new Intl.DateTimeFormat('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true
  }).format(currentTime)

  const currentDate: Date = new Date()

  const formattedDate: string = Intl.DateTimeFormat('en-US',
    {
      year: 'numeric',
      month: 'long',
      // day: 'numeric'
    }
  ).format(currentDate)

  return (
    <main className="w-full h-full grid grid-rows-3 grid-cols-2 p-14">
      <div>
        <Image src='/passport.PNG' width={100} height={100} alt="passport" className="border rounded-lg" />
        
        <h1 className="mt-7 font-bold text-4xl">I'AM ALEX SOLOMON ELIAS MVUNGI</h1>

        <p className="mt-2">
          Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Itaque, consequuntur illum quidem
        </p>

      </div>

      <div className="ml-7">
        <p className="font-medium text-2xl"> web developer passionate creating greate digital expirience for the web </p>

        <button  className="text-xs text-black border rounded-full bg-zinc-300 w-28 h-9 mt-4 mr-2">Talk With Me</button>
        <button className="text-xs text-black border rounded-full bg-zinc-300 w-28 h-9">See My Work</button>
        
        <div className="mt-8 border-t-8 border-indigo-500">
        <h3 className="mt-4">Working expirience</h3>
        <div className="px-3 py-2 mt-2 grid grid-rows2 grid-cols-[30px_minmax(100px,_1fr)_100px] border border-slate-50 rounded-full">
          <Image src='/passport.PNG' width={15} height={15} alt="passport" className="col-start-1 col-end-2 row-start-1 row-span-2 justify-self-center self-center border rounded-full"/>
          <h4 className="col-start-2 col-end-3 row-start-1 row-span-1 text-xs">Part time Product Design</h4>
          <h4 className="text-xs col-start-2 col-end-3 row-start-2 row-span-1 font-semibold">levai</h4>
            <h4 className="col-start-3 col-end-4 row-start-1 row-span-2 justify-self-center self-center" style={{ fontSize: '9px'}}>{formattedDate} - present</h4>
          </div>
          
           <div className="px-3 py-2 mt-2 grid grid-rows2 grid-cols-[30px_minmax(100px,_1fr)_100px] border border-slate-50 rounded-full">
          <Image src='/passport.PNG' width={15} height={15} alt="passport" className="col-start-1 col-end-2 row-start-1 row-span-2 justify-self-center self-center border rounded-full"/>
          <h4 className="col-start-2 col-end-3 row-start-1 row-span-1 text-xs">Part time Product Design</h4>
          <h4 className="text-xs col-start-2 col-end-3 row-start-2 row-span-1 font-semibold">levai</h4>
            <h4 className="col-start-3 col-end-4 row-start-1 row-span-2 justify-self-center self-center" style={{ fontSize: '9px'}}>{formattedDate} - {formattedDate}</h4>
          </div>

          <div className="px-3 py-2 mt-2 grid grid-rows2 grid-cols-[30px_minmax(100px,_1fr)_100px] border border-slate-50 rounded-full">
          <Image src='/passport.PNG' width={15} height={15} alt="passport" className="col-start-1 col-end-2 row-start-1 row-span-2 justify-self-center self-center border rounded-full"/>
          <h4 className="col-start-2 col-end-3 row-start-1 row-span-1 text-xs">Part time Product Design</h4>
          <h4 className="text-xs col-start-2 col-end-3 row-start-2 row-span-1 font-semibold">levai</h4>
            <h4 className="col-start-3 col-end-4 row-start-1 row-span-2 justify-self-center self-center" style={{ fontSize: '9px'}}>{formattedDate} - {formattedDate}</h4>
          </div>
        </div>

         <div className="mt-8 border-t-8 border-indigo-500">
        <h3 className="mt-4">Award & Recognition</h3>
        <div className="px-3 py-2 mt-2 grid grid-rows2 grid-cols-[30px_minmax(100px,_1fr)_100px] border border-slate-50 rounded-full">
          <Image src='/passport.PNG' width={15} height={15} alt="passport" className="col-start-1 col-end-2 row-start-1 row-span-2 justify-self-center self-center border rounded-full"/>
          <h4 className="col-start-2 col-end-3 row-start-1 row-span-1 text-xs">Part time Product Design</h4>
          <h4 className="text-xs col-start-2 col-end-3 row-start-2 row-span-1 font-semibold">levai</h4>
            <h4 className="col-start-3 col-end-4 row-start-1 row-span-2 justify-self-center self-center" style={{ fontSize: '9px'}}>{formattedDate}</h4>
          </div>
          
           <div className="px-3 py-2 mt-2 grid grid-rows2 grid-cols-[30px_minmax(100px,_1fr)_100px] border border-slate-50 rounded-full">
          <Image src='/passport.PNG' width={15} height={15} alt="passport" className="col-start-1 col-end-2 row-start-1 row-span-2 justify-self-center self-center border rounded-full"/>
          <h4 className="col-start-2 col-end-3 row-start-1 row-span-1 text-xs">Part time Product Design</h4>
          <h4 className="text-xs col-start-2 col-end-3 row-start-2 row-span-1 font-semibold">levai</h4>
            <h4 className="col-start-3 col-end-4 row-start-1 row-span-2 justify-self-center self-center" style={{ fontSize: '9px'}}>{formattedDate}</h4>
          </div>

          <div className="px-3 py-2 mt-2 grid grid-rows2 grid-cols-[30px_minmax(100px,_1fr)_100px] border border-slate-50 rounded-full">
          <Image src='/passport.PNG' width={15} height={15} alt="passport" className="col-start-1 col-end-2 row-start-1 row-span-2 justify-self-center self-center border rounded-full"/>
          <h4 className="col-start-2 col-end-3 row-start-1 row-span-1 text-xs">Part time Product Design</h4>
          <h4 className="text-xs col-start-2 col-end-3 row-start-2 row-span-1 font-semibold">levai</h4>
            <h4 className="col-start-3 col-end-4 row-start-1 row-span-2 justify-self-center self-center" style={{ fontSize: '9px'}}>{formattedDate}</h4>
          </div>
        </div>


        
      </div>
    </main>
  )
}