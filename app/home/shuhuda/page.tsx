import Image from "next/image"
import Link from "next/link"

export default function Huduma() {
     return (
        <div className="px-3 py-2 mt-2 grid grid-cols-1 grid-rows-[150px,200px,auto]">
             <div className="row-start-1 row=span-1 flex flex-col justify-center place-items-center">
                 <h1 className="text-4xl font-bold mb-4">Explore success stories</h1>
                 <h3>aaaaaaaaaaahhhhhhhhhhhhhhhhhhhh</h3>
             </div>

             <div className="h-24 grid grid-cols-[150px_minmax(200px,_1fr)] grid-rows-[140px] justify-content place-items-center">
                 <span>
                     <Image src='/passport.PNG' width={100} height={100} alt="img"/>
                 </span>
                 <span>
                     <p>
                         Lorem ipsum dolor sit amet consectetur adipisicing elit.
                         Beatae quam nihil accusantium voluptas eum voluptates?
                         Consequatur ullam rerum voluptatem.
                         Quia eum cupiditate sint nemo quaerat nulla saepe dolorum optio dignissimos?

                         <div className="flex flex-row justify-content place-items-center">
                            <h1 className="mr-2">oohhhh!!!</h1>
                            <p className="font-light text-sm italic">computer sientisc</p>
                        </div>
                     </p>
                 </span>
             </div>

             <div className="h-24 row-start-3 row=span-1 grid grid-rows-[6rem] grid-cols-[1fr,1fr,1fr]">
                  <div className="col-start-1 col-end-2 row-start-1 row-end-2 grid grid-rows-[20px,90px,200px] grid-cols-[1fr]">
                     <h1 className="col-start-1 col-end-2 row-start-2 row-end-3">varcel</h1>
                     <p className="col-start-1 col-end-2 row-start-3 row-end-4"> Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Beatae quam nihil accusantium voluptas eeeeeeeeeeeeeeeeeeehhhhhh
                     iiiiiiiiiiiiiiihhhhhhhhhhhhhhh ooooooooooooooohhhhhhhhhh uuuuuuuuuhhhh
                     </p>
                     <span className="col-start-1 col-end-2 row-start-4 row-end-5">
                            <Link href={{
                                pathname:'/home/huduma'
                            }}>Huduma</Link>
                     </span>
                 </div>
                 
                 <div className="h-24 col-start-2 col-end-3 row-start-1 row-end-2  grid grid-rows-[20px,90px,200px] grid-cols-[1fr]">
                     <h1 className="col-start-1 col-end-2 row-start-2 row-end-3">varcel</h1>
                     <p className="col-start-1 col-end-2 row-start-3 row-end-4"> Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Beatae quam nihil accusantium voluptas eeeeeeeeeeeeeeeeeeehhhhhh
                     iiiiiiiiiiiiiiihhhhhhhhhhhhhhh ooooooooooooooohhhhhhhhhh uuuuuuuuuhhhh
                     </p>
                     <span className="col-start-1 col-end-2 row-start-4 row-end-5">
                            <Link href={{
                                pathname:'/home/huduma'
                            }}>Huduma</Link>
                     </span>
                 </div>
                 
                 <div className="h-24 col-start-3 col-end-4 row-start-1 row-end-2 grid grid-rows-[20px,90px,200px] grid-cols-[1fr]">
                     <h1 className="col-start-1 col-end-2 row-start-2 row-end-3">varcel</h1>
                     <p className="col-start-1 col-end-2 row-start-3 row-end-4"> Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Beatae quam nihil accusantium voluptas eeeeeeeeeeeeeeeeeeehhhhhh
                     iiiiiiiiiiiiiiihhhhhhhhhhhhhhh ooooooooooooooohhhhhhhhhh uuuuuuuuuhhhh
                     </p>
                     <span className="col-start-1 col-end-2 row-start-4 row-end-5">
                            <Link href={{
                                pathname:'/home/huduma'
                            }}>Huduma</Link>
                     </span>
                </div>
             </div>
            
        </div>
    )
}