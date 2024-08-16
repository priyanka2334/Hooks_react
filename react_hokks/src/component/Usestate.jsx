

// import React, { useState } from 'react';
// function MyFunction(){
//     const[count,setCount] = useState(0);

//     return (
//         <>
//         <h1>Counter:{count}</h1>
//         <button onClick={() => setCount(count+1)}>Increment</button>
//         <button onClick={() => setCount(count-1)}>Decrement</button>
//         <button onClick={() => setCount(0)}>reset</button>
//         </>
//     );
// }
// export default MyFunction;




// import React,{useState} from 'react';
// function Counter(){
//     const[Count,setCount] =useState(0);

//     return(
//         <>
//         <h1>Counter : {Count}</h1>
//         <button onClick={() => setCount(Count+1)}>Increment</button>
//         <button onClick={() => setCount(Count-1)}>Decrement</button>
//         <button onClick={() => setCount(0)}>Reset</button>
//         </>
//     );
// }
// export default Counter;



// import React, {useState} from 'react';

// function Toggel(){
//     const [visible,setVisible] = useState(0);

//     let buttonText;
//     if(visible){
//         buttonText = 'Hide Text';
//     }else{
//         buttonText = 'Show Text'
//     }
//     return(
//         <>
//         <button onClick={()=> setVisible(!visible)}>{buttonText}</button>
//         {visible && <p>my name is priyanka</p>}
//         </>
//     )
// }
// export default Toggel;


// import React, {useState} from 'react';

// function Toggel(){
//     const[visible,setVisible] = useState(false);
//     let textButton;
//     if(visible){
//         textButton = 'Hide Text';
//     }else{
//         textButton = 'Show Text';
//     }
//     return(
//         <>
//         <button onClick={()=> setVisible(!visible)}>buttonText</button>
//         {visible && <h1>my name is paras</h1>}
//         </>
//     );
// }
// export default Toggel;



// import React,{useState} from 'react';
// function State(){

//     const [car , setCar] = useState({
//         brand: "Ferrari",
//         modal: "Roma",
//         year: "2023",
//         color: "red",
//     });

//     const changecolor =()=>{
//         setCar((prev)=>{
//             return {...prev, color:"blue"}
//         });
//     };
//     return(
//         <>
//         <h1>my {car.brand}</h1>
//         <h2>It is a {car.color} {car.modal} from {car.year}</h2>
//         <button onClick={changecolor}>Blue</button>
//         </>
//     )
// }
// export default State;
