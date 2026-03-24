import X from './Footer'
const Hi = ()=>{
        return (
            <h1>I am from hi function</h1>
        )
}
const Hello = ()=>{
        return(
            <h1>I am from hello function</h1>
        )
}
function Body(){
    return (
        <>
        <h1>This is the Body</h1>
        <Hi/>
        <Hello/>
        <X/>
        </>
 
    )
}
export default Body;