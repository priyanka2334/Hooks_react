

// import { useState, useRef, useEffect } from 'react';
// function Useref() {
//   const [count, setCount] = useState(0);
//   const renderCount = useRef(0);
//   const inputRef = useRef(null);

//   useEffect(() => {
//     // Focus the input element when the component mounts
//     if (inputRef.current) {
//       inputRef.current.focus();
//     }
//   }, []);

//   useEffect(() => {
//     // Increment the render count on every render
//     renderCount.current = renderCount.current + 1;
//     console.log("Re-render");
//   });

//   return (
//     <>
//       <input type="text" ref={inputRef} />
//       <h1>{count}</h1>
//       <button onClick={() => setCount(count + 1)}>Increment</button>
//       <button onClick={() => setCount(count - 1)}>Decrement</button>
//       <h2>Render Count: {renderCount.current}</h2>
//     </>
//   );
// }

// export default Useref;



import { useRef, useState} from "react";

function Userefc(){
    const[count,setCount] = useState(0);

    const handleInc = ()=>{
        setCount(prev => prev + 1);
    }
    const handlDec = ()=>{
        setCount(next => next-1);
    }
    return(
        <>
        <h3>Count:{count}</h3>
        <button onClick={handleInc}>Increment</button>
        <button onClick={handlDec}>Decrement</button>
        </>
    )
}
export default Userefc;