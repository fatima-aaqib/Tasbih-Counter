
"use client"


import { useState } from "react";

function TasbihCounter() {
    const [tasbihcount, setCount] = useState(0)
    return (
        <div>
        <div>
       <div className="flex justify-center py-44 px-44 ">

       <p className=" flex justify-center bg-emerald-100 text-center text-black font-bold sm:w-9 sm:h-9 md:w-64 md:h-64 lg:w-96 lg:h-96   py-10 px-11 items-center rounded-full text-4xl">
  TASBIH COUNTER {tasbihcount} </p>
 
        </div>
        
        </div>
        <div className="flex justify-center gap-7 -mt-32">

<button onClick={() => setCount(tasbihcount +1)} className="bg-red-300 text-4xl text-gray-100 font-semibold py-2 px-4 rounded-full">
    Increment
</button>
<button onClick={() => setCount( tasbihcount -1)} className="bg-blue-500 text-4xl text-gray-100 font-semibold py-2 px-4 rounded-full" >
    Decrement
</button>



        </div>

        <ul>
            <li className="flex justify-center py-11 px-11">
                <button onClick={() => setCount(0)} className="bg-indigo-400 text-4xl text-gray-100 py-4 h-20 px-4 rounded-full font-semibold">Reset</button>
            </li>
        </ul>
        </div>
    )
}
export default TasbihCounter

 