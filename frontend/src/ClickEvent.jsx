import { useState } from "react";
import React  from "react";
const ClickEvent=()=>{
        const [num,setnum] = useState(0);
        const inc = ()=>{
            setnum(num+1);
        }
        const dec = ()=>{
            if(num>0){
                setnum(num-1);
            }
        }
        const reset =()=>{
            setnum(0);
        }
    return(
        <div>
            <h1>{num}</h1>
            <button onClick={inc}> Increment </button>
            <button onClick={dec}> Decrement </button>
            <button onClick={reset}> Reset </button>
        </div>
    )
}
export default ClickEvent;