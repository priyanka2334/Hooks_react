// import {useState} from 'react';

// export default function Memo(){
//     const[count, setCount] = useState(0);
//     const[Decrement,setDecrement] = useState(0);
//     const[Increment,setIncrement] = useState(0)

//     const calculater = (value)=>{
//         return value*value;
//     }

//     return(
//         <>
//         <h1>Memo</h1>
//         <h1>Increment:{Increment}</h1>
//         <h1>Decriment:{Decrement}</h1>
//         <button onClick={() =>setIncrement(Increment+1)}>Increment</button>
//         <button onClick={() =>setDecrement(Decrement-1)}>Decrement</button>
//         </>
//     )

// }
// export default Memo;


import { useState } from 'react';

export default function Memo() {
    const [count, setCount] = useState(0);
    const [decrement, setDecrement] = useState(0);
    const [increment, setIncrement] = useState(0);

    const calculater = (value) => {
        return value * value;
    }

    return (
        <>
            <h1>Memo</h1>
            <h1>Increment: {increment}</h1>
            <h1>Decrement: {decrement}</h1>
            <button onClick={() => setIncrement(increment + 1)}>Increment</button>
            <button onClick={() => setDecrement(decrement - 1)}>Decrement</button>
        </>
    );
}
