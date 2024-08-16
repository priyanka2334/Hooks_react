import React, {useEffect, useState} from 'react'
import './App.css'

function Effect(){

    const [count , setCount] = useState(0)

    useEffect(()=>{
        setTimeout(()=>{
            setCount(count =>count+1)
        },500)
    })
    return(
        <>
        <h1> I have rendered 0 times!</h1>
        </>

    )
}
export default Effect;