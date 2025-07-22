import { useReducer, useState } from "react"

import { Show } from "./CalculatorReduce."

export default function Calculator(){
    const[firstNumber,setFirstNumbser]=useState(null)
    const[secondNumber,setSecondNumbser]=useState(null)
    
    const[resoult,setResoult]=useReducer(Show,null)

    function add(){
        setResoult({
            type:"added",
            payload:{firstNumber,secondNumber}
        })
    }


     function Substract(){
        setResoult({
            type:"Substract",
            payload:{firstNumber,secondNumber}
        })
    }


       function multiply(){
        setResoult({
            type:"multiply",
            payload:{firstNumber,secondNumber}
        })
    }

      function divide(){
        setResoult({
            type:"divide",
            payload:{firstNumber,secondNumber}
        })
    }

    return(
       
        <div style={{height:"100vh",backgroundColor:"teal",width:"100vw",display:"flex",alignItems:"center",justifyContent:"center"}}>
            <div style={{display:"flex",flexDirection:"column"}}>
            <label>Enter first number </label>
            <input type="text" onChange={(e)=>{setFirstNumbser(e.target.value)}}></input>

            <label>Enter second number </label>
            <input type="text" onChange={(e)=>{setSecondNumbser(e.target.value)}}></input>

            <button onClick={add}>Sum</button>
            <button onClick={Substract}>Substract</button>
             <button onClick={multiply}>multiply</button>
              <button onClick={divide}>divide</button>
              {resoult}
            </div>
        </div>
        
    )
}