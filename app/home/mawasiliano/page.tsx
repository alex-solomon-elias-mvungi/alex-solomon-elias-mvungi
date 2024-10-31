import Form from "next/form";

export default function Mawasiliano() {
  
    return (
        <Form action="/submit" className="w-full h-full grid grid-rows-[50px,50px,50px,50px,50px,50px,50px] grid-cols-[6rem,14rem] justify-center justify-items-center">

            <label htmlFor="jinaLaKwanza" className="mr-3 row-start-1 row-span-1 col-start-1 col-end-2">jinaLaKwanza</label>
            <input type="text" name="jinaLaKwanza" id="JinaLaKwanza" className="h-6 w-30 mr-3 row-start-1 row-span-1 col-start-2 col-end-3 justify-center place-items-center"/>
            
            <label htmlFor="jinaLaKati" className="mr-3 mr-3 row-start-2 row-span-1 col-start-1 col-end-2">JinaLaKati</label>
            <input type="text" name="jinaLaKati" id="jinaLaKati" className="h-6 w-30 mr-3 row-start-2 row-span-1 col-start-2 col-end-3 justify-center place-items-center"/>
             
            <label htmlFor="JinaLaMwisho" className="mr-3 mr-3 row-start-3 row-span-1 col-start-1 col-end-2">JinaLaMwisho</label>
            <input type="text" name="JinaLaMwisho" id="JinaLaMwisho" className="h-6 w-30 mr-3 row-start-3 row-span-1 col-start-2 col-end-3 justify-center place-items-center"/>
            
            <label htmlFor="baruaPepe" className="mr-3 mr-3 row-start-4 row-span-1 col-start-1 col-end-2">baruaPepe</label>
            <input type="text" name="baruaPepe" id="paruaPepe" className="h-6 w-30 mr-3 row-start-4 row-span-1 col-start-2 col-end-3 justify-center place-items-center"/>

             <label htmlFor="nambaYaSimu" className="mr-3 mr-3 row-start-5 row-span-1 col-start-1 col-end-2">NambaYaSimu</label>
            <input type="text" name="nambaYaSimu" id="nambaYaSimu" className="h-6 w-30 mr-3 row-start-5 row-span-1 col-start-2 col-end-3 justify-center place-items-center"/>
            
             <label htmlFor="nambaYaSimu" className="mr-3 mr-3 row-start-6 row-span-1 col-start-1 col-end-2">Maelezo</label>
             <input type="text" name="nambaYaSimu" id="nambaYaSimu" className="h-6 w-30 mr-3 row-start-6 row-span-1 col-start-2 col-end-3 justify-center place-items-center"/>

            <button className="h-6 w-30 mr-3 row-start-7 row-span-1 col-start-2 col-end-3 justify-center place-items-center">Wasilisha</button>
        </Form>
    )
}