import Form from "next/form";

export default function Mawasiliano() {
  
    return (
        <div className="w-full grid h-screen" style={{ justifyContent: "center", alignContent: "center"}}>
             <Form action="/submit" className="w-full h-full grid grid-rows-[50px,50px,50px,50px,50px,100px,70px] grid-cols-[8rem,16rem] ">

            <label htmlFor="jinaLaKwanza" className="mr-3 row-start-1 row-span-1 col-start-1 col-end-2">jina La Kwanza</label>
            <input type="text" name="jinaLaKwanza" id="JinaLaKwanza" className="border rounded-md h-7 w-30 mr-3 row-start-1 row-span-1 col-start-2 col-end-3 justify-center place-items-center"/>
            
            <label htmlFor="jinaLaKati" className="mr-3 mr-3 row-start-2 row-span-1 col-start-1 col-end-2">Jina La Kati</label>
            <input type="text" name="jinaLaKati" id="jinaLaKati" className="h-7 w-30 mr-3 border rounded-md row-start-2 row-span-1 col-start-2 col-end-3 justify-center place-items-center"/>
             
            <label htmlFor="JinaLaMwisho" className="mr-3 mr-3 row-start-3 row-span-1 col-start-1 col-end-2">Jina La Mwisho</label>
            <input type="text" name="JinaLaMwisho" id="JinaLaMwisho" className="h-7 w-30 mr-3 border rounded-md row-start-3 row-span-1 col-start-2 col-end-3 justify-center place-items-center"/>
            
            <label htmlFor="baruaPepe" className="mr-3 mr-3 row-start-4 row-span-1 col-start-1 col-end-2">barua Pepe</label>
            <input type="text" name="baruaPepe" id="paruaPepe" className="h-7 w-30 mr-3 border rounded-md row-start-4 row-span-1 col-start-2 col-end-3 justify-center place-items-center"/>

             <label htmlFor="nambaYaSimu" className="mr-3 mr-3 row-start-5 row-span-1 col-start-1 col-end-2">Namba Ya Simu</label>
            <input type="text" name="nambaYaSimu" id="nambaYaSimu" className="h-7 w-30 mr-3 border rounded-md row-start-5 row-span-1 col-start-2 col-end-3 justify-center place-items-center"/>
            
             <label htmlFor="nambaYaSimu" className="mr-3 mr-3 row-start-6 row-span-1 col-start-1 col-end-2">Maelezo</label>
             <textarea  name="nambaYaSimu" id="nambaYaSimu" className="h-16 w-30 mr-3 border rounded-md row-start-6 row-span-1 col-start-2 col-end-3 justify-center place-items-center"/>

            <button className="h-6 w-30 mr-3 row-start-7 row-span-1 col-start-2 col-end-3 justify-center place-items-center border border-transparent rounded-full bg-amber-300">Wasilisha</button>
                
            </Form>
       </div>
    )
}