import react from 'react'
import Child from './Child'
const Parent=()=>{
    return (
        <div>Parent class
            <Child name="john" age={30}/>
        </div>
    )
}
export default Parent