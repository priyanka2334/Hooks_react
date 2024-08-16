// import {useCallback,useState} from "react";

// const CallBack=()=>{
//     const [count, setCount] = useState(0);

//     const handleIncrement =()=>{
//         setCount(prevstate => prevstate + 1);
        
//     }
//     const handleDecrement =()=>{
//         setCount(nextstate => nextstate - 1);
//     }

//     return(
//         <>
//         <h3>Count:{count}</h3>
//         <button onClick={handleIncrement}>Increment</button>
//         <button onClick={handleDecrement}>Decrement</button>
//         </>
//     )
// }
// export default CallBack;


// import { useCallback, useState } from "react";

// const CallBack = () => {
//   const [count, setCount] = useState(0);

//   const handleIncrement = useCallback(() => {
//     setCount((prevCount) => prevCount + 1);
//   }, []);

//   const handleDecrement = useCallback(() => {
//     setCount((prevCount) => prevCount - 1);
//   }, []);

//   return (
//     <>
//       <h3>Count: {count}</h3>
//       <button onClick={handleIncrement}>Increment</button>
//       <button onClick={handleDecrement}>Decrement</button>
//     </>
//   );
// };

// export default CallBack;
