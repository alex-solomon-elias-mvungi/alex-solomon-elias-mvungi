import Image from "next/image"

export default function Kazizangu() {
     const currentDate: Date = new Date()

  const formattedDate: string = Intl.DateTimeFormat('en-US',
    {
      year: 'numeric',
      month: 'long',
      // day: 'numeric'
    }
    ).format(currentDate)
    
    return (
        <main>
            <h3 className="mt-4">Projects</h3>
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
        </main>
    )
}