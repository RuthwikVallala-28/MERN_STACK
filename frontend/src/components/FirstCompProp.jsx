import React from "react";
const FirstCompProp=(props)=>{
    return(
        <>                                                          {/* props without destructive */}
            <h1>Company Name {props.n}</h1>
        </>
    )
}
export default FirstCompProp;