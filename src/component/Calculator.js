import { useState } from "react"

// import { Show } from "./CalculatorReduce."
import { useSelector, useDispatch } from 'react-redux'
import {add,Substract,multiply,divide} from "../features/calcs/calcSlice"


export default function Calculator(){
    const[firstNumber,setFirstNumbser]=useState(null)
    const[secondNumber,setSecondNumbser]=useState(null)
    
    // const[resoult,setResoult]=useReducer(Show,null)

    //current value from store (null)

    const resultstate =useSelector((state)=>{
    return state.calc.result
    })

console.log(resultstate)

const dispatch =useDispatch()
    function Add(){
        // setResoult({
        //     type:"added",
        //     payload:{firstNumber,secondNumber}
        // })
        console.log("dispatch add ")
       dispatch(add({
        firstNumber:firstNumber,
        secondNumber:secondNumber,
       }))
       

    }


     function substract(){
        // setResoult({
        //     type:"Substract",
        //     payload:{firstNumber,secondNumber}
        // })

        dispatch(Substract({
        firstNumber:firstNumber,
        secondNumber:secondNumber,
        }))
    }


       function Multiply(){
        // setResoult({
        //     type:"multiply",
        //     payload:{firstNumber,secondNumber}
        // })

        dispatch(multiply({
        firstNumber:firstNumber,
        secondNumber:secondNumber,
        }))
    }

      function Divide(){
        // setResoult({
        //     type:"divide",
        //     payload:{firstNumber,secondNumber}
        // })
        dispatch(divide({
        firstNumber:firstNumber,
        secondNumber:secondNumber,
        }))
    }

    return(
       
        <div style={{height:"100vh",backgroundColor:"teal",width:"100vw",display:"flex",alignItems:"center",justifyContent:"center"}}>
            <div style={{display:"flex",flexDirection:"column"}}>
            <label>Enter first number </label>
            <input type="text" onChange={(e)=>{setFirstNumbser(e.target.value)}}></input>

            <label>Enter second number </label>
            <input type="text" onChange={(e)=>{setSecondNumbser(e.target.value)}}></input>

            <button onClick={Add}>Sum</button>
            <button onClick={substract}>Substract</button>
             <button onClick={Multiply}>multiply</button>
              <button onClick={Divide}>divide</button>
              {resultstate}
            </div>
        </div>
        
    )
}