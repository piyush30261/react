import { usestate } from 'react' ;
function ToggleEx(){
    const [value,setvalue] =usestate(" status on");
    function fun(){
        setvalue(" status off");
    }
    return(
        <>
        <h1>Toggle button</h1>
        <h1>{value}</h1>
        <button onclick={fun}>Toggle</button>
        <ToggleEx></ToggleEx>

        </>
    )
}
    export default ToggleEx
