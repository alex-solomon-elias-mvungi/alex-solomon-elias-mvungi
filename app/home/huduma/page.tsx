import Image from "next/image"
import Link from "next/link"

export default function Huduma() {
     return (
        <div className="px-3 py-2 mt-2 grid grid-cols-1 grid-rows-[300px_minmax(400px,_1fr)_1000px]">
             <div className="row-start-1 row=span-1 flex flex-row justify-center content-center">
                 <h1>Explore success stories</h1>
                 <h3>aaaaaaaaaaahhhhhhhhhhhhhhhhhhhh</h3>
             </div>

             <div>
                 <span>
                     <Image src='/passport.PNG' width={250} height={250} alt="img"/>
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