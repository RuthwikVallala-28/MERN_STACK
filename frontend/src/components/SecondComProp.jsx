import React from "react";
const SecondComProp=(props)=>{
    const {model,year,dealer,color} = props.m
    return(
        <>                                                          {/* props with destructive */}
            <div>{model}</div>
            <div>{year}</div>
            <div>{dealer}</div>
            <div>{color}</div>
        </>
    )
}
export default SecondComProp;