import Image from "next/image"
import Link from "next/link"

export default function Huduma() {
     return (
        <div className="px-3 py-2 mt-2 grid grid-cols-1 grid-rows-[150px_minmax(400px,_1fr)_1000px]">
             <div className="row-start-1 row=span-1 flex flex-col justify-center place-items-center">
                 <h1 className="text-4xl font-bold mb-4">Explore success stories</h1>
                 <h3>aaaaaaaaaaahhhhhhhhhhhhhhhhhhhh</h3>
             </div>

             <div className="grid grid-cols-[150px_minmax(400px,_1fr)] grid-rows-[140px] justify-content place-items-center">
                 <span>
                     <Image src='/passport.PNG' width={100} height={100} alt="img"/>
                 </span>
                 <span>
                     <p>
                         Lorem ipsum dolor sit amet consectetur adipisicing elit.
                         Beatae quam nihil accusantium voluptas eum voluptates?
                         Consequatur ullam rerum voluptatem.
                         Quia eum cupiditate sint nemo quaerat nulla saepe dolorum optio dignissimos?
                     </p>
                 </span>
             </div>

             <div>
                 <div>
                     <h1>varcel</h1>
                     <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.
                         Beatae quam nihil accusantium voluptas
                     </p>
                     <span>
                            <Link href={{
                                pathname:'/home/huduma'
                            }}>Huduma</Link>
                     </span>
                 </div>
             </div>
        </div>
    )
}