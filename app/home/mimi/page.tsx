import Image from "next/image"

export default function Mimi() {
    return (
        <div className="w-full h-full grid grid-cols-2 grid-rows-[auto] justify-center place-items-center">
            <div className="mb-1  row-start-1 row=span-1 col-start-2 col-end-3 flex-col">
                <span className="text-lg font-semibold">
                    <h1>KUHUSU NIMI</h1>
                </span>
                <div className="">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Culpa nemo veritatis minus corporis saepe optio doloremque sequi iure? Omnis,
                        exercitationem animi dolore rem ea sint itaque rerum quo fugiat voluptatem!
                    </p>
                    <br/>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                        Enim amet, porro, sapiente ad quisquam veniam esse rem saepe natus libero aut
                        asperiores nisi ea quod dicta voluptatum animi ex illum!
                    </p>
                </div>
            </div>
           
            <div className="row-start-1 row=span-1 col-start-1 col-end-2">
                <Image src='/passport.PNG' width={300} height={300} alt="img"/>
            </div>
        </div>
    )
}