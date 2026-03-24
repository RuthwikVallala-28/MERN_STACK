const Hi=()=>{
    return(
            <h1>hi i am from footer</h1>
    )
}
const Hello=()=>{
    return(
            <h1>hello i am from footer</h1>
    )
} 
function Footer(){
    return (
        <>
            <h1>This is footer</h1>
            <Hi/>
            <Hello/>
        </>
    )
}
export default Footer;