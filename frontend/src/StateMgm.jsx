import React, { useState } from "react";
import { useEffect } from "react";
function StateMgm(){
    const [city,setCity] = useState("Hyberabad");
    console.log(city);
    useEffect(()=>{
        setCity("Warangal");
    })
    console.log(city);
    return(
        <>
            <h1>{city}</h1>
        </>
    )
}
export default StateMgm;